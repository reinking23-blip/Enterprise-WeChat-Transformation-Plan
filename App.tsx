
import React, { useState, useEffect } from 'react';
import { modules } from './data';
import ModuleSection from './components/ModuleSection';
import PptxGenJS from 'pptxgenjs';
import { Download, Loader2, FileText } from 'lucide-react';

const App: React.FC = () => {
  const [activeModuleId, setActiveModuleId] = useState(modules[0].id);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Use a more central viewport point for better activation feel
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      
      for (let i = modules.length - 1; i >= 0; i--) {
        const module = modules[i];
        const element = document.getElementById(module.id);
        if (element) {
          if (scrollPos >= element.offsetTop) {
            setActiveModuleId(module.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToModule = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 0; // Removed header height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getImageDimensions = (url: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve({ width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = () => resolve({ width: 0, height: 0 }); // Fallback
      img.crossOrigin = 'Anonymous';
      img.src = url;
    });
  };

  const handleExportPPT = async () => {
    if (isExporting) return;
    setIsExporting(true);

    try {
      const pres = new PptxGenJS();
      pres.layout = "LAYOUT_16x9";
      pres.title = "企业微信实施规划";
      pres.subject = "销售团队数字化转型";
      pres.author = "Digital Transformation Team";

      // --- 1. Main Cover Slide ---
      const coverSlide = pres.addSlide();
      coverSlide.background = { color: "F8FAFC" };
      coverSlide.addText("销售团队数字化转型", { 
        x: 1, y: '40%', w: '80%', fontSize: 44, bold: true, color: "1E293B", fontFace: "Arial" 
      });
      coverSlide.addText("企业微信实施规划方案", { 
        x: 1, y: '52%', w: '80%', fontSize: 24, color: "2B77F1", fontFace: "Arial" 
      });

      // --- Loop through Modules ---
      for (const module of modules) {
        // --- 2. Module Intro Slide ---
        const moduleSlide = pres.addSlide();
        moduleSlide.background = { color: "FFFFFF" };
        
        // Blue decorative bar
        moduleSlide.addShape(pres.ShapeType.rect, { 
            x: 0.8, y: 2.5, w: 0.15, h: 2.2, fill: { color: "2B77F1" } 
        });

        moduleSlide.addText(module.subtitle, { 
            x: 1.2, y: 2.5, w: '80%', fontSize: 14, color: "2B77F1", charSpacing: 2 
        });
        moduleSlide.addText(module.title, { 
            x: 1.2, y: 3.0, w: '80%', fontSize: 40, bold: true, color: "0F172A" 
        });
        moduleSlide.addText(module.slogan, { 
            x: 1.2, y: 4.1, w: '80%', fontSize: 20, color: "64748B", italic: true 
        });

        // --- 3. Feature Slides ---
        for (const feature of module.features) {
          // Determine which images to show. If 'images' array exists, use it; otherwise use single 'featureImageUrl'
          const imagesToProcess = (feature.images && feature.images.length > 0) 
            ? feature.images 
            : [feature.featureImageUrl];

          // Create a slide for EACH image to ensure visibility
          for (let i = 0; i < imagesToProcess.length; i++) {
            const imgUrl = imagesToProcess[i];
            const slide = pres.addSlide();
            slide.background = { color: "FFFFFF" };

            // -- Left Column: Text (35% width) --
            // Title
            const titleText = imagesToProcess.length > 1 
              ? `${feature.title} (${i + 1}/${imagesToProcess.length})` 
              : feature.title;
            
            slide.addText(titleText, {
              x: 0.5, y: 0.5, w: 3.5, fontSize: 24, bold: true, color: "0F172A"
            });

            // Description
            slide.addText(feature.description, {
              x: 0.5, y: 1.4, w: 3.4, fontSize: 14, color: "334155", lineSpacing: 18
            });

            // "Effect" / Value Box
            // Combined shape and text to ensure proper alignment
            slide.addText(feature.effect, {
              shape: pres.ShapeType.roundRect,
              x: 0.5, y: 3.6, w: 3.4, h: 1.6,
              fill: { color: "F8FAFC" },
              line: { color: "E2E8F0", width: 1 },
              color: "475569",
              fontSize: 11,
              inset: 0.2, // Padding
              align: "left",
              valign: "top"
            });

            // -- Right Column: Image (60% width) --
            // Calculate dimensions manually to ensure perfect aspect ratio
            const maxW = 5.6;
            const maxH = 4.8;
            const targetX = 4.0;
            const targetY = 0.5;

            try {
              const { width, height } = await getImageDimensions(imgUrl);
              
              if (width > 0 && height > 0) {
                // Calculate scale to fit within maxW x maxH
                const scale = Math.min(maxW / width, maxH / height);
                const finalW = width * scale;
                const finalH = height * scale;

                // Center the image
                const finalX = targetX + (maxW - finalW) / 2;
                const finalY = targetY + (maxH - finalH) / 2;

                slide.addImage({
                  path: imgUrl,
                  x: finalX,
                  y: finalY,
                  w: finalW,
                  h: finalH,
                });
              } else {
                 // Fallback if image dimensions couldn't be loaded
                 slide.addImage({
                  path: imgUrl,
                  x: targetX, y: targetY, w: maxW, h: maxH,
                  sizing: { type: "contain", w: maxW, h: maxH }
                });
              }
            } catch (e) {
              // Fallback
              slide.addImage({
                path: imgUrl,
                x: targetX, y: targetY, w: maxW, h: maxH,
                sizing: { type: "contain", w: maxW, h: maxH }
              });
            }
          }
        }
      }

      await pres.writeFile({ fileName: "企业微信实施规划方案.pptx" });
    } catch (error) {
      console.error("PPT Export failed:", error);
      alert("导出失败，请检查网络连接或刷新页面重试。\n(Failed to export PPT. Please check your connection.)");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="relative font-sans text-slate-900 selection:bg-brand-500 selection:text-white bg-white">
      
      {/* Export PPT Button */}
      <button
        onClick={handleExportPPT}
        disabled={isExporting}
        className={`fixed bottom-8 right-8 z-[60] flex items-center gap-3 px-6 py-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 ${
          isExporting 
            ? "bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200" 
            : "bg-slate-900 text-white hover:bg-brand-600 hover:shadow-brand-500/30"
        }`}
      >
        {isExporting ? (
          <>
            <Loader2 size={20} className="animate-spin" />
            <span className="font-medium text-sm">生成中...</span>
          </>
        ) : (
          <>
            <Download size={20} />
            <span className="font-bold text-sm tracking-wide">导出 PPT</span>
          </>
        )}
      </button>

      {/* Side Progress Dots - Kept for navigation since top bar is removed */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
        {modules.map((m) => (
          <button
            key={`dot-${m.id}`}
            onClick={() => scrollToModule(m.id)}
            className="group relative flex items-center justify-end"
          >
            <span className={`absolute right-6 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 translate-x-2 pointer-events-none transition-all group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap`}>
              {m.title}
            </span>
            <div className={`w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
              activeModuleId === m.id 
                ? 'bg-brand-500 border-brand-500 scale-125' 
                : 'bg-transparent border-slate-300 group-hover:border-slate-400'
            }`} />
          </button>
        ))}
      </div>

      <main>
        {/* Module Sections */}
        {modules.map((module, index) => (
          <ModuleSection key={module.id} data={module} index={index} />
        ))}
      </main>
    </div>
  );
};

export default App;
