import React from 'react';
import { Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-dark bg-[#101623]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <Zap size={20} fill="currentColor" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">알렉스 스털링</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">작업</a>
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">소개</a>
            <a href="#" className="text-sm font-medium text-text-secondary hover:text-white transition-colors">메모</a>
          </div>
          
          <button className="bg-primary hover:bg-blue-600 text-white text-sm font-bold py-2 px-5 rounded-lg transition-all shadow-[0_0_15px_rgba(37,106,244,0.3)] hover:shadow-[0_0_20px_rgba(37,106,244,0.5)]">
            대화하기
          </button>
        </div>
      </div>
    </nav>
  );
};