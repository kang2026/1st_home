import React from 'react';

export const NewsletterSignup: React.FC = () => {
  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      
      {/* Background Decor */}
      <div className="absolute -right-10 -bottom-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-xl z-10">
        <h3 className="text-2xl font-bold text-white mb-2">뉴스레터 구독하기</h3>
        <p className="text-text-secondary">독점적인 디자인 팁, 코드 스니펫, 그리고 새로운 리소스에 대한 소식을 가장 먼저 받아보세요. 스팸은 보내지 않습니다.</p>
      </div>

      <div className="w-full md:w-auto flex flex-col sm:flex-row gap-3 z-10">
        <input 
          type="email" 
          placeholder="email@example.com"
          className="bg-[#101623] border border-border-dark text-white rounded-lg px-4 py-3 min-w-[280px] focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-500 transition-all"
        />
        <button className="bg-white hover:bg-gray-100 text-black font-bold py-3 px-6 rounded-lg transition-colors whitespace-nowrap">
          구독하기
        </button>
      </div>
    </div>
  );
};