import { useState } from "react";
import SchoolModal from "./SchoolModal";
import { FadeInUp as AnimatedSection } from "./AnimatedSection";
import { Badge } from "./shared";
import lhvsLogo from "../assets/lhvs.png";
import sghsLogo from "../assets/sghs.png";
import ytvsLogo from "../assets/ytvs.png";
import hdvsLogo from "../assets/hdvs.png";

const LOGOS = {
  lhvs: lhvsLogo,
  sghs: sghsLogo,
  ytvs: ytvsLogo,
  hdvs: hdvsLogo,
};

const schools = [
  {
    name: "六信高中",
    loc: "台南市",
    majors: ["資訊科", "烘焙科"],
    color: "bg-red-400",
    panelColor: "bg-cyan-300",
    logo: LOGOS.lhvs,
    badge: "南台灣口碑",
    link: "https://www.lhvs.tn.edu.tw/",
    highlights: [
      { icon: "🏫", text: "南台灣口碑名校，創校近 70 年，校風嚴謹" },
      { icon: "💰", text: "第一志願入學贈「物品抵用券」，全額折抵制服與寢具費用" },
      { icon: "📜", text: "通過華測（TOCFL）分級，最高可領取 4,000 元獎學金" },
    ],
  },
  {
    name: "新光高中",
    loc: "高雄市",
    majors: ["資訊科"],
    color: "bg-blue-400",
    panelColor: "bg-slate-200",
    logo: LOGOS.sghs,
    badge: "住宿全免",
    link: "https://sg.sgshedu.tw/",
    highlights: [
      { icon: "💰", text: "住宿費全免，每月僅需負擔水電費約 300 元" },
      { icon: "⚙️", text: "直升正修科技大學電機工程系，南台灣工程界名氣響亮" },
      { icon: "💵", text: "學費政府全額補助，實習津貼每月至少 NT$ 28,590 起" },
      { icon: "🚉", text: "近後庄火車站，校內設僑生輔導老師協助居留、健保及職場適應" },
    ],
  },
  {
    name: "育德工家",
    loc: "台南市",
    majors: ["烘焙科", "餐飲科"],
    color: "bg-green-400",
    panelColor: "bg-lime-200",
    logo: LOGOS.ytvs,
    badge: "直升名校",
    link: "https://ytvs.tn.edu.tw/",
    highlights: [
      { icon: "🎓", text: "直升南臺科大，私立科大排名前茅，學歷含金量高" },
      { icon: "🏘️", text: "4 人房宿舍每學期 12,500 元，專責老師管理生活起居" },
      { icon: "👨‍🍳", text: "學校本身即為國家檢定考場，原場地練習、原場地考照，取證率高" },
      { icon: "💰", text: "3 年學費全免，入學費用透明，每月享 NT$ 28,590 以上法定實習津貼" },
    ],
  },
  {
    name: "華德工家",
    loc: "高雄市",
    majors: ["資訊科", "烘焙科", "餐飲科"],
    color: "bg-purple-400",
    panelColor: "bg-violet-200",
    logo: LOGOS.hdvs,
    badge: "設施最完善",
    link: "https://www.hdvs.kh.edu.tw/",
    highlights: [
      { icon: "🎓", text: "畢業可直升龍華科大或元培醫大，升學地圖最廣" },
      { icon: "🏘️", text: "宿舍附冷氣、Wi-Fi、冰箱、微波爐、電鍋、烘乾機，技高宿舍頂配" },
      { icon: "🛣️", text: "位於高雄茄萣區，鄰近省道，校方協助媒合優質實習廠商" },
      { icon: "💰", text: "學費全免、津貼符合勞基法（NT$ 28,590 起），享勞健保保障" },
    ],
  },
];

export default function SchoolsSection() {
  const [selectedSchool, setSelectedSchool] = useState(null);

  const openSchoolModal = (school) => setSelectedSchool(school);

  const handleCardKeyDown = (event, school) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openSchoolModal(school);
    }
  };

  return (
    <AnimatedSection>
      <section
        id="schools"
        className="py-24 bg-yellow-300 border-b-8 border-black px-4 relative halftone-bg text-black"
        aria-labelledby="schools-heading"
      >
        <div className="max-w-7xl mx-auto">
          <h2
            id="schools-heading"
            className="text-4xl sm:text-6xl font-black bg-black text-white border-4 border-white inline-block px-8 py-4 comic-shadow transform rotate-1 uppercase mb-12"
          >
            精選名校探索
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-black">
            {schools.map((s) => (
              <article
                key={s.name}
                className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-4 hover:rotate-1 transition-all relative cursor-pointer group"
                onClick={() => openSchoolModal(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => handleCardKeyDown(event, s)}
                aria-label={`查看 ${s.name} 詳細資訊`}
                aria-haspopup="dialog"
              >
                <Badge text={s.badge} color={s.color} />
                <div
                  className={`h-32 ${s.panelColor} border-b-4 border-black flex items-center justify-center overflow-hidden transition-transform group-hover:scale-110`}
                  aria-hidden="true"
                >
                  <img
                    src={s.logo}
                    alt={`${s.name}校徽`}
                    className="h-24 w-24 object-contain drop-shadow-[0_4px_0_rgba(0,0,0,0.28)]"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-black text-2xl mb-1 text-black underline decoration-4 tracking-tighter">{s.name}</h3>
                  <p className="font-bold text-sm mb-6 italic text-black">台灣 {s.loc}</p>
                  <ul className="space-y-2 mb-4" aria-label={`${s.name} 科系`}>
                    {s.majors.map((m) => (
                      <li key={m} className="bg-black text-white px-3 py-1 font-bold text-sm inline-block mr-2 mb-1">
                        #{m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-0 border-t-4 border-black bg-black">
                  <div className="px-4 py-5 text-center text-white font-black tracking-wide">
                    <span className="inline-block bg-yellow-300 text-black border-2 border-black px-3 py-1 text-sm mb-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                      精選
                    </span>
                    <span className="flex items-center justify-center gap-2 text-lg group-hover:gap-4 transition-all">
                      查看學校亮點
                      <span aria-hidden="true">✦</span>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selectedSchool && (
        <SchoolModal school={selectedSchool} onClose={() => setSelectedSchool(null)} />
      )}
    </AnimatedSection>
  );
}
