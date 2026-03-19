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

// --- 核心組件：純內嵌 SVG (確保不依賴外部套件，防止編譯錯誤) ---
const IconZap = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-red-600 fill-yellow-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconChevron = ({ isOpen }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><path d="M19 9l-7 7-7-7" /></svg>
);
const Badge = ({ text, color = "bg-red-500" }) => (
  <div className={`absolute -top-4 -right-4 ${color} text-white font-black px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 z-10 text-sm animate-bounce`}>
    {text}
  </div>
);

export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = "https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+TC:wght@700;900&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen text-black bg-[#fdfdfd] overflow-x-hidden selection:bg-yellow-300" style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
      <style>{`
        .comic-bg { background-image: radial-gradient(rgba(0,0,0,0.1) 2px, transparent 2px); background-size: 24px 24px; }
        .comic-shadow { box-shadow: 10px 10px 0px 0px rgba(0,0,0,1); }
        .comic-border { border: 4px solid #000; }
        .text-stroke { color: white; text-shadow: 5px 5px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }
        .halftone-bg { background-image: radial-gradient(rgba(0,0,0,0.15) 15%, transparent 16%); background-size: 8px 8px; }
        @media (max-width: 640px) { .text-stroke { text-shadow: 3px 3px 0 #000; } }
      `}</style>
      
      <Navbar />
      <HeroSection />
      
      {/* 動態資訊跑馬燈 */}
      <div className="bg-black py-4 -rotate-1 scale-105 mb-24 overflow-hidden whitespace-nowrap border-y-4 border-white shadow-xl relative z-20">
        <div className="text-yellow-400 font-black text-2xl tracking-widest inline-block animate-pulse">
           🔥 2026 年度入學申請中 • 高中三年學費全免 • 台灣 3+4 官方合作計畫 • 馬來西亞專區 • 
           🔥 2026 年度入學申請中 • 高中三年學費全免 • 台灣 3+4 官方合作計畫 • 馬來西亞專區 • 
        </div>
      </div>

      <FinanceSection />
      <FeaturesSection />
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center font-black">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="bg-white border-4 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-6"><IconZap /></div>
          <span className="text-2xl sm:text-3xl tracking-tighter italic uppercase">Taiwan 3+4</span>
        </div>
        <div className="hidden lg:flex gap-8 text-sm uppercase">
          <a href="#finance" className="hover:text-red-600 transition-colors">財務分析</a>
          <a href="#schools" className="hover:text-red-600 transition-colors">合作學校</a>
          <a href="#timeline" className="hover:text-red-600 transition-colors">報名時程</a>
        </div>
        <a href="#contact" className="bg-red-600 text-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95">立即報名</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 bg-cyan-400 border-b-8 border-black overflow-hidden px-4 text-center comic-bg">
      <div className="absolute top-10 left-10 opacity-20 halftone-bg w-40 h-40 rounded-full"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="inline-block bg-white border-4 border-black px-6 py-2 text-xl font-black mb-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
          📢 <span className="text-red-600 underline">2026 NEWS:</span> 馬來西亞專區招生正式啟動
        </div>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black leading-tight text-stroke uppercase transform -rotate-1 mb-14 tracking-tighter">SPM 後的<br/><span className="text-yellow-400 italic">華麗轉身</span></h1>
        <div className="bg-white border-4 border-black comic-shadow p-8 max-w-3xl mx-auto transform rotate-1 hover:rotate-0 transition-transform">
          <p className="text-xl sm:text-3xl font-black leading-relaxed text-black">
            台灣官方正式認證「3年高中+4年大學」計畫<br/>
            <span className="bg-yellow-300 px-4 inline-block mt-4 border-4 border-black border-dashed italic">免學費、領津貼、拿正規大學學位！</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function FinanceSection() {
  const options = {
    indexAxis: 'y', responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { backgroundColor: '#000', padding: 12 } },
    scales: { x: { grid: { color: '#000' }, ticks: { font: { weight: 'bold' } } }, y: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 14 } } } }
  };
  const data = { 
    labels: ['一般私大', '一般國大', '3+4 專班'], 
    datasets: [{ 
      data: [-120000, -80000, 45000], 
      backgroundColor: ['#f43f5e', '#fbbf24', '#22c55e'], 
      borderColor: '#000', 
      borderWidth: 4 
    }] 
  };
  return (
    <section id="finance" className="py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black text-stroke text-center mb-16 transform -rotate-1 uppercase tracking-tighter">數據說話！為什麼選我們？</h2>
        <div className="bg-slate-50 border-4 border-black p-6 sm:p-12 comic-shadow relative group">
          <Badge text="省錢首選!" color="bg-green-500" />
          <div className="h-80 w-full"><Bar options={options} data={data} /></div>
          <div className="mt-10 p-6 bg-yellow-100 border-4 border-black border-dashed font-black text-lg text-center">
             💡 實習津貼結餘：畢業後預計可帶回約 <span className="text-red-600 text-3xl">RM 45,000</span> 的啟動金！
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: "💰", title: "學費全免", desc: "高中三年學費由台灣政府補助，減輕家庭經濟負擔。", color: "bg-pink-400" },
    { icon: "🛠️", title: "帶薪實習", desc: "產學完美接軌，每月領取實習津貼，支付生活開銷。", color: "bg-yellow-400" },
    { icon: "🎓", title: "正式學位", desc: "完成七年一貫學程，同時取得正式高職與大學學歷。", color: "bg-cyan-400" }
  ];
  return (
    <section className="py-24 border-b-8 border-black bg-slate-50 px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
        {features.map((f, i) => (
          <div key={i} className={`${f.color} border-4 border-black p-10 comic-shadow transform hover:-translate-y-4 transition-transform`}>
            <div className="bg-white border-4 border-black w-20 h-20 flex items-center justify-center mb-6 comic-shadow rounded-full text-4xl mx-auto">{f.icon}</div>
            <h3 className="text-2xl font-black mb-4 bg-white inline-block px-3 border-2 border-black">{f.title}</h3>
            <p className="text-lg font-bold leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function SchoolsSection() {
  const schools = [
    { 
      name: "六信高中", 
      loc: "台南", 
      majors: ["資訊科", "烘焙科"], 
      color: "bg-red-400", 
      emoji: "🤖", 
      badge: "百年名校",
      link: "https://www.lhvs.tn.edu.tw/index.php?option=module&lang=cht&task=showlist&id=105&index=5"
    },
    { 
      name: "新光高中", 
      loc: "高雄", 
      majors: ["資訊科"], 
      color: "bg-blue-400", 
      emoji: "💻", 
      badge: "設備新穎",
      link: "https://sg.sgshedu.tw/"
    },
    { 
      name: "育德工家", 
      loc: "台南", 
      majors: ["烘焙科", "餐飲科"], 
      color: "bg-green-400", 
      emoji: "🍞", 
      badge: "就業保證",
      link: "https://sites.google.com/ytvs.tn.edu.tw/ytvs204c"
    },
    { 
      name: "華德工家", 
      loc: "高雄", 
      majors: ["資訊科", "烘焙科", "餐飲科"], 
      color: "bg-purple-400", 
      emoji: "👨‍🍳", 
      badge: "照顧第一",
      link: "https://www.hdvs.kh.edu.tw/?.p=Hrpp"
    }
  ];
  return (
    <section id="schools" className="py-24 bg-yellow-300 border-b-8 border-black px-4 relative halftone-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black bg-black text-white border-4 border-white inline-block px-8 py-4 comic-shadow transform rotate-1 uppercase mb-20 tracking-tighter">精選名校探索</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {schools.map((s, i) => (
            <div key={i} className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-4 hover:rotate-1 transition-all relative group">
              <Badge text={s.badge} color={s.color} />
              <div className={`h-32 ${s.color} border-b-4 border-black flex items-center justify-center text-7xl group-hover:scale-110 transition-transform`}>{s.emoji}</div>
              <div className="p-6 flex-grow">
                <h3 className="font-black text-2xl mb-1 text-black underline decoration-4 tracking-tighter">{s.name}</h3>
                <p className="font-bold text-sm text-slate-500 mb-6 flex items-center gap-1 italic">📍 基地位置: 台灣 {s.loc}</p>
                <div className="space-y-2 mb-4">
                  {s.majors.map((m, j) => (
                    <span key={j} className="inline-block w-full text-center font-black bg-slate-100 border-2 border-black py-1 px-2 text-sm hover:bg-yellow-200 transition-colors tracking-widest">#{m}</span>
                  ))}
                </div>
              </div>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white text-center py-4 font-black uppercase text-sm hover:bg-red-600 transition-colors tracking-widest">進入官網 ➔</a>
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
    { date: "12 - 01月", title: "截止報名", tasks: "完成系統填寫，確認文件清晰無誤。", remind: "1月31日為截止日。SPM可先提預估成績。" },
    { date: "02月", title: "文件初審", tasks: "留意 Email 補件通知。檢查護照效期是否足夠。", remind: "定期檢查垃圾信箱避免錯過重要通知。" },
    { date: "03月", title: "入學面試", tasks: "各校安排視訊或面試。展現學習意願與潛力。", remind: "穿著整齊校服或正裝展現態度。" },
    { date: "04月", title: "資格複審", tasks: "官方進行最終學歷與身分審查。", remind: "此階段為後台作業，保持通訊暢通即可。" },
    { date: "05月", title: "錄取公告", tasks: "公佈榜單並寄發錄取通知書袋。", remind: "錄取通知書是辦理簽證的必備文件。" },
    { date: "06月", title: "學歷驗證", tasks: "辦理馬國外交部與 TECO 認證。", remind: "程序較繁瑣，收到通知後建議即刻預約。" },
    { date: "07月", title: "簽證打包", tasks: "申請居留簽證。依照批次訂購機票。", remind: "打包清單包含常備藥、面試服與家鄉零食。" },
    { date: "08月", title: "赴台啟航", tasks: "8月中下旬抵台。參與新生生活輔導週。", remind: "正式告別家人，迎接獨立生活新篇章。" },
    { date: "09月", title: "正式開學", tasks: "進入高職學習。開始技能訓練與實務實習。", remind: "建立正確的工作倫理與學習態度。" }
  ];

  return (
    <section id="timeline" className="py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black text-stroke mb-20 text-center uppercase transform rotate-1 tracking-tighter">2026 年度時程地圖</h2>
        <div className="grid gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`border-4 border-black comic-shadow transform transition-all ${active === i ? 'translate-x-4 rotate-1' : ''}`}>
              <button onClick={() => setActive(i)} className={`w-full flex items-center justify-between p-6 text-left font-black text-xl sm:text-2xl outline-none ${active === i ? 'bg-purple-600 text-white' : 'bg-white hover:bg-slate-50'}`}>
                <span className="flex items-center gap-4"><span className="bg-black text-white px-4 py-1 transform -skew-x-12 uppercase">{step.date}</span> {step.title}</span>
                <IconChevron isOpen={active === i} />
              </button>
              {active === i && (
                <div className="p-8 border-t-4 border-black bg-white grid gap-4 text-xl font-bold leading-relaxed border-dashed text-black">
                  <p>📝 關鍵任務：{step.tasks}</p>
                  <p className="text-slate-600 italic">🔔 注意事項：{step.remind}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cyan-400 border-b-8 border-black halftone-bg px-4 text-center">
      <div className="inline-block bg-white border-4 border-black p-8 comic-shadow mb-20 transform -rotate-1">
        <h2 className="text-4xl sm:text-7xl font-black text-stroke uppercase tracking-tighter">聯繫駐地代表諮詢</h2>
        <p className="mt-4 font-black text-2xl text-black">夢想不等人，2026 年度名額有限！</p>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-green-400 border-4 border-black p-10 comic-shadow transform hover:rotate-2 transition-transform group">
          <img src="https://i.imgur.com/YdXztNr.png" alt="WhatsApp" className="w-48 h-48 mx-auto border-8 border-black mb-8 bg-white group-hover:scale-105 transition-transform" />
          <h3 className="text-3xl font-black mb-2 text-black underline tracking-tight">馬來西亞代表</h3>
          <p className="font-black bg-black text-white text-2xl inline-block px-4 py-1 mb-8 tracking-widest">+63 998 919 5808</p>
          <a href="https://wa.me/639989195808" className="block bg-white border-4 border-black py-4 font-black text-2xl hover:bg-yellow-400 transition-all uppercase">WhatsApp 直接對話</a>
        </div>
        <div className="bg-blue-400 border-4 border-black p-10 comic-shadow transform hover:-rotate-2 transition-transform group">
          <img src="https://i.imgur.com/QTAePgC.jpeg" alt="LINE" className="w-48 h-48 mx-auto border-8 border-black mb-8 bg-white group-hover:scale-105 transition-transform" />
          <h3 className="text-3xl font-black mb-2 text-black underline tracking-tight">台灣校務辦公室</h3>
          <p className="font-black bg-black text-white text-2xl inline-block px-4 py-1 mb-8 tracking-widest">+886 982 815 234</p>
          {/* 正確的 LINE 電話號碼搜尋格式 */}
          <a href="https://line.me/ti/p/~+886982815234" target="_blank" rel="noopener noreferrer" className="block bg-[#06C755] text-white border-4 border-black py-4 font-black text-2xl hover:bg-black transition-all uppercase tracking-widest">加 LINE 好友 📱</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-20 text-center border-t-8 border-yellow-400">
      <h3 className="font-black text-4xl text-yellow-400 mb-8 italic tracking-tighter uppercase">TAIWAN 3+4 PROGRAM</h3>
      <div className="max-w-4xl mx-auto px-4 opacity-70 font-bold mb-10 leading-relaxed text-sm">
         本平台僅供赴台就讀諮詢使用。具體學制、補助金額及實習規範，<br/>
         請以台灣僑務委員會（OCAC）最新公告之簡章規範為準。
      </div>
      <p className="text-xs text-gray-500 uppercase font-black tracking-widest">&copy; 2026 OFFICIAL PORTAL. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
