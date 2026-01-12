
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { ModuleData } from '../types';
import FeatureCard from './FeatureCard';

interface ModuleSectionProps {
  data: ModuleData;
  index: number;
}

const ModuleSection: React.FC<ModuleSectionProps> = ({ data, index }) => {
  const [activeFeatureId, setActiveFeatureId] = useState(data.features[0].id);
  const [subImageIndex, setSubImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  
  const activeFeature = data.features.find(f => f.id === activeFeatureId) || data.features[0];
  const displayImage = (activeFeature.images && activeFeature.images[subImageIndex]) 
    ? activeFeature.images[subImageIndex] 
    : activeFeature.featureImageUrl;

  // Reset sub-image index when moving to a new feature
  useEffect(() => {
    setSubImageIndex(0);
  }, [activeFeatureId]);

  // Handle Zoom Logic
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.2, 0.5));
  const handleResetZoom = () => setZoomLevel(1);

  const handlePrevSubImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeFeature.images) return;
    setSubImageIndex((prev) => (prev === 0 ? activeFeature.images!.length - 1 : prev - 1));
    setZoomLevel(1);
  };

  const handleNextSubImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeFeature.images) return;
    setSubImageIndex((prev) => (prev === activeFeature.images!.length - 1 ? 0 : prev + 1));
    setZoomLevel(1);
  };

  return (
    <section 
      id={data.id}
      className="relative min-h-screen bg-white"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Content Area - 30% width */}
          <div className="w-full lg:w-[30%] pt-[20vh] pb-[20vh]">
            <div className="mb-24">
              <span className="text-brand-500 font-bold tracking-[0.2em] text-[11px] uppercase mb-4 block">
                {data.subtitle}
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tight leading-tight">
                {data.title}
              </h2>
              <p className="text-xl text-slate-400 font-medium leading-relaxed border-l-3 border-brand-500 pl-8 py-1">
                {data.slogan}
              </p>
            </div>

            <div className="space-y-12">
              {data.features.map((feature) => (
                <FeatureCard 
                  key={feature.id} 
                  feature={feature} 
                  isActive={activeFeatureId === feature.id}
                  onVisible={setActiveFeatureId}
                />
              ))}
            </div>
          </div>

          {/* Sticky Visual Preview - 70% width */}
          <div className="hidden lg:block w-[70%] h-screen sticky top-0 flex items-center justify-center">
             <div className="relative w-full aspect-[16/11] bg-slate-100 rounded-[2.5rem] shadow-[0_48px_120px_-20px_rgba(0,0,0,0.15)] border border-slate-200 overflow-hidden group cursor-zoom-in">
                
                {/* Background Blur Layer for aesthetics when showing full image */}
                <div className="absolute inset-0 z-0">
                   {data.features.map((f) => (
                     <img 
                       key={`blur-${f.id}`}
                       src={f.id === activeFeatureId ? displayImage : f.featureImageUrl}
                       className={`absolute inset-0 w-full h-full object-cover blur-3xl opacity-20 transition-opacity duration-1000 ${activeFeatureId === f.id ? 'opacity-20' : 'opacity-0'}`}
                       alt=""
                     />
                   ))}
                </div>

                {/* Main Content Area */}
                <div 
                  className="relative z-10 w-full h-full overflow-hidden flex items-center justify-center"
                  onClick={() => setIsLightboxOpen(true)}
                >
                  {data.features.map((feature) => {
                    const featImg = (feature.id === activeFeatureId && feature.images)
                      ? feature.images[subImageIndex]
                      : feature.featureImageUrl;

                    return (
                      <img
                        key={feature.id}
                        src={featImg}
                        alt={feature.title}
                        className={`absolute inset-0 w-full h-full object-contain p-8 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                          activeFeatureId === feature.id 
                            ? 'opacity-100 scale-100 translate-y-0' 
                            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
                        }`}
                      />
                    );
                  })}

                  {/* Manual Swiper Controls */}
                  {activeFeature.images && activeFeature.images.length > 1 && (
                    <div className="absolute inset-0 flex items-center justify-between px-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <button 
                        onClick={handlePrevSubImage}
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur text-slate-900 flex items-center justify-center shadow-lg pointer-events-auto hover:bg-brand-500 hover:text-white transition-all active:scale-90"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button 
                        onClick={handleNextSubImage}
                        className="w-12 h-12 rounded-full bg-white/90 backdrop-blur text-slate-900 flex items-center justify-center shadow-lg pointer-events-auto hover:bg-brand-500 hover:text-white transition-all active:scale-90"
                      >
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  )}

                  {/* Expand Icon */}
                  <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white active:scale-95">
                    <Maximize2 size={20} />
                  </div>
                  
                  {/* Info Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent pointer-events-none">
                     <div className="text-white transform transition-all duration-700">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="px-2 py-0.5 bg-brand-500 text-[10px] font-bold uppercase rounded">Preview</span>
                           <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">{data.title}</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <h4 className="text-3xl font-bold tracking-tight">{activeFeature.title}</h4>
                          {activeFeature.images && (
                             <span className="px-3 py-1 bg-white/10 backdrop-blur rounded-full text-xs font-bold text-white/80">
                               {subImageIndex + 1} / {activeFeature.images.length}
                             </span>
                          )}
                        </div>
                     </div>
                  </div>
                </div>
             </div>
             
             {/* Glow Background */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-[90%] h-[90%] bg-brand-500/10 blur-[150px] rounded-full"></div>
          </div>

        </div>
      </div>

      {/* Lightbox Modal with Zoom */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm animate-in fade-in duration-300">
          {/* Modal Header */}
          <div className="absolute top-0 inset-x-0 h-20 flex items-center justify-between px-8 bg-gradient-to-b from-black/50 to-transparent">
             <div className="text-white">
                <h3 className="text-xl font-bold">{activeFeature.title}</h3>
                <p className="text-sm text-white/60">{data.title} · 方案演示图</p>
             </div>
             <button 
               onClick={() => setIsLightboxOpen(false)}
               className="w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
             >
               <X size={24} />
             </button>
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 p-4 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white/10 text-white z-50">
             <button onClick={handleZoomOut} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="缩小"><ZoomOut size={20} /></button>
             <div className="w-12 text-center text-sm font-bold">{Math.round(zoomLevel * 100)}%</div>
             <button onClick={handleZoomIn} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="放大"><ZoomIn size={20} /></button>
             <div className="w-px h-6 bg-white/10 mx-2" />
             <button onClick={handleResetZoom} className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="重置"><RotateCcw size={20} /></button>
          </div>

          {/* Navigation Controls in Modal */}
          {activeFeature.images && activeFeature.images.length > 1 && (
            <>
              <button 
                onClick={handlePrevSubImage}
                className="absolute left-8 w-16 h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                onClick={handleNextSubImage}
                className="absolute right-8 w-16 h-16 rounded-full bg-white/5 text-white flex items-center justify-center hover:bg-white/10 transition-colors border border-white/5"
              >
                <ChevronRight size={32} />
              </button>
            </>
          )}

          {/* Image Container */}
          <div className="w-full h-full flex items-center justify-center overflow-auto p-12 scrollbar-hide">
            <div 
              className="relative transition-transform duration-300 ease-out min-w-full min-h-full flex items-center justify-center"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <img 
                src={displayImage} 
                alt={activeFeature.title}
                className="max-w-[85vw] max-h-[80vh] object-contain shadow-2xl rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModuleSection;
