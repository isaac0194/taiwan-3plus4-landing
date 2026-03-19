import React, { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// 自定義 SVG 圖示，避免依賴外部庫報錯
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-red-500 fill-red-500"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconChevron = ({ isOpen }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}><path d="M19 9l-7 7-7-7" /></svg>
);

export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+TC:wght@700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen text-black comic-bg overflow-x-hidden" style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
      <style>{`
        .comic-bg { background-color: #f8fafc; background-image: radial-gradient(#cbd5e1 2px, transparent 2px); background-size: 20px 20px; }
        .comic-shadow { box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
        .comic-border { border: 4px solid #000; }
        .text-stroke { color: white; text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }
        .halftone-bg { background-image: radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%); background-size: 8px 8px; }
        @media (max-width: 640px) { .text-stroke { text-shadow: 2px 2px 0 #000; } }
      `}</style>
      <Navbar />
      <HeroSection />
      <FinanceSection />
      <SchoolsSection />
      <TimelineSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-yellow-400 border-b-4 border-black z-50 h-20 flex items-center shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white border-2 border-black p-1 transform -rotate-6"><IconZap /></div>
          <span className="font-black text-xl sm:text-2xl tracking-tighter">TAIWAN 3+4</span>
        </div>
        <a href="#contact" className="bg-red-500 text-white border-2 sm:border-4 border-black px-4 py-2 font-black text-sm comic-shadow hover:translate-x-1 hover:translate-y-1 transition-all">立即諮詢 !</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 bg-cyan-400 border-b-8 border-black overflow-hidden px-4 text-center">
      <div className="absolute inset-0 opacity-10 halftone-bg"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-block bg-yellow-400 border-4 border-black px-4 py-2 text-sm font-black mb-6 comic-shadow transform -rotate-3 animate-pulse">💥 2026 年度報名中！</div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight text-stroke uppercase">SPM 後的<br/><span className="text-yellow-400">華麗轉身</span></h1>
        <div className="bg-white border-4 border-black comic-shadow p-6 sm:p-8 max-w-3xl mx-auto transform -rotate-1">
          <p className="text-lg sm:text-3xl font-black leading-relaxed">免學費、拿津貼、拿學位！</p>
        </div>
      </div>
    </section>
  );
}

function FinanceSection() {
  const options = {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#000' } },
    scales: { x: { grid: { color: '#000' }, ticks: { font: { weight: 'bold' } } }, y: { grid: { display: false }, ticks: { font: { weight: 'bold' } } } }
  };
  const data = { labels: ['一般私大', '一般國大', '3+4 專班'], datasets: [{ data: [-120000, -80000, 45000], backgroundColor: ['#ef4444', '#fbbf24', '#22c55e'], borderColor: '#000', borderWidth: 4 }] };
  return (
    <section id="finance" className="py-16 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-black text-stroke mb-10 text-center uppercase">為什麼選 3+4？</h2>
        <div className="bg-slate-50 border-4 border-black p-4 sm:p-8 comic-shadow relative">
          <div className="h-64 sm:h-80 w-full"><Bar options={options} data={data} /></div>
        </div>
      </div>
    </section>
  );
}

