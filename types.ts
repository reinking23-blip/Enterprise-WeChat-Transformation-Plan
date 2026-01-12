
import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  effect: string;
  icon: LucideIcon;
  highlight?: string;
  featureImageUrl: string; // 对应功能的演示图 (如果是图组，则为第一张)
  images?: string[]; // 可选的多图组，用于手动切换
}

export interface ModuleData {
  id: string;
  subtitle: string;
  title: string;
  slogan: string;
  features: FeatureItem[];
  imageCaption?: string;
}
