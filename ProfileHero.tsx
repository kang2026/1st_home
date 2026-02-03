import React from 'react';
import { Mail, Download } from 'lucide-react';
import { ProfileData } from '../App';

interface ProfileHeroProps {
  profile: ProfileData;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({ profile }) => {
  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-6 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      
      {/* Abstract Background Gradient */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div 
            className="bg-cover bg-center h-24 w-24 rounded-2xl border-2 border-border-dark shadow-lg"
            style={{ backgroundImage: `url('${profile.avatarUrl}')` }}
            aria-label="프로필 사진"
          />
          
          {profile.isHiring && (
            <div className="flex gap-2">
              <div className="h-8 px-3 rounded-full bg-[#101623] border border-border-dark flex items-center justify-center text-xs font-bold text-green-400 gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                구직 중
              </div>
            </div>
          )}
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-3 whitespace-pre-line">
          {profile.role}
        </h2>
        
        <p className="text-text-secondary text-lg max-w-md whitespace-pre-line">
          {profile.bio}
        </p>
      </div>

      <div className="relative z-10 mt-8 flex gap-3">
        <button className="flex-1 bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2">
          <Mail size={20} />
          문의하기
        </button>
        <button 
          aria-label="이력서 다운로드" 
          className="flex-none bg-[#222f49] hover:bg-[#314368] text-white p-3 rounded-lg transition-colors flex items-center justify-center"
        >
          <Download size={20} />
        </button>
      </div>
    </div>
  );
};