function SchoolsSection() {
  const schools = [
    { name: "六信高中", loc: "台南", majors: ["資訊科", "烘焙科"], color: "bg-red-400", link: "https://www.lhvs.tn.edu.tw/" },
    { name: "新光高中", loc: "高雄", majors: ["資訊科"], color: "bg-blue-400", link: "https://sg.sgshedu.tw/" },
    { name: "育德工家", loc: "台南", majors: ["烘焙科", "餐飲科"], color: "bg-green-400", link: "https://sites.google.com/ytvs.tn.edu.tw/2024html/" },
    { name: "華德工家", loc: "高雄", majors: ["資訊科", "烘焙科", "餐飲科"], color: "bg-purple-400", link: "https://www.hdvs.kh.edu.tw/" }
  ];
  return (
    <section id="schools" className="py-16 bg-yellow-300 border-b-8 border-black px-4">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {schools.map((s, i) => (
          <div key={i} className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-2 transition-transform">
            <div className={`h-20 ${s.color} border-b-4 border-black flex items-center justify-center text-3xl`}>🏫</div>
            <div className="p-6 flex-grow">
              <h3 className="font-black text-xl mb-1">{s.name}</h3>
              <p className="text-xs text-slate-500 mb-4">📍 台灣 {s.loc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {s.majors.map((m, j) => <span key={j} className="text-[10px] font-black bg-yellow-100 border-2 border-black px-1">{m}</span>)}
              </div>
            </div>
            <a href={s.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white text-center py-3 font-black uppercase text-xs">官網 GO!</a>
          </div>
        ))}
      </div>
    </section>
  );
}

function TimelineSection() {
  const [active, setActive] = useState(0);
  const steps = [
    { date: "12-01月", title: "截止報名", desc: "1月31日全國截止。SPM可先提預估成績。", color: "bg-yellow-400" },
    { date: "02月", title: "文件初審", desc: "留意Email通知補件。確保護照效期。", color: "bg-cyan-400" },
    { date: "03月", title: "入學面試", desc: "各校安排視訊。重在展現學習熱誠。", color: "bg-pink-400" },
    { date: "05月", title: "錄取公告", desc: "預計下旬公告。收到紙本錄取通知。", color: "bg-yellow-400" },
    { date: "06月", title: "學歷驗證", desc: "辦理TECO認證。舉辦行前說明會。", color: "bg-cyan-400" },
    { date: "08月", title: "赴台啟航", desc: "中下旬統一抵台。展開新生訓練。", color: "bg-green-400" }
  ];
  return (
    <section id="timeline" className="py-16 border-b-8 border-black bg-white px-4">
      <div className="max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl font-black text-stroke mb-10 text-center uppercase">招生行事曆</h2>
        {steps.map((step, i) => (
          <div key={i} className="border-4 border-black comic-shadow">
            <button onClick={() => setActive(i)} className={`w-full flex items-center justify-between p-4 font-black ${active === i ? step.color : 'bg-white'}`}>
              <span>[{step.date}] {step.title}</span>
              <IconChevron isOpen={active === i} />
            </button>
            {active === i && <div className="p-4 border-t-4 border-black bg-white font-bold">{step.desc}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white border-b-8 border-black px-4 text-center">
      <h2 className="text-3xl font-black text-stroke mb-10 uppercase">聯繫代表</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-green-400 border-4 border-black p-6 comic-shadow">
          <img src="https://i.imgur.com/YdXztNr.png" alt="WhatsApp" className="w-32 h-32 mx-auto border-4 border-black mb-4 bg-white" />
          <h3 className="font-black text-lg">馬來西亞代表</h3>
          <p className="font-black mb-4">+63 998 919 5808</p>
          <a href="https://wa.me/639989195808" className="block bg-white border-4 border-black py-2 font-black">直接對話</a>
        </div>
        <div className="bg-blue-400 border-4 border-black p-6 comic-shadow">
          <img src="https://i.imgur.com/QTAePgC.jpeg" alt="LINE" className="w-32 h-32 mx-auto border-4 border-black mb-4 bg-white" />
          <h3 className="font-black text-lg">台灣校務處</h3>
          <p className="font-black mb-4">+886 982 815 234</p>
          <a href="https://line.me/R/ti/p/@+886982815234" className="block bg-[#06C755] text-white border-4 border-black py-2 font-black">加 LINE 好友</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-10 text-center border-t-8 border-yellow-400">
      <h3 className="font-black text-xl text-yellow-400 mb-2">Taiwan 3+4 Project</h3>
      <p className="text-[10px] text-gray-500 uppercase">&copy; 2026 ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
