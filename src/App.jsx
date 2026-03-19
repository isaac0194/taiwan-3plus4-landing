import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, Calendar, CheckCircle2, HelpCircle, 
  Plus, Minus, MapPin, GraduationCap, Briefcase, 
  ShieldCheck, ArrowRight, BookOpen, MessageCircle, Zap
} from 'lucide-react';
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

export default function App() {
  // 載入漫畫風專用字體
  useEffect(() => {
    const link = document.createElement('link');
    link.href = '[https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+TC:wght@700;900&family=Quicksand:wght@700&display=swap](https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+TC:wght@700;900&family=Quicksand:wght@700&display=swap)';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="min-h-screen text-black comic-bg overflow-x-hidden" style={{ fontFamily: "'Noto Sans TC', sans-serif" }}>
      <style>{`
        .comic-bg {
          background-color: #f8fafc;
          background-image: radial-gradient(#cbd5e1 2px, transparent 2px);
          background-size: 20px 20px;
        }
        .comic-shadow {
          box-shadow: 8px 8px 0px 0px rgba(0,0,0,1);
        }
        .comic-shadow-sm {
          box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);
        }
        .comic-border {
          border: 4px solid #000;
        }
        .text-stroke {
          color: white;
          text-shadow: 4px 4px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
        }
        .halftone-bg {
          background-image: radial-gradient(rgba(0,0,0,0.1) 15%, transparent 16%);
          background-size: 8px 8px;
        }
        @media (max-width: 640px) {
          .text-stroke {
            text-shadow: 2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000;
          }
        }
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

// 1. 導航列
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-yellow-400 border-b-4 border-black z-50 h-20 flex items-center shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-white border-2 border-black p-1 comic-shadow-sm transform -rotate-6">
            <Zap className="text-red-500 fill-red-500" size={20} />
          </div>
          <span className="font-black text-xl sm:text-2xl tracking-tighter ml-1 text-black">TAIWAN 3+4</span>
        </div>
        <div className="hidden md:flex gap-6 lg:gap-8 font-black text-lg">
          <a href="#finance" className="hover:text-red-600 transition-colors">財務分析</a>
          <a href="#schools" className="hover:text-red-600 transition-colors">合作學校</a>
          <a href="#timeline" className="hover:text-red-600 transition-colors">報名時程</a>
          <a href="#faq" className="hover:text-red-600 transition-colors">常見問題</a>
        </div>
        <a href="#contact" className="bg-red-500 text-white border-2 sm:border-4 border-black px-4 sm:px-6 py-2 font-black text-sm sm:text-base comic-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
          立即諮詢 !
        </a>
      </div>
    </nav>
  );
}

// 2. 首屏區塊
function HeroSection() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 bg-cyan-400 border-b-8 border-black overflow-hidden px-4">
      <div className="absolute inset-0 opacity-10 halftone-bg"></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="inline-block bg-yellow-400 border-4 border-black px-4 sm:px-6 py-2 text-sm sm:text-xl font-black mb-6 sm:mb-8 comic-shadow transform -rotate-3 animate-pulse">
          💥 2026 年度馬來西亞專區報名中！
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-8 leading-tight text-stroke tracking-widest transform rotate-1 uppercase">
          SPM 後的<br/><span className="text-yellow-400">華麗轉身</span>
        </h1>
        <div className="bg-white border-4 border-black comic-shadow p-6 sm:p-8 max-w-3xl mx-auto mb-10 sm:mb-12 transform -rotate-1">
          <p className="text-lg sm:text-3xl font-black leading-relaxed">
            台灣政府官方認證「3年高中+4年大學」產學專班。<br/>
            <span className="text-red-600 bg-yellow-300 px-2 inline-block mt-2 font-black italic">免學費、拿津貼、拿學位！</span>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <a href="#finance" className="bg-white border-4 border-black text-black px-8 py-4 font-black text-lg sm:text-2xl comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center">財務解密 ➡️</a>
          <a href="#contact" className="bg-red-500 border-4 border-black text-white px-8 py-4 font-black text-lg sm:text-2xl comic-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-center">聯繫代表 💬</a>
        </div>
      </div>
    </section>
  );
}

// 3. 財務分析圖表
function FinanceSection() {
  const options = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#000',
        titleFont: { size: 14, weight: 'bold' },
        bodyFont: { size: 16, weight: 'bold' },
        callbacks: {
          label: (ctx) => (ctx.raw < 0 ? '預估支出: ' : '預估結餘: ') + 'RM ' + Math.abs(ctx.raw).toLocaleString()
        }
      }
    },
    scales: {
      x: { grid: { color: '#000' }, ticks: { font: { weight: 'bold', size: 10 } } },
      y: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 12 } } }
    }
  };

  const data = {
    labels: ['一般私大', '一般國大', '3+4 專班'],
    datasets: [{
      data: [-120000, -80000, 45000],
      backgroundColor: ['#ef4444', '#fbbf24', '#22c55e'],
      borderColor: '#000',
      borderWidth: 4,
    }]
  };

  return (
    <section id="finance" className="py-16 sm:py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-black text-stroke mb-10 sm:text-center transform -rotate-2 uppercase">數據說話！為什麼選 3+4？</h2>
        <div className="bg-slate-50 border-4 border-black p-4 sm:p-8 comic-shadow relative">
            <div className="absolute top-0 right-0 bg-yellow-400 border-b-4 border-l-4 border-black px-3 py-1 text-xs sm:text-base font-black">實時估算</div>
            <div className="h-64 sm:h-80 w-full">
                <Bar options={options} data={data} />
            </div>
            <p className="mt-6 sm:mt-8 text-center font-black text-sm sm:text-base text-slate-500 italic leading-relaxed">
              透過半工半讀，您不僅能免除學費，畢業後還能帶回一筆啟動基金！
            </p>
        </div>
      </div>
    </section>
  );
}

// 4. 計畫優勢
function FeaturesSection() {
  const features = [
    { icon: "💰", title: "學費全免 & 津貼", desc: "高中三年學費全免，每月實習領取薪資與津貼，自己負擔生活費。", color: "bg-yellow-400" },
    { icon: "🎓", title: "3+4 升學路徑", desc: "3年高職直升4年大學，七年取得雙文憑，畢業後可直接留台發展。", color: "bg-pink-400" },
    { icon: "🛡️", title: "官方認證最安全", desc: "僑委會官方主導專案，簽證與實習完全合法，全程有老師駐點照顧。", color: "bg-green-400" }
  ];

  return (
    <section id="features" className="py-16 sm:py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {features.map((f, i) => (
          <div key={i} className={`${f.color} border-4 border-black p-6 sm:p-8 comic-shadow transform hover:-translate-y-2 transition-transform`}>
            <div className="bg-white border-4 border-black w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-6 comic-shadow rounded-full text-3xl sm:text-4xl">{f.icon}</div>
            <h3 className="text-xl sm:text-2xl font-black mb-4 bg-white inline-block px-2 border-2 border-black tracking-tighter">{f.title}</h3>
            <p className="text-base sm:text-lg font-bold leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// 5. 合作學校
function SchoolsSection() {
  const [filter, setFilter] = useState('all');
  const schools = [
    { 
      name: "六信高中", 
      loc: "台南", 
      desc: "百年名校，具備深厚的技職教育底蘊，設備頂尖。", 
      majors: ["資訊科", "烘焙科"], 
      color: "bg-red-400", 
      link: "[https://www.lhvs.tn.edu.tw/](https://www.lhvs.tn.edu.tw/)" 
    },
    { 
      name: "新光高中", 
      loc: "高雄", 
      desc: "設備新穎，產學對接緊密，環境優美。", 
      majors: ["資訊科"], 
      color: "bg-blue-400", 
      link: "[https://sg.sgshedu.tw/](https://sg.sgshedu.tw/)" 
    },
    { 
      name: "育德工家", 
      loc: "台南", 
      desc: "技職教育專家，資訊與餐飲是校內強項。", 
      majors: ["烘焙科", "餐飲科"], 
      color: "bg-green-400", 
      link: "[https://sites.google.com/ytvs.tn.edu.tw/2024html/](https://sites.google.com/ytvs.tn.edu.tw/2024html/)" 
    },
    { 
      name: "華德工家", 
      loc: "高雄", 
      desc: "多元實習機會，對僑生生活照顧無微不至。", 
      majors: ["資訊科", "烘焙科", "餐飲科"], 
      color: "bg-purple-400", 
      link: "[https://www.hdvs.kh.edu.tw/](https://www.hdvs.kh.edu.tw/)" 
    }
  ];

  const filteredSchools = filter === 'all' ? schools : schools.filter(s => s.loc === filter);

  return (
    <section id="schools" className="py-16 sm:py-24 bg-yellow-300 border-b-8 border-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 sm:mb-16 gap-6 text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl font-black bg-white border-4 border-black inline-block px-6 py-2 sm:px-8 sm:py-3 comic-shadow transform rotate-1 uppercase">名校探索</h2>
            <div className="flex gap-2 sm:gap-4">
                <button onClick={() => setFilter('all')} className={`border-2 sm:border-4 border-black px-3 py-1 sm:px-6 sm:py-2 font-black comic-shadow-sm transition-all text-sm sm:text-base ${filter === 'all' ? 'bg-red-500 text-white' : 'bg-white'}`}>全部</button>
                <button onClick={() => setFilter('台南')} className={`border-2 sm:border-4 border-black px-3 py-1 sm:px-6 sm:py-2 font-black comic-shadow-sm transition-all text-sm sm:text-base ${filter === '台南' ? 'bg-red-500 text-white' : 'bg-white'}`}>台南</button>
                <button onClick={() => setFilter('高雄')} className={`border-2 sm:border-4 border-black px-3 py-1 sm:px-6 sm:py-2 font-black comic-shadow-sm transition-all text-sm sm:text-base ${filter === '高雄' ? 'bg-red-500 text-white' : 'bg-white'}`}>高雄</button>
            </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredSchools.map((s, i) => (
            <div key={i} className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-2 transition-transform">
              <div className={`h-24 ${s.color} border-b-4 border-black flex items-center justify-center text-4xl`}>🏫</div>
              <div className="p-6 flex-grow">
                <h3 className="font-black text-2xl mb-2">{s.name}</h3>
                <p className="font-bold text-sm mb-4 text-slate-500">📍 台灣 {s.loc}</p>
                <p className="text-base font-bold mb-4 border-l-4 border-black pl-3 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {s.majors.map((m, j) => <span key={j} className="text-xs font-black bg-yellow-100 border-2 border-black px-2 py-1">{m}</span>)}
                </div>
              </div>
              <a href={s.link} target="_blank" rel="noopener noreferrer" className="bg-black text-white text-center py-4 font-black hover:bg-red-600 transition-colors uppercase tracking-widest text-sm">官網 GO!</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. 2026 招生行事曆 (詳細 9 步驟詳細版)
function TimelineSection() {
  const [active, setActive] = useState(0);
  const steps = [
    { 
      date: "12 - 01月", 
      title: "最後衝刺與截止報名", 
      tasks: "完成線上系統填寫，確認所有掃描文件清晰無誤。",
      remind: "2026年1月31日為全國統一截止日。",
      point: "SPM 考生可先提交預估成績或校內成績單卡位。",
      color: "bg-yellow-400"
    },
    { 
      date: "02月", 
      title: "文件初審與補件期", 
      tasks: "留意 E-mail 或代辦單位通知，若文件不全需在此時完成補齊。",
      remind: "確保護照效期超過 6 個月，若效期不足應利用此空檔辦理新護照。",
      point: "定期檢查垃圾信箱，避免錯過官方重要通知。",
      color: "bg-cyan-400"
    },
    { 
      date: "03月", 
      title: "入學面試 (各校安排)", 
      tasks: "準備視訊或現場面試（視當年校方安排而定）。",
      remind: "重點在於表達學習意願、團隊合作意願，以及對實務挑戰的心理建設。",
      point: "建議穿著整齊校服或正裝，展現良好態度。",
      color: "bg-pink-400"
    },
    { 
      date: "04月", 
      title: "資格複審與資格確認", 
      tasks: "僑委會與教育部進行最終身分與學歷審查。",
      remind: "此階段為後台作業，學生僅需保持通訊暢通即可。",
      point: "若學歷文件有更新（如領取正式 SPM 證書），應主動補交。",
      color: "bg-green-400"
    },
    { 
      date: "05月", 
      title: "錄取公告與榜單確認", 
      tasks: "預計於 5月下旬 公告正式錄取名單。",
      remind: "錄取學生會收到正式的「錄取通知書」。",
      point: "這是法律文件，辦理簽證必備，請妥善保管。",
      color: "bg-yellow-400"
    },
    { 
      date: "06月", 
      title: "學歷驗證與家長說明會", 
      tasks: "辦理馬來西亞外交部與台北經文處 (TECO) 的學歷認證。",
      remind: "舉辦行前說明會，確認入學雜費、機票購買及相關細節。",
      point: "認證程序需耗時，建議收到通知後立即預約。",
      color: "bg-cyan-400"
    },
    { 
      date: "07月", 
      title: "辦理簽證與行李打包", 
      tasks: "申請台灣居留簽證 (Visa)。",
      remind: "依照學校安排之「入台批次」訂購機票。",
      point: "打包清單包含：正式面試服、個人常備藥、馬來西亞家鄉零食。",
      color: "bg-pink-400"
    },
    { 
      date: "08月", 
      title: "赴台啟航與入學輔導", 
      tasks: "2026年8月中下旬 統一搭機赴台。",
      remind: "入境後進行體檢、辦理居留證，並參與新生生活輔導週。",
      point: "正式開啟獨立生活的第一關，準備好迎接挑戰。",
      color: "bg-green-400"
    },
    { 
      date: "09月", 
      title: "正式開學與職前訓練", 
      tasks: "正式進入高職學習，並開始實習前的基礎安全與技能教育。",
      remind: "建立正確的工作倫理與學習態度。",
      point: "開始與台灣本地學生交流，擴展人際視野。",
      color: "bg-slate-200"
    }
  ];

  return (
    <section id="timeline" className="py-16 sm:py-24 border-b-8 border-black bg-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-5xl font-black text-stroke mb-10 text-center transform rotate-1 uppercase">2026 招生行事曆</h2>
        <p className="text-center font-black mb-12 text-slate-500 italic">點擊月份查看詳細任務重點 🔍</p>
        
        <div className="space-y-6">
          {steps.map((step, i) => (
            <div key={i} className={`border-4 border-black comic-shadow transition-all ${active === i ? 'translate-x-1 sm:translate-x-4' : ''}`}>
              <button 
                onClick={() => setActive(i)} 
                className={`w-full flex items-center justify-between p-4 sm:p-6 text-left font-black text-base sm:text-xl outline-none transition-colors ${active === i ? step.color : 'bg-white hover:bg-slate-50'}`}
              >
                <span className="flex items-center flex-wrap gap-2 sm:gap-4">
                  <span className={`px-3 py-1 border-2 border-black transform -skew-x-12 text-sm sm:text-base ${active === i ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    {step.date}
                  </span> 
                  {step.title}
                </span>
                <ChevronDown className={`shrink-0 transition-transform duration-300 ${active === i ? 'rotate-180' : ''}`} />
              </button>
              
              {active === i && (
                <div className="p-6 sm:p-8 border-t-4 border-black bg-white grid gap-6">
                  <div className="flex gap-4">
                    <div className="bg-blue-100 border-2 border-black p-2 h-fit text-xl">📝</div>
                    <div>
                      <h4 className="font-black text-lg text-blue-800 mb-1 underline decoration-2">關鍵任務</h4>
                      <p className="font-bold text-slate-700">{step.tasks}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-yellow-100 border-2 border-black p-2 h-fit text-xl">🔔</div>
                    <div>
                      <h4 className="font-black text-lg text-yellow-800 mb-1 underline decoration-2">提醒</h4>
                      <p className="font-bold text-slate-700">{step.remind}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-red-100 border-2 border-black p-2 h-fit text-xl">🚩</div>
                    <div>
                      <h4 className="font-black text-lg text-red-800 mb-1 underline decoration-2">重點</h4>
                      <p className="font-bold text-slate-700">{step.point}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 7. 常見問題
function FAQSection() {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: "這個計畫是合法的嗎？會不會是詐騙？", a: "這是由僑委會主導的官方計畫，全程受台灣教育部監管，實習完全合法，並受勞基法保障。" },
    { q: "SPM 成績要求？不及格也能報名嗎？", a: "更看重學習態度。只要具備 SPM 成績單（含預估成績）並完成中五課程即可報名面試。" },
    { q: "高中三年真的學費全免？家長要負擔什麼？", a: "是的，高中學費由政府全額補助。家長僅需負擔雜費與生活費，學生可透過實習薪資自理。" },
    { q: "孩子在台灣的實習環境安全嗎？", a: "皆為知名合法企業，學校老師會定期駐點督導，確保學生安全與實習權益。" },
    { q: "畢業後能留在台灣工作嗎？", a: "可以。畢業取得大學學位後，可透過「評點制」申請留台工作。擁有在地經驗起薪更具優勢。" }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-pink-400 border-b-8 border-black px-4">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl sm:text-6xl font-black text-stroke text-center mb-10 sm:mb-16 uppercase">解惑專區</h2>
        <div className="grid gap-4">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white border-4 border-black comic-shadow text-left">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-4 sm:p-6 text-left font-black text-lg sm:text-xl flex justify-between items-center outline-none">
                <span className="flex gap-3 sm:gap-4"><span className="text-red-600">Q.</span>{f.q}</span>
                <div className="shrink-0">{open === i ? <Minus size={20}/> : <Plus size={20}/>}</div>
              </button>
              {open === i && <div className="p-4 sm:p-6 border-t-4 border-black font-bold text-base sm:text-lg bg-slate-50 leading-relaxed text-slate-700">A. {f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 8. 聯絡與二維碼
function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b-8 border-black relative overflow-hidden halftone-bg px-4">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="mb-10 sm:mb-16">
          <div className="inline-block bg-black text-yellow-400 px-4 py-2 text-lg sm:text-2xl font-black transform -skew-x-12 mb-6">ACTION NOW!</div>
          <h2 className="text-3xl sm:text-6xl font-black text-stroke mb-6 uppercase">掃碼諮詢代表</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
          {/* WhatsApp */}
          <div className="bg-green-400 border-4 border-black p-6 sm:p-10 comic-shadow flex flex-col items-center transform hover:rotate-1 transition-transform">
            <div className="bg-white border-4 border-black p-3 sm:p-4 mb-6 shadow-black shadow-md group-hover:scale-105 transition-transform">
                <img src="[https://i.imgur.com/YdXztNr.png](https://i.imgur.com/YdXztNr.png)" alt="WhatsApp QR" className="w-32 h-32 sm:w-48 sm:h-48 object-contain" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black bg-white px-2 mb-2 tracking-tighter">馬來西亞駐地代表</h3>
            <p className="font-black text-lg sm:text-xl mb-6 bg-black text-white px-2 tracking-widest">+63 998 919 5808</p>
            <a href="[https://wa.me/639989195808](https://wa.me/639989195808)" target="_blank" rel="noopener noreferrer" className="w-full bg-white border-4 border-black text-black py-3 sm:py-4 font-black text-lg sm:text-xl hover:bg-yellow-300 text-center transition-colors">直接對話 !</a>
          </div>
          {/* LINE (電話搜尋優化版) */}
          <div className="bg-blue-400 border-4 border-black p-6 sm:p-10 comic-shadow flex flex-col items-center transform hover:-rotate-1 transition-transform">
            <div className="bg-white border-4 border-black p-3 sm:p-4 mb-6 shadow-black shadow-md group-hover:scale-105 transition-transform">
                <img src="[https://i.imgur.com/QTAePgC.jpeg](https://i.imgur.com/QTAePgC.jpeg)" alt="LINE QR" className="w-32 h-32 sm:w-48 sm:h-48 object-contain" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black bg-white px-2 mb-2 tracking-tighter">台灣校務辦公室</h3>
            <p className="font-black text-lg sm:text-xl mb-6 bg-black text-white px-2 tracking-widest">+886 982 815 234</p>
            <a href="[https://line.me/R/ti/p/@+886982815234](https://line.me/R/ti/p/@+886982815234)" target="_blank" rel="noopener noreferrer" className="w-full bg-[#06C755] border-4 border-black text-white py-3 sm:py-4 font-black text-lg sm:text-xl hover:bg-black text-center transition-colors uppercase">加 LINE 好友 !</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// 9. 頁腳
function Footer() {
  return (
    <footer className="bg-black text-white py-12 sm:py-20 text-center border-t-8 border-yellow-400 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="bg-white p-3 sm:p-4 border-4 border-black comic-shadow transform -rotate-6 mb-8 inline-block">
            <GraduationCap className="text-black" size={36} />
        </div>
        <h3 className="font-black text-2xl sm:text-3xl mb-4 text-yellow-400 uppercase tracking-widest">Taiwan 3+4 Project</h3>
        <div className="h-1 w-16 bg-gray-800 my-6 sm:my-8 mx-auto"></div>
        <p className="text-base sm:text-lg font-bold text-gray-400 leading-relaxed max-w-2xl px-4">
          本平台僅供馬來西亞 SPM 畢業生赴台就讀諮詢。<br/>
          具體學制與補助政策依台灣僑務委員會（OCAC）最新公告為準。
        </p>
        <p className="text-xs sm:text-sm font-black text-yellow-600 mt-10 sm:mt-12 tracking-widest uppercase">&copy; {new Date().getFullYear()} TAIWAN 3+4 PROGRAM. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
