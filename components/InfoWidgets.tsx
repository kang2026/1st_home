import React, { useState, useEffect } from 'react';
import { MapPin, Terminal, Github, Linkedin, Twitter, Dribbble, Globe } from 'lucide-react';
import { SocialLink } from '../App';

// --- Location Widget ---
export const LocationWidget: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('ko-KR', { hour: 'numeric', minute: '2-digit', hour12: true }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-64 md:h-full w-full rounded-2xl border border-border-dark bg-card-dark relative overflow-hidden group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 mix-blend-overlay"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDP_BzTM3ofm757scIGbEN-R4J17ZHfpS_Hf9Ka_fNNWpwnCnfpPmWdzePnPeRks4B0OE-gKZEgB6LsnvvxkvXqdE_getIGZdE54iAiCjc73Sh3xZ6Jakfzf8zuyuA0SQug6ZSwTyztEza2Unfw06_hP3eK43ORt92oAmTZAqkfVMxx0S1j3iGgOOp-48zJoJWiGNw3rceqxcciwC29Sw-rcy6qtwoKAH2sEI_MwsQTtYPmFrrZ3bAGwq23DYyxFf9QbFiKQB87rIc')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-card-dark via-card-dark/20 to-transparent"></div>
      
      <div className="absolute bottom-0 left-0 p-5 w-full">
        <div className="flex items-center gap-2 mb-1">
          <MapPin className="text-primary" size={20} fill="currentColor" />
          <p className="text-white font-bold text-lg">일본 도쿄</p>
        </div>
        <p className="text-text-secondary text-sm">현지 시간: {time}</p>
      </div>
    </div>
  );
};

// --- Social Links Widget ---
interface SocialLinksProps {
  links: SocialLink[];
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  const getIcon = (platform: string) => {
    const lower = platform.toLowerCase();
    if (lower.includes('twitter') || lower.includes('x')) return <Twitter size={32} className="text-white group-hover/item:text-[#1DA1F2] transition-colors" />;
    if (lower.includes('linkedin')) return <Linkedin size={32} className="text-white group-hover/item:text-[#0077B5] transition-colors" />;
    if (lower.includes('github')) return <Github size={32} className="text-white group-hover/item:text-white transition-colors" />;
    if (lower.includes('dribbble')) return <Dribbble size={32} className="text-white group-hover/item:text-[#EA4C89] transition-colors" />;
    return <Globe size={32} className="text-white group-hover/item:text-primary transition-colors" />;
  };

  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-4 group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      <div className="grid grid-cols-2 gap-3 h-full overflow-y-auto custom-scrollbar">
        {links.map((link) => (
          <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center gap-2 rounded-xl bg-[#101623] hover:bg-[#222f49] border border-border-dark transition-colors p-3 group/item h-full min-h-[80px]">
            {getIcon(link.platform)}
            <span className="text-xs font-bold text-text-secondary">{link.platform}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

// --- Stats Bar ---
export const StatsBar: React.FC = () => {
  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-6 flex flex-col justify-center group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      <div className="flex justify-between items-center divide-x divide-border-dark">
        <div className="flex-1 px-4 first:pl-0 flex flex-col items-start gap-1">
          <p className="text-3xl md:text-4xl font-extrabold text-white">12.5k</p>
          <p className="text-sm text-text-secondary font-medium">팔로워</p>
        </div>
        <div className="flex-1 px-4 flex flex-col items-start gap-1">
          <p className="text-3xl md:text-4xl font-extrabold text-white">85+</p>
          <p className="text-sm text-text-secondary font-medium">프로젝트</p>
        </div>
        <div className="flex-1 px-4 flex flex-col items-start gap-1">
          <p className="text-3xl md:text-4xl font-extrabold text-white">4년</p>
          <p className="text-sm text-text-secondary font-medium">경력</p>
        </div>
      </div>
    </div>
  );
};

// --- Tech Stack ---
export const TechStack: React.FC = () => {
  const stack = ["Figma", "React", "TypeScript", "Next.js", "Tailwind CSS", "Node.js", "Three.js"];
  
  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-6 flex flex-col justify-center group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      <div className="flex items-center gap-2 mb-4">
        <Terminal className="text-primary" size={24} />
        <h3 className="text-lg font-bold text-white">기술 스택</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <div key={item} className="px-4 py-2 rounded-lg bg-[#222f49] hover:bg-primary/20 hover:text-primary transition-colors cursor-default border border-transparent hover:border-primary/30">
            <p className="text-sm font-semibold">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};