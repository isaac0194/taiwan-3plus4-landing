import { Badge } from './shared';

const schools = [
  {
    name: '六信高中',
    loc: '台南',
    majors: ['資訊科', '烘焙科'],
    color: 'bg-red-400',
    emoji: '🤖',
    badge: '百年名校',
    link: 'https://www.lhvs.tn.edu.tw/index.php?option=module&lang=cht&task=showlist&id=105&index=5',
  },
  {
    name: '新光高中',
    loc: '高雄',
    majors: ['資訊科'],
    color: 'bg-blue-400',
    emoji: '💻',
    badge: '設備新穎',
    link: 'https://sg.sgshedu.tw/',
  },
  {
    name: '育德工家',
    loc: '台南',
    majors: ['烘焙科', '餐飲科'],
    color: 'bg-green-400',
    emoji: '🍞',
    badge: '就業保證',
    link: 'https://sites.google.com/ytvs.tn.edu.tw/ytvs204c',
  },
  {
    name: '華德工家',
    loc: '高雄',
    majors: ['資訊科', '烘焙科', '餐飲科'],
    color: 'bg-purple-400',
    emoji: '👨‍🍳',
    badge: '照顧第一',
    link: 'https://www.hdvs.kh.edu.tw/?.p=Hrpp',
  },
];

export default function SchoolsSection() {
  return (
    <section
      id="schools"
      className="py-24 bg-yellow-300 border-b-8 border-black px-4 relative halftone-bg text-black"
      aria-labelledby="schools-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="schools-heading"
          className="text-4xl sm:text-6xl font-black bg-black text-white border-4 border-white inline-block px-8 py-4 comic-shadow transform rotate-1 uppercase mb-20 tracking-tighter"
        >
          精選名校探索
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-black">
          {schools.map((s) => (
            <article
              key={s.name}
              className="bg-white border-4 border-black comic-shadow flex flex-col h-full transform hover:-translate-y-4 hover:rotate-1 transition-all relative group"
            >
              <Badge text={s.badge} color={s.color} />
              <div
                className={`h-32 ${s.color} border-b-4 border-black flex items-center justify-center text-7xl group-hover:scale-110 transition-transform`}
                aria-hidden="true"
              >
                {s.emoji}
              </div>
              <div className="p-6 flex-grow">
                <h3 className="font-black text-2xl mb-1 text-black underline decoration-4 tracking-tighter">{s.name}</h3>
                <p className="font-bold text-sm text-slate-500 mb-6 flex items-center gap-1 italic text-black">
                  <span aria-hidden="true">📍</span> 基地位置: 台灣 {s.loc}
                </p>
                <ul className="space-y-2 mb-4" aria-label={`${s.name} 科系`}>
                  {s.majors.map((m) => (
                    <li
                      key={m}
                      className="inline-block w-full text-center font-black bg-slate-100 border-2 border-black py-1 px-2 text-sm hover:bg-yellow-200 transition-colors tracking-widest text-black"
                    >
                      #{m}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white text-center py-4 font-black uppercase text-sm hover:bg-red-600 transition-colors tracking-widest flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-yellow-400"
                aria-label={`前往 ${s.name} 官網（新視窗開啟）`}
              >
                進入官網 ➔
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
