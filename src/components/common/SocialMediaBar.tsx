import React from 'react';
import { useFoundation } from '../../context/FoundationContext';
import { Youtube, Instagram, Facebook } from 'lucide-react';

// Custom clean SVG icon for TikTok
export const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

interface SocialMediaBarProps {
  variant?: 'topbar' | 'footer' | 'contact' | 'navbar';
  showLabel?: boolean;
  className?: string;
}

export const SocialMediaBar: React.FC<SocialMediaBarProps> = ({
  variant = 'footer',
  showLabel = false,
  className = ''
}) => {
  const { kontenWeb } = useFoundation();

  const socialLinks = [
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@yayasanbinaasri',
      url: kontenWeb.social_youtube || 'https://www.youtube.com/@yayasanbinaasrikalbar',
      icon: Youtube,
      color: 'hover:bg-red-600 hover:text-white hover:border-red-600',
      activeColor: 'text-red-500',
      badgeBg: 'bg-red-500/10 text-red-600 border-red-200'
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@yayasanbinaasri',
      url: kontenWeb.social_instagram || 'https://www.instagram.com/yayasanbinaasri',
      icon: Instagram,
      color: 'hover:bg-pink-600 hover:text-white hover:border-pink-600',
      activeColor: 'text-pink-500',
      badgeBg: 'bg-pink-500/10 text-pink-600 border-pink-200'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Yayasan Bina Asri Kalbar',
      url: kontenWeb.social_facebook || 'https://www.facebook.com/yayasanbinaasrikalbar',
      icon: Facebook,
      color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      activeColor: 'text-blue-500',
      badgeBg: 'bg-blue-500/10 text-blue-600 border-blue-200'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: '@yayasanbinaasri',
      url: kontenWeb.social_tiktok || 'https://www.tiktok.com/@yayasanbinaasri',
      icon: TikTokIcon,
      color: 'hover:bg-black hover:text-white hover:border-black',
      activeColor: 'text-slate-900',
      badgeBg: 'bg-slate-900/10 text-slate-900 border-slate-300'
    }
  ];

  // 1. Topbar Variant: Compact and elegant on dark top banner
  if (variant === 'topbar') {
    return (
      <div className={`flex items-center gap-1.5 sm:gap-2 ${className}`}>
        <span className="text-[11px] text-emerald-300 font-medium hidden md:inline">
          Media Sosial:
        </span>
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Kunjungi ${item.name} Yayasan Bina Asri`}
              title={`${item.name} Yayasan Bina Asri (${item.url})`}
              className="p-1 sm:p-1.5 rounded-full bg-emerald-900/60 hover:bg-amber-400 hover:text-slate-950 text-emerald-200 transition-all duration-200 hover:scale-110 shadow-sm"
            >
              <Icon className="w-3.5 h-3.5" />
            </a>
          );
        })}
      </div>
    );
  }

  // 2. Navbar Variant: Clean buttons for mobile menu or navigation bar
  if (variant === 'navbar') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              title={item.name}
              className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 transition-all hover:scale-105 shadow-sm"
            >
              <Icon className="w-4 h-4" />
            </a>
          );
        })}
      </div>
    );
  }

  // 3. Contact Section Variant: Detailed interactive cards
  if (variant === 'contact') {
    return (
      <div className={`grid grid-cols-2 gap-2.5 ${className}`}>
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 hover:translate-x-1 group"
              title={`Buka ${item.name}`}
            >
              <div className="w-8 h-8 rounded-lg bg-white/15 group-hover:bg-amber-400 group-hover:text-slate-950 flex items-center justify-center shrink-0 transition-colors">
                <Icon className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold leading-tight group-hover:text-amber-300 transition-colors">
                  {item.name}
                </p>
                <p className="text-[10px] text-emerald-200 truncate opacity-85">
                  Ikuti Kami ↗
                </p>
              </div>
            </a>
          );
        })}
      </div>
    );
  }

  // 4. Footer Variant: Sleek rounded cards with icons and platform name
  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex flex-wrap items-center gap-2.5">
        {socialLinks.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 ${item.color} transition-all duration-200 hover:-translate-y-0.5 text-xs font-semibold shadow-sm group`}
              title={`Kunjungi ${item.name} Yayasan Bina Asri`}
            >
              <Icon className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};
