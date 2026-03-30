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
    majors: ["電機科", "機械科", "冷凍空調科"],
    color: "bg-red-400",
    logo: LOGOS.lhvs,
    badge: "南台灣口碑",
    link: "https://www.lhvs.tn.edu.tw/",
    highlights: [
      "全額補助學費",
      "住宿補貼",
      "就業保障",
    ],
  },
  {
    name: "新光高中",
    loc: "高雄市",
    majors: ["電機科", "資訊科", "冷凍空調科"],
    color: "bg-blue-400",
    logo: LOGOS.sghs,
    badge: "住宿全免",
    link: "https://sg.sgshedu.tw/",
    highlights: [
      "住宿費全免",
      "企業實習",
      "技術認證",
    ],
  },
  {
    name: "育德工家",
    loc: "台南市",
    majors: ["烘焙科", "餐飲科"],
    color: "bg-green-400",
    logo: LOGOS.ytvs,
    badge: "直升名校",
    link: "https://ytvs.tn.edu.tw/",
    highlights: [
      "直升科大",
      "國際交流",
      "雙師制度",
    ],
  },
  {
    name: "華德工家",
    loc: "高雄市",
    majors: ["資訊科", "電機科", "餐飲科", "美容科"],
    color: "bg-purple-400",
    logo: LOGOS.hdvs,
    badge: "設施最完善",
    link: "https://www.hdvs.kh.edu.tw/",
    highlights: [
      "頂尖設備",
      "多元科系",
      "產業合作",
    ],
  },
];

export default function SchoolsSection() {
  const [selectedSchool, setSelectedSchool] = useState(null);

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
                onClick={() => setSelectedSchool(s)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedSchool(s)}
                aria-label={`查看 ${s.name} 詳細資訊`}
              >
                <Badge text={s.badge} color={s.color} />
                <div
                  className={`h-32 ${s.color} border-b-4 border-black flex items-center justify-center group-hover:scale-110 transition-transform`}
                  aria-hidden="true"
                >
                  <img
                    src={s.logo}
                    alt={`${s.name}校徽`}
                    className="h-20 w-20 object-contain drop-shadow-md"
                  />
                </div>
                <div className="p-6 flex-grow">
                  <h3 className="font-black text-2xl mb-1 text-black underline decoration-4 tracking-tighter">{s.name}</h3>
                  <p className="font-bold text-sm mb-6 flex items-center gap-1 italic text-black">
                    基地位置: 台灣 {s.loc}
                  </p>
                  <ul className="space-y-2 mb-4" aria-label={`${s.name} 科系`}>
                    {s.majors.map((m) => (
                      <li
                        key={m}
                        className="bg-black text-white px-3 py-1 font-bold text-sm inline-block mr-2 mb-1"
                      >
                        #{m}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 border-t-4 border-black">
                  <span className="font-black text-sm flex items-center gap-1 group-hover:gap-3 transition-all">
                    查看學校亮點 <span aria-hidden="true">→</span>
                  </span>
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
