
import React, { useState, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { Upload, Box, RefreshCcw, Download, Printer, FileCode, Cuboid, Lock, Grid, Layers, Sparkles, Image as ImageIcon, Cpu, Cylinder, Send } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { UI_TEXT } from '../constants';
import { useEconomy } from '../context/EconomyContext'; // Hook

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
  const { badges } = useEconomy(); 
  const t = UI_TEXT[lang].factory3d;
  
  const [image, setImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [styleMode, setStyleMode] = useState<'print_ready' | 'voxel'>('print_ready');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
        alert(lang === 'el' ? "Ανέβασε ένα αρχείο εικόνας." : "Please upload an image file.");
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

  const getApiKey = async (): Promise<string> => {
    let key = process.env.API_KEY;
    const win = window as any;
    if (win.aistudio) {
        const hasKey = await win.aistudio.hasSelectedApiKey();
        if (!hasKey) {
            await win.aistudio.openSelectKey();
        }
    }
    return key || '';
  };

  const generate3DPreview = async () => {
    if (!image) return;

    setIsProcessing(true);
    try {
        await getApiKey();
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
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
        let model = 'gemini-3-pro-image-preview'; 

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
        alert(lang === 'el' ? "Σφάλμα δημιουργίας. Ελέγξτε το κλειδί API." : "Generation error. Check API key.");
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

  // Mock function for STL (Real conversion needs backend)
  const handleDownloadSTL = () => {
      const element = document.createElement("a");
      const file = new Blob(["WiseBot 3D Model Placeholder\n\nNote: This is a placeholder. To get a real printable .STL file, you would typically use a Photogrammetry AI service like Meshy.ai or CSM.ai using the image generated here as the input."], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "WiseBot_Model_Placeholder.stl";
      document.body.appendChild(element);
      element.click();
      alert(lang === 'el' ? "📂 Το αρχείο είναι έτοιμο για εξωτερικό converter!" : "📂 File ready for external converter!");
  };

  const handleOrder = () => {
      const subject = encodeURIComponent(lang === 'el' ? "Παραγγελία 3D Εκτύπωσης" : "3D Print Order");
      const body = encodeURIComponent(lang === 'el' 
        ? "Γεια σας, επισυνάπτω την εικόνα του μοντέλου που δημιούργησα στο WiseBot App. Παρακαλώ για κοστολόγηση." 
        : "Hello, I am attaching the model image I created in WiseBot App. Please provide a quote.");
      window.location.href = `mailto:orders@wisebot.app?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-5xl mx-auto px-4 pb-32 min-h-full flex flex-col pt-2">

      {/* COMPACT HEADER */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-fuchsia-500/20">
          <Cuboid size={24} className="text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-[1000] text-white tracking-tighter uppercase italic leading-none">
            3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-cyan-400">FACTORY</span>
          </h2>
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
              <> <Sparkles size={20} /> {lang === 'el' ? 'ΜΕΤΑΤΡΟΠΗ ΣΕ 3D' : 'CONVERT TO 3D'} </>
            )}
          </button>

        </div>

        {/* RIGHT: PREVIEW AREA */}
        <div className="flex-1 flex flex-col relative min-h-[400px] lg:min-h-0">

          {/* 3D Container with Tilt Effect */}
          <div
            className="flex-1 bg-[#0a0a0f] rounded-2xl border border-white/10 relative overflow-hidden flex flex-col items-center justify-center cursor-move group"
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
              className="mt-3 flex gap-2"
            >
              <button
                onClick={handleDownloadImage}
                className="flex-1 py-3.5 bg-white/[0.06] hover:bg-white/10 text-white rounded-xl border border-white/10 font-bold uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <Download size={16} /> {lang === 'el' ? 'ΛΗΨΗ' : 'DOWNLOAD'}
              </button>
              <button
                onClick={handleOrder}
                className="flex-1 py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white rounded-xl font-[1000] uppercase text-[11px] tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
              >
                <Send size={16} /> {lang === 'el' ? 'ΕΚΤΥΠΩΣΗ' : 'PRINT'}
              </button>
            </motion.div>
          )}

        </div>

      </div>

    </div>
  );
}
