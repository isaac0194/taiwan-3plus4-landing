const features = [
  { icon: '💰', title: '學費全免', desc: '高中三年學費由台灣政府補助，減輕家庭經濟負擔。', color: 'bg-pink-400' },
  { icon: '🛠️', title: '帶薪實習', desc: '產學完美接軌，每月領取實習津貼，支付生活開銷。', color: 'bg-yellow-400' },
  { icon: '🎓', title: '正式學位', desc: '完成七年一貫學程，同時取得正式高職與大學學歷。', color: 'bg-cyan-400' },
];

export default function FeaturesSection() {
  return (
    <section className="py-24 border-b-8 border-black bg-slate-50 px-4" aria-label="計畫三大特色">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center text-black">
        {features.map((f) => (
          <article key={f.title} className={`${f.color} border-4 border-black p-10 comic-shadow transform hover:-translate-y-4 transition-transform`}>
            <div
              className="bg-white border-4 border-black w-20 h-20 flex items-center justify-center mb-6 comic-shadow rounded-full text-4xl mx-auto"
              aria-hidden="true"
            >
              {f.icon}
            </div>
            <h3 className="text-2xl font-black mb-4 bg-white inline-block px-3 border-2 border-black">{f.title}</h3>
            <p className="text-lg font-bold leading-relaxed">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
