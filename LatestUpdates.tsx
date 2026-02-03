import React from 'react';
import { Newspaper, Rocket, Podcast, FileText } from 'lucide-react';
import { UpdateItem } from '../App';

interface LatestUpdatesProps {
  updates: UpdateItem[];
}

export const LatestUpdates: React.FC<LatestUpdatesProps> = ({ updates }) => {
  
  const getIcon = (type: string) => {
    switch(type) {
      case 'rocket': return <Rocket size={24} />;
      case 'podcast': return <Podcast size={24} />;
      case 'file': return <FileText size={24} />;
      default: return <Newspaper size={24} />;
    }
  };

  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-6 flex flex-col group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Newspaper className="text-primary" size={24} />
          <h3 className="text-lg font-bold text-white">최신 소식</h3>
        </div>
        <a href="#" className="text-xs font-bold text-primary hover:text-white transition-colors">전체 보기</a>
      </div>
      
      <div className="flex flex-col gap-4 overflow-y-auto max-h-[300px] custom-scrollbar pr-2">
        {updates.length === 0 ? (
          <p className="text-text-secondary text-sm">등록된 소식이 없습니다.</p>
        ) : (
          updates.map((update) => (
            <div key={update.id} className="group/item flex gap-4 p-3 rounded-xl hover:bg-[#222f49]/50 transition-colors cursor-pointer border border-transparent hover:border-border-dark">
              <div className="h-12 w-12 shrink-0 rounded-lg bg-[#101623] flex items-center justify-center text-white border border-border-dark group-hover/item:border-primary/50 group-hover/item:text-primary transition-colors">
                {getIcon(update.type)}
              </div>
              <div className="flex flex-col">
                <h4 className="text-white text-sm font-bold leading-tight mb-1 group-hover/item:text-primary transition-colors">{update.title}</h4>
                <p className="text-text-secondary text-xs mb-1">{update.desc}</p>
                <span className="text-[10px] text-text-secondary font-mono uppercase tracking-wider">{update.time}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};