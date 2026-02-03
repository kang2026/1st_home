import React from 'react';
import { LayoutGrid } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const projects = [
    {
      title: '핀테크 앱',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA4CepfKhfmxMywJhMR_sWpcMIUXxb5m_DYwD87pgMZRQX-jDecD4Ch6zNUVkYAosCkmheOKMJEnx5A8pP6N_Tbyo67PmfLAcp2dKZSVY6eMc9yE7d9CUvi1aF8ZOnD05dLewn-6VqVc0LOjmIPR-ylmmRzWaRUlX1JAew3hGO0pV5_NCEMpBvSPA2xpbcUZC1_72hWIMFynbMM0N02tlrpVhYD9-doi8VfXO2FoWFT-0AqCeXMkpijIdyaeksiAbmHcNJAr3MgtRc'
    },
    {
      title: '개발자 포털',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHc4_ayxdWl3IFFyMtfzWWnl_2kBm00g3tJClgNW3M4e0AmPc9vELmq3Sx_Dw6u1ScSWl26UXlMkTeW2G1Kl7VIl7ZvUXJ384k52Qw7y-n9a9teidRBEULi4QpqByJPZbEIpYwpzjn8sYv97wtj1DKB06GAreOdQpcAXK2FD6G1eYaM-eIY8NgtIza8LcIvrWsmunpsjDvJFEukLa7OgvUQXxwKeGZHnnFEwpOiBIY5P8UqFR5kQyDhYbJlohwd5S8L_3f6x1ZNx0'
    },
    {
      title: '브랜드 아이덴티티',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWMKQO44VSoiwJwy8sBLOa3agXpQo-l8kotSJYLLDsJnulETNTOgbH10iyUt2XUgcGHMgP7DGtRxljbnOykQGzS2Pl7gihBypyoeQj4d_NKLJ5UHxIU7UQRwueyfv3U9QJy-wC70W1oSFPGt4d0CUHllL11hvGcbyGu0jIfFilQhh-h_oPtKkLwgCXnH9HrTlbFyYMIBcOaJOgLWQa9j7359f3rxrdnHv4AReDOAiZwsjXV3_xko1Tu4LvXAwuqJ88c7cZpCsAhzw'
    },
    {
      title: '워크스페이스',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL3NC3MVZWHKGoDfuwyggNf5MXvsdZmvRy898B15LyLoWL5fUmMgiEFFZWPsjVmFbQRc8_VSwMy92ickbjwqcFJSzjpgKl2LfNv7Ks0xnil_1hcoCwIeuVO1dTA4nnQAqH8N2N0et39JjCGqq-NFxGat6N_TDVc2GLVEfyAVb27zVRicPbC0skcBS-HHlqanWkOhRaOYFEQYhs8yfXvDwobPPOMeR10gJGDCfvV2Pn3xE8Z-lA86fR5xLgFpjRr2pJeX6AtKulGUE'
    }
  ];

  return (
    <div className="h-full w-full rounded-2xl border border-border-dark bg-card-dark p-6 flex flex-col group hover:-translate-y-1 hover:border-primary hover:shadow-[0_10px_30px_-10px_rgba(37,106,244,0.2)] transition-all duration-300">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <LayoutGrid className="text-primary" size={24} />
          <h3 className="text-lg font-bold text-white">최근 프로젝트</h3>
        </div>
        <a href="#" className="text-xs font-bold text-primary hover:text-white transition-colors">포트폴리오 -&gt;</a>
      </div>
      
      <div className="grid grid-cols-2 gap-4 h-full">
        {projects.map((project, idx) => (
          <div key={idx} className="group/project relative rounded-xl overflow-hidden bg-[#101623] aspect-[4/3] border border-border-dark cursor-pointer">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover/project:scale-110"
              style={{ backgroundImage: `url('${project.img}')` }}
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/project:opacity-100 transition-opacity flex items-center justify-center">
              <p className="text-white font-bold text-sm translate-y-4 group-hover/project:translate-y-0 transition-transform duration-300">{project.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};