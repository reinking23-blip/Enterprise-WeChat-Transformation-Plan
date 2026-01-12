
import React from 'react';
import { FeatureItem } from '../types';

interface FeatureCardProps {
  feature: FeatureItem;
  isActive: boolean;
  onVisible: (id: string) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, isActive, onVisible }) => {
  const Icon = feature.icon;
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onVisible(feature.id);
        }
      },
      { 
        threshold: 0.6,
        rootMargin: "-10% 0px -10% 0px"
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [feature.id, onVisible]);

  const renderEffectText = () => {
    if (!feature.highlight) return feature.effect;
    
    const parts = feature.effect.split(feature.highlight);
    return (
      <>
        {parts[0]}
        <span className="font-bold text-brand-600">
          {feature.highlight}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div 
      ref={cardRef}
      className={`min-h-[45vh] flex flex-col justify-center transition-all duration-700 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-4'}`}
    >
      <div className="flex flex-col items-start gap-8 max-w-sm">
        <div className={`flex-shrink-0 w-16 h-16 rounded-[1.25rem] flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-brand-500 text-white shadow-xl shadow-brand-500/30' : 'bg-slate-100 text-slate-400'}`}>
          <Icon size={32} strokeWidth={1.5} />
        </div>
        
        <div className="space-y-6 w-full">
          <div>
            <h3 className={`text-2xl font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-slate-900' : 'text-slate-400'}`}>
              {feature.title}
            </h3>
            <p className="text-slate-500 text-base leading-relaxed font-medium">{feature.description}</p>
          </div>

          <div className={`p-5 rounded-2xl border border-slate-100 bg-slate-50/50 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}>
            <p className="text-sm text-slate-600 leading-relaxed">
              {renderEffectText()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
