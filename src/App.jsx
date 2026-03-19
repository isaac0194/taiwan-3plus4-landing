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

// 註冊 Chart.js 元件
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// 為了確保不報錯，使用 SVG 取代外部 Icon 庫
const IconChevron = ({ isOpen }) => (
  <svg className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
);

const IconZap = () => (
  <svg className="w-6 h-6 text-red-500 fill-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);

const IconPlus = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
);

const IconMinus = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
);

export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+TC:wght@700;900&family=Quicksand:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen text-black comic-bg overflow-x-hidden" style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
      <style>{`
        .comic-bg { background-color: #f8fafc; background-image: radial-gradient(#cbd5e1 2px, transparent 2px); background-size: 20px 20px; }
        .comic-shadow { box-shadow: 8px 8px 0px 0px rgba(0,0,0,1); }
        .comic-shadow-sm { box-shadow: 4px 4px 0px 0px rgba(0,0,0,1); }
        .comic-border { border: 4px solid #000; }
        .text-stroke { color: white; text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }
        .halftone-bg { background-image: radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%); background-size: 8px 8px; }
        @media (max-width: 640px) { .text-stroke { text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000; } }
      `}</style>
      
      <Navbar />
      <HeroSection />
      <FinanceSection />
      <FeaturesSection />
      <SchoolsSection />
      <TimelineSection />
      <FAQSection />
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
          <div className="bg-white border-2 border-black p-1 comic-shadow-sm transform -rotate-6"><IconZap /></div>
          <span className="font-black text-xl sm:text-2xl tracking-tighter ml-1">TAIWAN 3+4</span>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-8 font-black text-lg text-black">
          <a href="#finance" className="hover:text-red-600 transition-colors">財務分析</a>
          <a href="#schools" className="hover:text-red-600 transition-colors">合作學校</a>
          <a href="#timeline" className="hover:text-red-600 transition-colors">報名時程</a>
          <a href="#faq" className="hover:text-red-600 transition-colors">常見問題</a>
        </div>
        <a href="#contact" className="bg-red-500 text-white border-2 sm:border-4 border-black px-4 sm:px-6 py-2 font-black text-sm sm:text-base comic-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">立即諮詢 !</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-cyan-400 border-b-8 border-black overflow-hidden px-4 text-center">
      <div className="absolute inset-0 opacity-10 halftone-bg"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-block bg-yellow-400 border-4 border-black px-4 sm:px-6 py-2 text-sm sm:text-xl font-black mb-6 comic-shadow transform -rotate-3 animate-pulse">💥 2026 年度馬來西亞專區報名中！</div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight text-stroke tracking-widest transform rotate-1 uppercase">SPM 後的<br/><span className="text-yellow-400">華麗轉身</span></h1>
        <div className="bg-white border-4 border-black comic-shadow p-6 sm:p-8 max-w-3xl mx-auto mb-10 transform -rotate-1">
          <p className="text-lg sm:text-3xl font-black leading-relaxed text-black">台灣政府官方認證「3年高中+4年大學」產學專班。<br/><span className="text-red-600 bg-yellow-300 px-2 inline-block mt-2 font-black italic">免學費、拿津貼、拿學位！</span></p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#finance" className="bg-white border-4 border-black text-black px-8 py-4 font-black text-lg sm:text-2xl comic-shadow hover:translate-x-1 hover:translate-y-1 transition-all">財務解密 ➡️</a>
          <a href="#contact" className="bg-red-500 border-4 border-black text-white px-8 py-4 font-black text-lg sm:text-2xl comic-shadow hover:translate-x-1 hover:translate-y-1 transition-all">聯繫代表 💬</a>
        </div>
      </div>
    </section>
  );
}

