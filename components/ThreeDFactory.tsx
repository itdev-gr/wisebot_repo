
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion as m } from 'framer-motion';
import { Upload, RefreshCcw, Download, Cuboid, Grid, Sparkles, Cylinder, Box, FileDown, CheckCircle2, X, Zap } from 'lucide-react';
import { GoogleGenAI } from "../services/geminiProxy";
import { useNavigate } from 'react-router-dom';
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext'; // Hook
import { authFetch } from '../services/backendApi';

const motion = m as any;

interface ThreeDFactoryProps {
  lang: 'el' | 'en';
}

// SAMPLE IMAGES (UPDATED WITH 5 HEROES)
const SAMPLES = [
  { id: 'wisebot', src: '/images/wisebot.jpg', label: 'Wisebot' },
  { id: 'crocus', src: '/images/crocus.jpg', label: 'Crocus' },
  { id: 'pencilo', src: '/images/pencilo.jpg', label: 'Pencilo' },
  { id: 'link', src: '/images/link.jpg', label: 'Link' },
  { id: 'sparken', src: '/images/sparken.jpg', label: 'Sparken' }
];


export default function ThreeDFactory({ lang }: ThreeDFactoryProps) {
  const navigate = useNavigate();
  const { badges, showNotification, credits, spendCredits, costs } = useEconomy();
  const t = UI_TEXT[lang].factory3d;
  
  const [image, setImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [styleMode, setStyleMode] = useState<'print_ready' | 'voxel'>('print_ready');

  // Meshy.ai real 3D generation state
  const [meshyTaskId, setMeshyTaskId] = useState<string | null>(null);
  const [meshyStatus, setMeshyStatus] = useState<'idle' | 'processing' | 'complete' | 'error'>('idle');
  const [meshyProgress, setMeshyProgress] = useState(0);
  const [meshyModelUrls, setMeshyModelUrls] = useState<any>(null);
  const [meshyThumbnail, setMeshyThumbnail] = useState<string | null>(null);
  const meshyPollingRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Gallery state
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
        showNotification('📂', lang === 'el' ? "Ανέβασε ένα αρχείο εικόνας." : "Please upload an image file.");
        return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result as string);
        setResultImage(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const selectSample = (src: string) => {
      setImage(src);
      setResultImage(null);
  };

  // --- 3D TILT EFFECT LOGIC ---
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!resultImage) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    
    // Calculate rotation based on mouse position (Sensitivity 20)
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const generate3DPreview = async () => {
    if (!image) return;

    if (!spendCredits(costs.threeD)) {
      showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
      setTimeout(() => navigate('/store'), 1500);
      return;
    }

    setIsProcessing(true);
    try {
        const ai = new GoogleGenAI();
        
        let imageBytes = "";
        let mimeType = "image/png";

        if (image.startsWith('data:')) {
            const parts = image.split(',');
            mimeType = parts[0].match(/:(.*?);/)?.[1] || "image/png";
            imageBytes = parts[1];
        } else {
            const resp = await fetch(image);
            const blob = await resp.blob();
            mimeType = blob.type;
            const reader = new FileReader();
            imageBytes = await new Promise((resolve) => {
                reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
                reader.readAsDataURL(blob);
            });
        }

        let prompt = "";
        const model = 'gemini-2.5-flash-image';

        if (styleMode === 'voxel') {
            prompt = `
            Transform this image into a Voxel Art character (cube style).
            View: Front-facing isometric view, centered.
            Background: Solid dark grey.
            Style: MagicaVoxel, cute, detailed.
            `;
        } else {
            // UPDATED PROMPT FOR BETTER CENTERED VIEW
            prompt = `
            Act as a 3D Modeler. Convert this character into a "3D Print Ready" digital figurine.
            
            VIEW ANGLE: Front 3/4 view (slightly angled to show depth, but mostly front-facing).
            CENTERING: Perfectly centered on a circular exhibition pedestal/base.
            
            STYLE REQUIREMENTS:
            - Material: Grey Resin Prototype (matte finish).
            - Lighting: Studio lighting to highlight geometry and depth.
            - Clarity: Clean edges, no blur, high contrast.
            - Background: Solid dark grey (neutral).
            
            The goal is an image that looks like a photograph of a real 3D printed object on a desk.
            `;
        }

        const response = await ai.models.generateContent({
            model: model,
            contents: {
                parts: [
                    { inlineData: { mimeType: mimeType, data: imageBytes } },
                    { text: prompt }
                ]
            },
            config: {
                responseModalities: ['TEXT', 'IMAGE'],
            }
        });

        const parts = response.candidates?.[0]?.content?.parts;
        if (parts) {
            for (const part of parts) {
                if (part.inlineData) {
                    setResultImage(`data:image/png;base64,${part.inlineData.data}`);
                    break;
                }
            }
        } else {
            throw new Error("No image generated.");
        }

    } catch (error: any) {
        console.error("3D Generation Error:", error);
        showNotification('❌', lang === 'el' ? "Σφάλμα δημιουργίας" : "Generation error");
    } finally {
        setIsProcessing(false);
    }
  };

  const handleDownloadImage = () => {
    if (resultImage) {
        const link = document.createElement('a');
        link.href = resultImage;
        link.download = `WiseBot_${styleMode}_Model.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
  };

  // ─── Meshy.ai Real 3D Generation ───
  const startMeshyPolling = useCallback((taskId: string) => {
    if (meshyPollingRef.current) clearInterval(meshyPollingRef.current);
    let attempts = 0;
    const maxAttempts = 120; // ~10 minutes at 5s intervals

    meshyPollingRef.current = setInterval(async () => {
      attempts++;
      if (attempts > maxAttempts) {
        if (meshyPollingRef.current) clearInterval(meshyPollingRef.current);
        setMeshyStatus('error');
        return;
      }
      try {
        const resp = await authFetch(`/api/ai/meshy-status?taskId=${encodeURIComponent(taskId)}`);
        const data = await resp.json();
        setMeshyProgress(data.progress || 0);

        if (data.status === 'complete' && data.modelUrls) {
          if (meshyPollingRef.current) clearInterval(meshyPollingRef.current);
          setMeshyModelUrls(data.modelUrls);
          if (data.thumbnailUrl) setMeshyThumbnail(data.thumbnailUrl);
          setMeshyStatus('complete');
          showNotification('🎉', lang === 'el' ? 'Το 3D μοντέλο είναι έτοιμο!' : 'Your 3D model is ready!');
        } else if (data.status === 'error') {
          if (meshyPollingRef.current) clearInterval(meshyPollingRef.current);
          setMeshyStatus('error');
          showNotification('❌', data.error || (lang === 'el' ? 'Σφάλμα 3D' : '3D Error'));
        }
      } catch (err) {
        console.warn('Meshy poll error:', err);
      }
    }, 5000);
  }, [lang, showNotification]);

  const generateReal3D = async () => {
    if (!image) return;

    if (!spendCredits(costs.threeD)) {
      showNotification('💰', lang === 'el' ? 'Δεν έχεις αρκετά Credits!' : 'Not enough Credits!');
      setTimeout(() => navigate('/store'), 1500);
      return;
    }

    setMeshyStatus('processing');
    setMeshyProgress(0);
    setMeshyModelUrls(null);
    setMeshyThumbnail(null);

    try {
      // Prepare image for Meshy (needs to be data URI or public URL)
      let imageUrl = image;

      // If it's a local path (not data URI), fetch and convert to data URI
      if (!image.startsWith('data:') && !image.startsWith('http')) {
        const resp = await fetch(image);
        const blob = await resp.blob();
        const reader = new FileReader();
        imageUrl = await new Promise((resolve) => {
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(blob);
        });
      }

      const resp = await authFetch('/api/ai/meshy-generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ imageUrl }),
      });

      const data = await resp.json();
      if (data.taskId) {
        setMeshyTaskId(data.taskId);
        startMeshyPolling(data.taskId);
      } else {
        throw new Error(data.error || 'Failed to start 3D generation');
      }
    } catch (error: any) {
      console.error('Meshy generation error:', error);
      setMeshyStatus('error');
      showNotification('❌', error.message || (lang === 'el' ? 'Σφάλμα 3D' : '3D Error'));
    }
  };

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      if (meshyPollingRef.current) clearInterval(meshyPollingRef.current);
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 min-h-full flex flex-col pt-2">

      {/* COMPACT HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
          <Cuboid size={24} className="text-white" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-[1000] text-white tracking-tighter uppercase italic leading-none">
            3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">FACTORY</span>
          </h1>
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-[10px]">
            {t.subtitle}
          </p>
        </div>
      </div>

      {/* MAIN LAYOUT — Side-by-side on lg */}
      <div className="flex flex-col lg:flex-row gap-5 flex-1 min-h-0">

        {/* LEFT: CONTROLS */}
        <div className="w-full lg:w-[340px] shrink-0 space-y-5 flex flex-col">

          {/* HERO SELECTION */}
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-4 space-y-3">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{lang === 'el' ? 'ΔΙΑΛΕΞΕ ΗΡΩΑ' : 'CHOOSE HERO'}</p>
            <div className="grid grid-cols-3 gap-2">
              {SAMPLES.map(sample => (
                <button
                  key={sample.id}
                  onClick={() => selectSample(sample.src)}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-square group ${
                    image === sample.src
                      ? 'border-cyan-400 ring-2 ring-cyan-400/30 scale-[1.02]'
                      : 'border-white/10 hover:border-white/30'
                  }`}
                >
                  <img src={sample.src} className="w-full h-full object-cover" alt={sample.label} />
                  <div className={`absolute inset-x-0 bottom-0 py-1 text-center text-[9px] font-black uppercase tracking-wider ${
                    image === sample.src ? 'bg-cyan-500/90 text-white' : 'bg-black/70 text-white/60'
                  }`}>
                    {sample.label}
                  </div>
                  {image === sample.src && (
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-cyan-400 flex items-center justify-center">
                      <span className="text-[8px] text-black font-black">✓</span>
                    </div>
                  )}
                </button>
              ))}
              {/* Upload */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="aspect-square rounded-xl border-2 border-dashed border-white/15 flex flex-col items-center justify-center cursor-pointer hover:border-fuchsia-400/50 hover:bg-fuchsia-500/5 transition-all"
              >
                <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleChange} />
                <Upload size={18} className="text-white/40 mb-1" />
                <span className="text-[9px] font-black text-white/30 uppercase">{lang === 'el' ? 'ΑΝΕΒΑΣΕ' : 'UPLOAD'}</span>
              </div>
            </div>
          </div>

          {/* MODE SELECTOR */}
          <div className="bg-white/[0.03] rounded-2xl border border-white/10 p-4 space-y-3">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em]">{lang === 'el' ? 'ΣΤΥΛ 3D' : '3D STYLE'}</p>
            <div className="bg-black/30 p-1.5 rounded-xl flex gap-1.5">
              <button
                onClick={() => setStyleMode('voxel')}
                className={`flex-1 py-3 rounded-lg font-black uppercase text-xs flex items-center justify-center gap-2 transition-all ${
                  styleMode === 'voxel'
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <Grid size={14} /> VOXEL
              </button>
              <button
                onClick={() => setStyleMode('print_ready')}
                className={`flex-1 py-3 rounded-lg font-black uppercase text-xs flex items-center justify-center gap-2 transition-all ${
                  styleMode === 'print_ready'
                    ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-lg shadow-fuchsia-500/20'
                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                }`}
              >
                <Cylinder size={14} /> REALISTIC
              </button>
            </div>
          </div>

          {/* GENERATE BUTTON */}
          <button
            onClick={generate3DPreview}
            disabled={!image || isProcessing}
            className={`w-full py-4 rounded-2xl font-[1000] text-base uppercase italic tracking-wider hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-40 disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-auto ${
              isProcessing
                ? 'bg-white/10 text-white/60 border border-white/10'
                : 'bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40'
            }`}
          >
            {isProcessing ? (
              <> <RefreshCcw size={20} className="animate-spin" /> {lang === 'el' ? 'ΔΗΜΙΟΥΡΓΙΑ...' : 'GENERATING...'} </>
            ) : (
              <> <Sparkles size={20} /> {lang === 'el' ? `ΜΕΤΑΤΡΟΠΗ ΣΕ 3D (-${costs.threeD}⚡)` : `CONVERT TO 3D (-${costs.threeD}⚡)`} </>
            )}
          </button>
          <p className="text-white/30 text-xs font-bold text-center mt-2">
            {lang === 'el' ? `⚡ ${costs.threeD} Credits | Έχεις: ${credits}` : `⚡ ${costs.threeD} Credits | You have: ${credits}`}
          </p>

        </div>

        {/* RIGHT: PREVIEW AREA */}
        <div className="flex-1 flex flex-col relative min-h-[400px] lg:min-h-0">

          {/* 3D Container with Tilt Effect */}
          <div
            className="flex-1 bg-[#0B0F1A] rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center cursor-move group"
            style={{ perspective: '1000px' }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

            {/* Glow effects */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-opacity duration-700 ${
              resultImage ? 'opacity-30' : 'opacity-10'
            } ${styleMode === 'voxel' ? 'bg-cyan-500' : 'bg-fuchsia-500'}`} />

            {resultImage ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative z-10 w-full h-full flex items-center justify-center p-6"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                  transition: 'transform 0.1s ease-out',
                  transformStyle: 'preserve-3d'
                }}
              >
                <img
                  src={resultImage}
                  alt="Result"
                  className={`max-h-full max-w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] ${styleMode === 'voxel' ? 'rendering-pixelated' : ''}`}
                  style={{ transform: 'translateZ(50px)' }}
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-[9px] font-black uppercase text-white/70" style={{ transform: 'translateZ(80px)' }}>
                  {styleMode === 'voxel' ? 'VOXEL' : 'REALISTIC'} PREVIEW
                </div>
              </motion.div>
            ) : (
              <div className="text-center z-10 pointer-events-none flex flex-col items-center justify-center gap-3">
                {image ? (
                  <>
                    <div className="relative">
                      <img src={image} className="w-28 h-28 rounded-2xl object-cover opacity-40 grayscale" alt="Preview" />
                      <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-white/20 animate-pulse" />
                    </div>
                    <p className="font-black uppercase tracking-widest text-[11px] text-white/40">
                      {lang === 'el' ? 'ΕΤΟΙΜΟ ΓΙΑ RENDER' : 'READY TO RENDER'}
                    </p>
                    <p className="text-[10px] text-white/20 font-bold">
                      {lang === 'el' ? 'Πάτα "Μετατροπή σε 3D"' : 'Click "Convert to 3D"'}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      <Cuboid size={36} className="text-white/20" strokeWidth={1} />
                    </div>
                    <p className="font-black uppercase tracking-widest text-[11px] text-white/25">
                      {lang === 'el' ? 'ΠΡΩΤΑ ΔΙΑΛΕΞΕ ΗΡΩΑ' : 'SELECT A HERO FIRST'}
                    </p>
                  </>
                )}
              </div>
            )}

            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-white/10 rounded-tl-lg" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-white/10 rounded-tr-lg" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-white/10 rounded-bl-lg" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-white/10 rounded-br-lg" />
          </div>

          {/* ACTION BAR */}
          {resultImage && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 space-y-2"
            >
              <div className="flex gap-2">
                <button
                  onClick={handleDownloadImage}
                  className="flex-1 py-3.5 bg-gradient-to-r from-fuchsia-600/20 to-cyan-600/20 hover:from-fuchsia-600/30 hover:to-cyan-600/30 text-white rounded-xl border border-white/10 font-[1000] uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-2"
                >
                  <Download size={16} /> {lang === 'el' ? 'ΛΗΨΗ ΕΙΚΟΝΑΣ' : 'DOWNLOAD IMAGE'}
                </button>
                <button
                  onClick={generateReal3D}
                  disabled={meshyStatus === 'processing'}
                  className={`flex-1 py-3.5 rounded-xl border font-[1000] uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-2 ${
                    meshyStatus === 'processing'
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                      : meshyStatus === 'complete'
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/20'
                      : 'bg-gradient-to-r from-emerald-600/20 to-teal-600/20 hover:from-emerald-600/30 hover:to-teal-600/30 text-white border-white/10'
                  }`}
                >
                  {meshyStatus === 'processing' ? (
                    <><RefreshCcw size={14} className="animate-spin" /> {meshyProgress}%</>
                  ) : meshyStatus === 'complete' ? (
                    <><CheckCircle2 size={14} /> {lang === 'el' ? 'ΕΤΟΙΜΟ!' : 'READY!'}</>
                  ) : (
                    <><Box size={14} /> {lang === 'el' ? `ΠΡΑΓΜΑΤΙΚΟ 3D (-${costs.threeD}⚡)` : `REAL 3D (-${costs.threeD}⚡)`}</>
                  )}
                </button>
              </div>

              {/* Meshy Progress Bar */}
              {meshyStatus === 'processing' && (
                <div className="space-y-1">
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                      style={{ width: `${meshyProgress}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-amber-300/60 font-bold text-center">
                    {lang === 'el' ? 'Δημιουργία πραγματικού 3D μοντέλου...' : 'Creating real 3D model...'}
                  </p>
                </div>
              )}

              {/* Meshy Download Links */}
              {meshyStatus === 'complete' && meshyModelUrls && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl space-y-2"
                >
                  <p className="text-[10px] text-emerald-300 font-black uppercase tracking-widest text-center">
                    {lang === 'el' ? '🎉 3D ΜΟΝΤΕΛΟ ΕΤΟΙΜΟ — ΚΑΤΕΒΑΣΕ' : '🎉 3D MODEL READY — DOWNLOAD'}
                  </p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {meshyModelUrls.glb && (
                      <a href={meshyModelUrls.glb} download className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-[10px] font-black uppercase tracking-wider hover:bg-emerald-600/30 transition-all flex items-center gap-1">
                        <FileDown size={10} /> GLB
                      </a>
                    )}
                    {meshyModelUrls.fbx && (
                      <a href={meshyModelUrls.fbx} download className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-[10px] font-black uppercase tracking-wider hover:bg-emerald-600/30 transition-all flex items-center gap-1">
                        <FileDown size={10} /> FBX
                      </a>
                    )}
                    {meshyModelUrls.obj && (
                      <a href={meshyModelUrls.obj} download className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-[10px] font-black uppercase tracking-wider hover:bg-emerald-600/30 transition-all flex items-center gap-1">
                        <FileDown size={10} /> OBJ
                      </a>
                    )}
                    {meshyModelUrls.stl && (
                      <a href={meshyModelUrls.stl} download className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-[10px] font-black uppercase tracking-wider hover:bg-emerald-600/30 transition-all flex items-center gap-1">
                        <FileDown size={10} /> STL
                      </a>
                    )}
                    {meshyModelUrls.usdz && (
                      <a href={meshyModelUrls.usdz} download className="px-3 py-1.5 bg-emerald-600/20 border border-emerald-500/30 rounded-lg text-emerald-300 text-[10px] font-black uppercase tracking-wider hover:bg-emerald-600/30 transition-all flex items-center gap-1">
                        <FileDown size={10} /> USDZ
                      </a>
                    )}
                  </div>
                </motion.div>
              )}

              {meshyStatus === 'error' && (
                <p className="text-[10px] text-red-400/60 font-bold text-center">
                  {lang === 'el' ? 'Σφάλμα 3D — δοκίμασε ξανά' : '3D error — try again'}
                </p>
              )}
            </motion.div>
          )}

        </div>

      </div>


    </div>
  );
}
