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

// --- 視覺組件：純 SVG 圖示 (避免外部庫依賴錯誤) ---
const IconZap = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" className="text-red-500 fill-yellow-400"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
);
const IconChevron = ({ isOpen }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}><path d="M19 9l-7 7-7-7" /></svg>
);
const Badge = ({ text, color = "bg-red-500" }) => (
  <div className={`absolute -top-4 -right-4 ${color} text-white font-black px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12 z-10 text-sm animate-bounce`}>
    {text}
  </div>
);

export default function App() {
  useEffect(() => {
    const link = document.createElement('link');
    // 修正：純字串網址，無括號
    link.href = 'https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+TC:wght@700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen text-black bg-[#f8fafc] overflow-x-hidden selection:bg-yellow-300" style={{ fontFamily: "'Noto Sans TC', sans-serif", backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
      <style>{`
        .comic-shadow { box-shadow: 10px 10px 0px 0px rgba(0,0,0,1); }
        .comic-border { border: 4px solid #000; }
        .text-stroke { color: white; text-shadow: 5px 5px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; }
        .halftone-bg { background-image: radial-gradient(rgba(0,0,0,0.2) 15%, transparent 16%); background-size: 6px 6px; }
      `}</style>
      
      <Navbar />
      <HeroSection />
      
      <div className="bg-black py-4 -rotate-1 scale-105 mb-20 overflow-hidden whitespace-nowrap border-y-4 border-white">
        <div className="text-yellow-400 font-black text-2xl tracking-widest inline-block animate-pulse">
           NO TUITION • EARN WHILE YOU LEARN • 2026 ENROLLING NOW • 
           NO TUITION • EARN WHILE YOU LEARN • 2026 ENROLLING NOW • 
        </div>
      </div>

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
          <div className="bg-white border-4 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-6"><IconZap /></div>
          <span className="font-black text-2xl sm:text-3xl tracking-tighter italic">TAIWAN 3+4</span>
        </div>
        <a href="#contact" className="bg-red-600 text-white border-4 border-black px-6 py-2 font-black text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95">立即諮詢 !</a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="relative pt-40 pb-24 bg-cyan-400 border-b-8 border-black overflow-hidden px-4 text-center">
      <div className="absolute top-10 left-10 opacity-20 halftone-bg w-40 h-40 rounded-full"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="inline-block bg-white border-4 border-black px-6 py-2 text-xl font-black mb-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2">
          💥 <span className="text-red-600">HOT NEWS:</span> 2026 年度入學申請正式開跑！
        </div>
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-black leading-tight text-stroke uppercase transform -rotate-2 mb-12">SPM 後的<br/><span className="text-yellow-400 italic">華麗轉身</span></h1>
        <div className="bg-white border-4 border-black comic-shadow p-8 max-w-3xl mx-auto transform rotate-1">
          <p className="text-xl sm:text-3xl font-black leading-relaxed text-black">
            台灣政府認證「3年高中+4年大學」<br/>
            <span className="bg-yellow-300 px-4 inline-block mt-4 border-2 border-black border-dashed">免學費、領津貼、拿學位！</span>
          </p>
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
  const data = { labels: ['一般私大', '一般國大', '3+4 專班'], datasets: [{ data: [-120000, -80000, 45000], backgroundColor: ['#f43f5e', '#fbbf24', '#22c55e'], borderColor: '#000', borderWidth: 4 }] };
  return (
    <section id="finance" className="py-24 border-b-8 border-black bg-white px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
            <h2 className="text-4xl sm:text-6xl font-black text-stroke transform -rotate-1 uppercase">數據說話！為什麼選我們？</h2>
        </div>
        <div className="bg-slate-50 border-4 border-black p-6 sm:p-12 comic-shadow relative">
          <Badge text="省很大!" color="bg-green-500" />
          <div className="h-80 w-full"><Bar options={options} data={data} /></div>
          <div className="mt-10 p-6 bg-yellow-200 border-4 border-black border-dashed font-black text-lg text-center">
             💡 透過實習，畢業後可帶回約 <span className="text-red-600 text-2xl">RM 45,000</span> 的啟動金！
          </div>
        </div>
      </div>
    </section>
  );
}

function SchoolsSection() {
  const schools = [
    { name: "六信高中", loc: "台南", majors: ["資訊科", "烘焙科"], color: "bg-red-400", emoji: "🤖", badge: "百年名校" },
    { name: "新光高中", loc: "高雄", majors: ["資訊科"], color: "bg-blue-400", emoji: "💻", badge: "設備新穎" },
    { name: "育德工家", loc: "台南", majors: ["烘焙科", "餐飲科"], color: "bg-green-400", emoji: "🍞", badge: "就業保證" },
    { name: "華德工家", loc: "高雄", majors: ["資訊科", "烘焙科", "餐飲科"], color: "bg-purple-400", emoji: "👨‍🍳", badge: "照顧第一" }
  ];
  return (
    <section id="schools" className="py-24 bg-yellow-300 border-b-8 border-black px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black bg-black text-white border-4 border-white inline-block px-8 py-4 comic-shadow transform rotate-1 uppercase mb-16">精選名校</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {schools.map((s, i) => (
            <div key={i} className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-4 hover:rotate-2 transition-all relative">
              <Badge text={s.badge} color={s.color} />
              <div className={`h-28 ${s.color} border-b-4 border-black flex items-center justify-center text-6xl`}>{s.emoji}</div>
              <div className="p-6 flex-grow">
                <h3 className="font-black text-2xl mb-1 text-black">{s.name}</h3>
                <p className="font-bold text-sm text-slate-500 mb-6">📍 台灣 {s.loc}</p>
                <div className="space-y-2 mb-6">
                  {s.majors.map((m, j) => (
                    <span key={j} className="inline-block w-full text-center font-black bg-slate-100 border-2 border-black py-1 text-sm hover:bg-yellow-200 transition-colors">#{m}</span>
                  ))}
                </div>
              </div>
              <a href="https://wa.me/639989195808" className="bg-black text-white text-center py-4 font-black uppercase text-sm hover:bg-red-600 transition-colors">瞭解詳細 ➔</a>
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
    { date: "12 - 01月", title: "最後衝刺與截止報名", tasks: "完成線上系統填寫，確認掃描文件清晰。", remind: "2026年1月31日為全國統一截止日。", point: "SPM 考生可先提交預估成績卡位。", color: "bg-yellow-400" },
    { date: "02月", title: "文件初審與補件期", tasks: "留意 Email 通知，補齊不全文件。", remind: "確保護照效期超過 6 個月。", point: "定期檢查垃圾信箱避免錯過通知。", color: "bg-cyan-400" },
    { date: "03月", title: "入學面試 (各校安排)", tasks: "準備視訊面試，展現學習意願。", remind: "重點在於表達團隊合作與心理建設。", point: "穿著整齊校服或正裝展現態度。", color: "bg-pink-400" },
    { date: "04月", title: "資格複審與確認", tasks: "官方進行最終身分與學歷審查。", remind: "此階段為後台作業，保持通訊暢通。", point: "學歷文件若有更新應主動補交。", color: "bg-green-400" },
    { date: "05月", title: "錄取公告與榜單確認", tasks: "5月下旬公告正式名單。", remind: "將收到正式的「錄取通知書」。", point: "錄取通知書是辦理簽證必備文件。", color: "bg-yellow-400" },
    { date: "06月", title: "學歷驗證與說明會", tasks: "辦理馬國外交部與 TECO 認證。", remind: "舉辦行前說明會，確認費用與行程。", point: "程序繁瑣建議收到通知後即刻預約。", color: "bg-cyan-400" },
    { date: "07月", title: "辦理簽證與打包", tasks: "申請台灣居留簽證 (Visa)。", remind: "依照學校安排之批次訂購機票。", point: "打包清單包含常備藥與家鄉零食。", color: "bg-pink-400" },
    { date: "08月", title: "赴台啟航與輔導", tasks: "8月中下旬統一搭機赴台。", remind: "入境體檢並參與新生生活輔導週。", point: "正式告別家人，迎接獨立生活。", color: "bg-green-400" },
    { date: "09月", title: "正式開學與訓練", tasks: "進入高職階段學習，開始技能訓練。", remind: "建立正確的工作倫理與態度。", point: "擴展在地交流，開啟 3+4 新生活。", color: "bg-slate-200" }
  ];

  return (
    <section id="timeline" className="py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-6xl font-black text-stroke mb-16 text-center uppercase">2026 招生行事曆</h2>
        <div className="grid gap-6">
          {steps.map((step, i) => (
            <div key={i} className={`border-4 border-black comic-shadow transform transition-all ${active === i ? 'translate-x-4 rotate-1' : ''}`}>
              <button onClick={() => setActive(i)} className={`w-full flex items-center justify-between p-6 text-left font-black text-xl sm:text-2xl outline-none ${active === i ? step.color : 'bg-white'}`}>
                <span className="flex items-center gap-4"><span className="bg-black text-white px-3 py-1 transform -skew-x-12 text-lg">{step.date}</span> {step.title}</span>
                <IconChevron isOpen={active === i} />
              </button>
              {active === i && (
                <div className="p-8 border-t-4 border-black bg-white grid gap-4 text-lg">
                  <p className="text-black"><strong>📝 關鍵任務：</strong>{step.tasks}</p>
                  <p className="text-black"><strong>🔔 提醒：</strong>{step.remind}</p>
                  <p className="text-black"><strong>🚩 重點：</strong>{step.point}</p>
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
      <div className="inline-block bg-white border-4 border-black p-8 comic-shadow mb-16 transform -rotate-1">
        <h2 className="text-4xl sm:text-7xl font-black text-stroke uppercase">現在就聯繫代表！</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="bg-green-400 border-4 border-black p-10 comic-shadow transform hover:rotate-2 transition-transform">
          <img src="https://i.imgur.com/YdXztNr.png" alt="WhatsApp" className="w-48 h-48 mx-auto border-8 border-black mb-8 bg-white" />
          <h3 className="text-3xl font-black mb-2 text-black underline decoration-4">駐馬代表</h3>
          <p className="font-black bg-black text-white text-2xl inline-block px-4 py-1 mb-8">+63 998 919 5808</p>
          <a href="https://wa.me/639989195808" className="block bg-white border-4 border-black py-4 font-black text-2xl hover:bg-yellow-400">點擊通話 💬</a>
        </div>
        <div className="bg-blue-400 border-4 border-black p-10 comic-shadow transform hover:-rotate-2 transition-transform">
          <img src="https://i.imgur.com/QTAePgC.jpeg" alt="LINE" className="w-48 h-48 mx-auto border-8 border-black mb-8 bg-white" />
          <h3 className="text-3xl font-black mb-2 text-black underline decoration-4">台校務辦公室</h3>
          <p className="font-black bg-black text-white text-2xl inline-block px-4 py-1 mb-8">+886 982 815 234</p>
          <a href="https://line.me/ti/p/~+886982815234" target="_blank" className="block bg-[#06C755] text-white border-4 border-black py-4 font-black text-2xl hover:bg-black transition-colors">加 LINE 好友 📱</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-black text-white py-16 text-center border-t-8 border-yellow-400">
      <h3 className="font-black text-4xl text-yellow-400 mb-6 italic tracking-tighter uppercase">TAIWAN 3+4 PROJECT</h3>
      <p className="text-xs text-gray-500 uppercase font-black tracking-widest">&copy; 2026 ALL RIGHTS RESERVED.</p>
    </footer>
  );
}
