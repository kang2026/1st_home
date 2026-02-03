import React from 'react';
import { Star } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="py-8 border-t border-border-dark/50 mt-10 relative">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-6">
        <p className="text-text-secondary text-sm text-center">&copy; {new Date().getFullYear()} Alex Sterling. All rights reserved.</p>
        
        <button 
          onClick={onAdminClick}
          className="text-border-dark hover:text-yellow-400 transition-colors p-2"
          aria-label="관리자 로그인"
        >
          <Star size={16} />
        </button>
      </div>
    </footer>
  );
};