function FinanceSection() {
  const options = {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#000', titleFont: { size: 14, weight: 'bold' }, bodyFont: { size: 16, weight: 'bold' }, callbacks: { label: (ctx) => (ctx.raw < 0 ? '預估支出: ' : '預估結餘: ') + 'RM ' + Math.abs(ctx.raw).toLocaleString() } } },
    scales: { x: { grid: { color: '#000' }, ticks: { font: { weight: 'bold', size: 10 } } }, y: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 12 } } } }
  };
  const data = { labels: ['一般私大', '一般國大', '3+4 專班'], datasets: [{ data: [-120000, -80000, 45000], backgroundColor: ['#ef4444', '#fbbf24', '#22c55e'], borderColor: '#000', borderWidth: 4 }] };
  return (
    <section id="finance" className="py-16 sm:py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-stroke mb-10 text-center transform -rotate-2 uppercase">數據說話！為什麼選 3+4？</h2>
        <div className="bg-slate-50 border-4 border-black p-4 sm:p-8 comic-shadow relative">
          <div className="absolute top-0 right-0 bg-yellow-400 border-b-4 border-l-4 border-black px-3 py-1 text-xs font-black">實時估算</div>
          <div className="h-64 sm:h-80 w-full"><Bar options={options} data={data} /></div>
          <p className="mt-6 text-center font-black text-sm sm:text-base text-slate-500 italic">透過半工半讀，您不僅能免除學費，畢業後還能帶回一筆啟動基金！</p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: "💰", title: "學費全免 & 津貼", desc: "高中三年學費全免，每月實習領取薪資與津貼，自己負擔生活費。", color: "bg-yellow-400" },
    { icon: "🎓", title: "3+4 升學路徑", desc: "3年高職直升4年大學，七年取得雙文憑，畢業後可直接留台發展。", color: "bg-pink-400" },
    { icon: "🛡️", title: "官方認證最安全", desc: "僑委會官方主導專案，簽證與實習完全合法，全程有老師駐點照顧。", color: "bg-green-400" }
  ];
  return (
    <section className="py-16 sm:py-24 border-b-8 border-black bg-white px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {features.map((f, i) => (
        <div key={i} className={`${f.color} border-4 border-black p-6 comic-shadow transform hover:-translate-y-2 transition-transform`}>
          <div className="bg-white border-4 border-black w-16 h-16 flex items-center justify-center mb-6 comic-shadow rounded-full text-3xl">{f.icon}</div>
          <h3 className="text-xl font-black mb-4 bg-white inline-block px-2 border-2 border-black">{f.title}</h3>
          <p className="text-base font-bold leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}

function SchoolsSection() {
  const [filter, setFilter] = useState('all');
  const schools = [
    { name: "六信高中", loc: "台南", desc: "百年名校，具備深厚的技職教育底蘊。", majors: ["資訊科", "烘焙科"], color: "bg-red-400", link: "https://www.lhvs.tn.edu.tw/" },
    { name: "新光高中", loc: "高雄", desc: "設備新穎，與產業界對接緊密。", majors: ["資訊科"], color: "bg-blue-400", link: "https://sg.sgshedu.tw/" },
    { name: "育德工家", loc: "台南", desc: "技職教育專家，資訊與餐飲強項。", majors: ["烘焙科", "餐飲科"], color: "bg-green-400", link: "https://sites.google.com/ytvs.tn.edu.tw/2024html/" },
    { name: "華德工家", loc: "高雄", desc: "多元實習機會，對僑生照顧入微。", majors: ["資訊科", "烘焙科", "餐飲科"], color: "bg-purple-400", link: "https://www.hdvs.kh.edu.tw/" }
  ];
  const filteredSchools = filter === 'all' ? schools : schools.filter(s => s.loc === filter);
  return (
    <section id="schools" className="py-16 bg-yellow-300 border-b-8 border-black px-4">
      <div className="max-w-7xl mx-auto text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <h2 className="text-3xl sm:text-4xl font-black bg-white border-4 border-black inline-block px-6 py-2 comic-shadow transform rotate-1">名校探索</h2>
          <div className="flex gap-2">
            {['all', '台南', '高雄'].map(l => (
              <button key={l} onClick={() => setFilter(l)} className={`border-2 sm:border-4 border-black px-4 py-1 font-black comic-shadow-sm transition-all ${filter === l ? 'bg-red-500 text-white' : 'bg-white'}`}>{l === 'all' ? '全部' : l}</button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSchools.map((s, i) => (
            <div key={i} className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-2 transition-transform">
              <div className={`h-24 ${s.color} border-b-4 border-black flex items-center justify-center text-4xl`}>🏫</div>
              <div className="p-6 flex-grow">
                <h3 className="font-black text-2xl mb-2 text-black">{s.name}</h3>
                <p className="font-bold text-sm mb-4 text-slate-500">📍 台灣 {s.loc}</p>
                <p className="text-base font-bold mb-4 border-l-4 border-black pl-3 text-black">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.majors.map((m, j) => <span key={j} className="text-xs font-black bg-yellow-100 border-2 border-black px-2 py-1">{m}</span>)}
                </div>
              </div>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white text-center py-4 font-black hover:bg-red-600 transition-colors uppercase text-sm">官網 GO!</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineSection() {
  const [active, setActive] = useState(0);
  const steps = [
    { date: "12 - 01月", title: "最後衝刺與截止報名", tasks: "完成線上系統填寫，確認文件清晰。", remind: "2026年1月31日全國截止。", point: "SPM 考生可先提預估成績卡位。", color: "bg-yellow-400" },
    { date: "02月", title: "文件初審與補件期", tasks: "留意 Email 通知補件。", remind: "確保護照效期超過6個月。", point: "定期檢查垃圾信箱避免漏信。", color: "bg-cyan-400" },
    { date: "03月", title: "入學面試", tasks: "準備視訊或現場面試。", remind: "重點在於展現學習意願。", point: "穿著整齊展現良好態度。", color: "bg-pink-400" },
    { date: "04月", title: "資格複審與確認", tasks: "官方進行最終學歷審查。", remind: "此階段為後台作業。", point: "保持通訊暢通即可。", color: "bg-green-400" },
    { date: "05月", title: "錄取公告", tasks: "5月下旬公告正式名單。", remind: "會收到紙本錄取通知書。", point: "錄取通知書是辦簽證必備件。", color: "bg-yellow-400" },
    { date: "06月", title: "學歷驗證與說明會", tasks: "辦理外交部學歷認證。", remind: "舉辦大型行前說明會。", point: "認證程序較久請提早預約。", color: "bg-cyan-400" },
    { date: "07月", title: "辦理簽證與打包", tasks: "申請台灣居留簽證 (Visa)。", remind: "依學校批次訂購機票。", point: "打包清單包含常備藥與零食。", color: "bg-pink-400" },
    { date: "08月", title: "赴台啟航", tasks: "8月中下旬統一抵台。", remind: "入境後進行體檢與生活輔導。", point: "正式迎接獨立生活的第一關。", color: "bg-green-400" },
    { date: "09月", title: "正式開學", tasks: "進入高職階段學習與實訓。", remind: "建立正確工作倫理與態度。", point: "擴展人際關係與在地交流。", color: "bg-slate-200" }
  ];
  return (
    <section id="timeline" className="py-16 sm:py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-stroke mb-10 text-center transform rotate-1 uppercase">2026 招生行事曆</h2>
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className={`border-4 border-black comic-shadow transition-all ${active === i ? 'translate-x-1 sm:translate-x-4' : ''}`}>
              <button onClick={() => setActive(i)} className={`w-full flex items-center justify-between p-4 text-left font-black text-base sm:text-xl outline-none ${active === i ? step.color : 'bg-white'}`}>
                <span className="flex items-center gap-2"><span className={`px-2 py-1 border-2 border-black transform -skew-x-12 ${active === i ? 'bg-white text-black' : 'bg-black text-white'}`}>{step.date}</span> {step.title}</span>
                <IconChevron isOpen={active === i} />
              </button>
              {active === i && (
                <div className="p-6 border-t-4 border-black bg-white grid gap-4 text-black">
                  <p><strong>📝 關鍵任務：</strong>{step.tasks}</p>
                  <p><strong>🔔 提醒：</strong>{step.remind}</p>
                  <p><strong>🚩 重點：</strong>{step.point}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "計畫合法嗎？", a: "僑委會官方主導，全程受台灣教育部監管，實習受勞基法保障。" },
    { q: "SPM 成績要求？", a: "重態度。有 SPM 或預估成績即可報名面試。" },
    { q: "高中學費全免？", a: "是的，政府全額補助。生活費可透過實習薪資自理。" }
  ];
  return (
    <section id="faq" className="py-16 bg-pink-400 border-b-8 border-black px-4 text-center">
      <h2 className="text-3xl sm:text-6xl font-black text-stroke mb-10 uppercase">解惑專區</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white border-4 border-black comic-shadow text-left">
            <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-4 font-black text-lg flex justify-between items-center text-black">
              <span>Q: {f.q}</span> {open === i ? <IconMinus /> : <IconPlus />}
            </button>
            {open === i && <div className="p-4 border-t-4 border-black bg-slate-50 text-black">A: {f.a}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-white border-b-8 border-black halftone-bg px-4 text-center">
      <h2 className="text-3xl sm:text-6xl font-black text-stroke mb-10 uppercase">掃碼諮詢代表</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div className="bg-green-400 border-4 border-black p-6 comic-shadow">
          <img src="https://i.imgur.com/YdXztNr.png" alt="WhatsApp" className="w-40 h-40 mx-auto border-4 border-black mb-4 bg-white" />
          <h3 className="text-xl font-black mb-2 text-black">馬來西亞代表</h3>
          <p className="font-black bg-black text-white inline-block px-2 mb-4">+63 998 919 5808</p>
          <a href="https://wa.me/639989195808" className="block bg-white border-4 border-black py-2 font-black text-black">直接對話</a>
        </div>
        <div className="bg-blue-400 border-4 border-black p-6 comic-shadow">
          <img src="https://i.imgur.com/QTAePgC.jpeg" alt="LINE" className="w-40 h-40 mx-auto border-4 border-black mb-4 bg-white" />
          <h3 className="text-xl font-black mb-2 text-black">台灣校務處</h3>
          <p className="font-black bg-black text-white inline-block px-2 mb-4">+886 982 815 234</p>
          <a href="https://line.me/R/ti/p/@+886982815234" className="block bg-[#06C755] text-white border-4 border-black py-2 font-black">加 LINE 好友</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-12 text-center border-t-8 border-yellow-400">
      <h3 className="font-black text-2xl text-yellow-400 mb-4">Taiwan 3+4 Project</h3>
      <p className="text-sm px-4">具體學制與補助政策依台灣僑務委員會（OCAC）最新公告為準。</p>
      <p className="text-xs text-gray-500 mt-8 uppercase">&copy; 2026 TAIWAN 3+4 PROGRAM. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
