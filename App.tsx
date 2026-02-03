import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ProfileHero } from './components/ProfileHero';
import { LocationWidget } from './components/InfoWidgets';
import { SocialLinks } from './components/InfoWidgets';
import { StatsBar } from './components/InfoWidgets';
import { TechStack } from './components/InfoWidgets';
import { LatestUpdates } from './components/LatestUpdates';
import { ProjectGallery } from './components/ProjectGallery';
import { NewsletterSignup } from './components/NewsletterSignup';
import { AdminPanel } from './components/AdminPanel';

// 타입 정의
export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  avatarUrl: string;
  isHiring: boolean;
}

export interface SocialLink {
  id: number;
  platform: string;
  url: string;
}

export interface UpdateItem {
  id: number;
  title: string;
  desc: string;
  time: string;
  type: 'rocket' | 'podcast' | 'file';
}

export default function App() {
  const [view, setView] = useState<'home' | 'admin'>('home');

  // 데이터 상태 관리 (초기값 설정)
  const [profile, setProfile] = useState<ProfileData>({
    name: "알렉스 스털링",
    role: "디지털 경험을 만드는\n크리에이터",
    bio: "도쿄를 기반으로 활동하는 프로덕트 디자이너이자 개발자입니다. 깔끔한 UI, 매끄러운 UX, 그리고 고성능 코드에 집착합니다.",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdtGO32QJCCR4nyBihUPnSo4Up8LUkMGhgezsp1MwyFeChLWbNCqWjz1koYbb25zyDPfDn_v5wojLg2UbEqphWkiYC8um0BUewJa-k052cYNpi6EwZBLZX-SY4tmY1Yf4-97PX6aPlGHT-d-Yf5qy_557aHEmRi0vyZ8Yv9JBoFdYcs0KRVfJ6ECIIJrnvbyRY_gWDnJauRuVOE37zCKP4NomDgzWbAuEKYWVthJI7gZ_7HCZZZxo06FgZyqzTDpFiuHWwU5aSd_k",
    isHiring: true
  });

  const [socials, setSocials] = useState<SocialLink[]>([
    { id: 1, platform: 'Twitter', url: '#' },
    { id: 2, platform: 'LinkedIn', url: '#' },
    { id: 3, platform: 'GitHub', url: '#' },
    { id: 4, platform: 'Dribbble', url: '#' },
  ]);

  const [updates, setUpdates] = useState<UpdateItem[]>([
    { id: 1, title: '"SaaS 키트 2.0" 출시', desc: '스타트업 창업자를 위한 UI 키트.', time: '2일 전', type: 'rocket' },
    { id: 2, title: '디자인 라이프 팟캐스트 출연', desc: '디자인 시스템의 미래에 대해 논의했습니다.', time: '1주 전', type: 'podcast' },
    { id: 3, title: 'Tailwind V4 가이드 작성', desc: '새로운 엔진 설정에 대한 심층 분석.', time: '2주 전', type: 'file' }
  ]);

  if (view === 'admin') {
    return (
      <AdminPanel 
        onBack={() => setView('home')} 
        profile={profile} 
        setProfile={setProfile}
        socials={socials}
        setSocials={setSocials}
        updates={updates}
        setUpdates={setUpdates}
      />
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-display">
      <Navbar />
      
      <main className="flex-grow p-4 md:p-8 lg:p-10 flex justify-center">
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-min gap-5">
          
          {/* Row 1: Profile (2x2), Map (1x1), Socials (1x1) */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <ProfileHero profile={profile} />
          </div>
          
          <div className="col-span-1 row-span-1">
            <LocationWidget />
          </div>
          
          <div className="col-span-1 row-span-1">
            <SocialLinks links={socials} />
          </div>

          {/* Row 2: Stats (2 wide), Tech Stack (2 wide) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <StatsBar />
          </div>
          
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <TechStack />
          </div>

          {/* Row 3: Updates (2x2), Projects (2x2) */}
          <div className="col-span-1 md:col-span-2 row-span-2">
            <LatestUpdates updates={updates} />
          </div>
          
          <div className="col-span-1 md:col-span-2 row-span-2">
            <ProjectGallery />
          </div>

          {/* Row 4: Newsletter (Full Width) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4">
            <NewsletterSignup />
          </div>

        </div>
      </main>

      <Footer onAdminClick={() => setView('admin')} />
    </div>
  );
}