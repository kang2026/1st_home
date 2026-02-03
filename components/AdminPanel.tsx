import React, { useState } from 'react';
import { ArrowLeft, Upload, Trash2, Plus, Lock, Save, LayoutDashboard, Link as LinkIcon, Bell } from 'lucide-react';
import { ProfileData, SocialLink, UpdateItem } from '../App';

interface AdminPanelProps {
  onBack: () => void;
  profile: ProfileData;
  setProfile: (data: ProfileData) => void;
  socials: SocialLink[];
  setSocials: (data: SocialLink[]) => void;
  updates: UpdateItem[];
  setUpdates: (data: UpdateItem[]) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ 
  onBack, profile, setProfile, socials, setSocials, updates, setUpdates 
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'profile' | 'socials' | 'updates'>('profile');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      setIsLoggedIn(true);
    } else {
      alert('아이디 또는 비밀번호가 잘못되었습니다.');
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile({ ...profile, avatarUrl: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const addSocial = () => {
    const newId = Math.max(...socials.map(s => s.id), 0) + 1;
    setSocials([...socials, { id: newId, platform: 'New Link', url: '#' }]);
  };

  const removeSocial = (id: number) => {
    setSocials(socials.filter(s => s.id !== id));
  };

  const updateSocial = (id: number, key: keyof SocialLink, value: string) => {
    setSocials(socials.map(s => s.id === id ? { ...s, [key]: value } : s));
  };

  const addUpdate = () => {
    const newId = Math.max(...updates.map(u => u.id), 0) + 1;
    setUpdates([{ 
      id: newId, 
      title: '새로운 소식', 
      desc: '설명을 입력하세요.', 
      time: '방금 전', 
      type: 'rocket' 
    }, ...updates]);
  };

  const removeUpdate = (id: number) => {
    setUpdates(updates.filter(u => u.id !== id));
  };

  const updateUpdateItem = (id: number, key: keyof UpdateItem, value: string) => {
    setUpdates(updates.map(u => u.id === id ? { ...u, [key]: value } : u));
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background-dark p-4">
        <div className="w-full max-w-md bg-card-dark border border-border-dark rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-primary/20 rounded-full text-primary">
              <Lock size={32} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-center text-white mb-6">관리자 로그인</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">아이디</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#101623] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1">비밀번호</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#101623] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="flex gap-3 mt-6">
              <button type="button" onClick={onBack} className="flex-1 px-4 py-2 bg-transparent border border-border-dark rounded-lg text-text-secondary hover:text-white transition-colors">
                돌아가기
              </button>
              <button type="submit" className="flex-1 px-4 py-2 bg-primary hover:bg-blue-600 rounded-lg text-white font-bold transition-colors">
                로그인
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-dark text-white flex flex-col">
      {/* Admin Header */}
      <div className="border-b border-border-dark bg-card-dark/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold">관리자 대시보드</h1>
          </div>
          <div className="text-sm text-text-secondary">로그인됨: admin</div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto w-full p-4 md:p-8 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Navigation */}
        <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
          <button 
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${activeTab === 'profile' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-text-secondary hover:bg-card-dark hover:text-white'}`}
          >
            <LayoutDashboard size={20} />
            프로필 설정
          </button>
          <button 
            onClick={() => setActiveTab('socials')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${activeTab === 'socials' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-text-secondary hover:bg-card-dark hover:text-white'}`}
          >
            <LinkIcon size={20} />
            연결 관리
          </button>
          <button 
            onClick={() => setActiveTab('updates')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left font-medium transition-all ${activeTab === 'updates' ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-text-secondary hover:bg-card-dark hover:text-white'}`}
          >
            <Bell size={20} />
            최신 소식
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-card-dark border border-border-dark rounded-2xl p-6 md:p-8">
          
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold mb-6">프로필 정보 수정</h2>
              
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-full md:w-1/3 flex flex-col gap-3">
                  <label className="block text-sm font-medium text-text-secondary">프로필 이미지</label>
                  <div className="aspect-square rounded-2xl overflow-hidden border-2 border-border-dark relative group">
                    <img src={profile.avatarUrl} alt="Avatar Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <label className="cursor-pointer bg-white text-black px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 hover:bg-gray-100">
                        <Upload size={16} /> 변경
                        <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                      </label>
                    </div>
                  </div>
                  <input 
                    type="text" 
                    placeholder="또는 이미지 URL 입력" 
                    value={profile.avatarUrl}
                    onChange={(e) => setProfile({ ...profile, avatarUrl: e.target.value })}
                    className="w-full bg-[#101623] border border-border-dark rounded-lg px-3 py-2 text-xs text-text-secondary focus:outline-none focus:border-primary"
                  />
                </div>
                
                <div className="flex-1 space-y-4 w-full">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">이름</label>
                    <input 
                      type="text" 
                      value={profile.name}
                      onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                      className="w-full bg-[#101623] border border-border-dark rounded-lg px-4 py-2 text-white focus:border-primary outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">직함/역할</label>
                    <textarea 
                      value={profile.role}
                      onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                      className="w-full bg-[#101623] border border-border-dark rounded-lg px-4 py-2 text-white focus:border-primary outline-none h-20"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-1">소개글</label>
                    <textarea 
                      value={profile.bio}
                      onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                      className="w-full bg-[#101623] border border-border-dark rounded-lg px-4 py-2 text-white focus:border-primary outline-none h-32"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                     <input 
                      type="checkbox" 
                      id="hiring"
                      checked={profile.isHiring}
                      onChange={(e) => setProfile({ ...profile, isHiring: e.target.checked })}
                      className="w-5 h-5 rounded border-border-dark text-primary focus:ring-primary bg-[#101623]"
                    />
                    <label htmlFor="hiring" className="text-white cursor-pointer select-none">구직 상태 표시 (Open to Work)</label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Socials Tab */}
          {activeTab === 'socials' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">연결 (소셜 링크) 관리</h2>
                <button onClick={addSocial} className="flex items-center gap-2 bg-primary/20 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm">
                  <Plus size={16} /> 추가하기
                </button>
              </div>

              <div className="space-y-4">
                {socials.map((link) => (
                  <div key={link.id} className="flex flex-col sm:flex-row gap-3 items-center bg-[#101623] p-4 rounded-xl border border-border-dark">
                    <div className="flex-1 w-full">
                      <label className="text-xs text-text-secondary block mb-1">플랫폼 이름</label>
                      <input 
                        type="text" 
                        value={link.platform}
                        onChange={(e) => updateSocial(link.id, 'platform', e.target.value)}
                        className="w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-white focus:border-primary outline-none"
                      />
                    </div>
                    <div className="flex-[2] w-full">
                      <label className="text-xs text-text-secondary block mb-1">URL 주소</label>
                      <input 
                        type="text" 
                        value={link.url}
                        onChange={(e) => updateSocial(link.id, 'url', e.target.value)}
                        className="w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-text-secondary focus:text-white focus:border-primary outline-none"
                      />
                    </div>
                    <button 
                      onClick={() => removeSocial(link.id)}
                      className="p-3 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors mt-4 sm:mt-0"
                      title="삭제"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                ))}
                {socials.length === 0 && (
                  <p className="text-text-secondary text-center py-10">등록된 연결이 없습니다.</p>
                )}
              </div>
            </div>
          )}

          {/* Updates Tab */}
          {activeTab === 'updates' && (
             <div className="space-y-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">최신 소식 관리</h2>
                <button onClick={addUpdate} className="flex items-center gap-2 bg-primary/20 text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-colors font-medium text-sm">
                  <Plus size={16} /> 소식 추가
                </button>
              </div>

              <div className="space-y-4">
                {updates.map((item) => (
                  <div key={item.id} className="bg-[#101623] p-5 rounded-xl border border-border-dark relative group">
                    <button 
                      onClick={() => removeUpdate(item.id)}
                      className="absolute top-4 right-4 text-text-secondary hover:text-red-400 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-text-secondary block mb-1">제목</label>
                        <input 
                          type="text" 
                          value={item.title}
                          onChange={(e) => updateUpdateItem(item.id, 'title', e.target.value)}
                          className="w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-white focus:border-primary outline-none font-bold"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-text-secondary block mb-1">시간 (예: 2일 전)</label>
                        <input 
                          type="text" 
                          value={item.time}
                          onChange={(e) => updateUpdateItem(item.id, 'time', e.target.value)}
                          className="w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-white focus:border-primary outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs text-text-secondary block mb-1">설명</label>
                        <input 
                          type="text" 
                          value={item.desc}
                          onChange={(e) => updateUpdateItem(item.id, 'desc', e.target.value)}
                          className="w-full bg-background-dark border border-border-dark rounded-lg px-3 py-2 text-text-secondary focus:text-white focus:border-primary outline-none"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="text-xs text-text-secondary block mb-1">아이콘 타입</label>
                         <div className="flex gap-4">
                           {(['rocket', 'podcast', 'file'] as const).map(type => (
                             <label key={type} className="flex items-center gap-2 cursor-pointer">
                               <input 
                                type="radio" 
                                name={`type-${item.id}`}
                                checked={item.type === type}
                                onChange={() => setUpdates(updates.map(u => u.id === item.id ? { ...u, type } : u))}
                                className="text-primary focus:ring-primary bg-background-dark border-border-dark"
                               />
                               <span className="text-sm capitalize text-text-secondary">{type}</span>
                             </label>
                           ))}
                         </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};