import { SlideIn, FadeInUp } from './AnimatedSection';

const newsList = [
  {
    title: '台南育德工家學生展現專業實力 勇奪「印前製程乙級」證照',
    source: '太平洋新聞網',
    link: 'http://www.pacificnews.com.tw/shownews.php?postnewsid=17&titleid=3439',
    color: 'bg-blue-400',
  },
  {
    title: '育德工家推無人機訓練計畫搶進科技藍海',
    source: 'LINE TODAY',
    link: 'https://today.line.me/tw/v3/article/LXv03Jj?utm_source=lineshare',
    color: 'bg-red-400',
  },
];

export default function NewsSection() {
  return (
    <section id="news" className="py-24 border-b-8 border-black bg-white px-4 relative" aria-labelledby="news-heading">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2
            id="news-heading"
            className="text-4xl sm:text-6xl font-black text-stroke text-center mb-16 transform -rotate-1 uppercase tracking-tighter text-yellow-400"
          >
            媒體報導新聞
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-2 gap-8 text-left text-black">
          {newsList.map((item, i) => (
            <SlideIn key={item.title} from={i % 2 === 0 ? 'left' : 'right'} delay={i * 0.1}>
              <article className="group relative h-full">
                <div
                  className={`absolute inset-0 ${item.color} border-4 border-black comic-shadow transform rotate-1 group-hover:rotate-0 transition-transform`}
                  aria-hidden="true"
                ></div>
                <div className="relative bg-white border-4 border-black p-8 flex flex-col h-full transform -rotate-1 group-hover:rotate-0 transition-transform">
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase tracking-tighter">
                      {item.source}
                    </span>
                    <span className="text-slate-400 text-xs font-black italic" aria-label="已驗證文章">VERIFIED</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-black leading-tight mb-6 flex-grow">{item.title}</h3>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-red-600 font-black text-lg hover:underline underline-offset-4 focus:outline-none focus:ring-2 focus:ring-red-600"
                    aria-label={`閱讀完整文章：${item.title}（新視窗開啟）`}
                  >
                    READ ARTICLE ➔
                  </a>
                </div>
              </article>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
