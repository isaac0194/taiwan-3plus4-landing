import { useEffect } from 'react';

export default function SchoolModal({ school, onClose }) {
  // ESC 關閉
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* 背景遮罩 */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal 主體 */}
      <div className="relative bg-white border-4 border-black comic-shadow max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className={`${school.color} border-b-4 border-black p-6 flex items-center justify-between`}>
          <div className="flex items-center gap-4">
            <span className="text-5xl" aria-hidden="true">{school.emoji}</span>
            <div>
              <h2 id="modal-title" className="text-3xl font-black text-black tracking-tight">{school.name}</h2>
              <p className="font-bold text-black/70">📍 台灣 {school.loc}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bg-black text-white w-10 h-10 flex items-center justify-center font-black text-xl hover:bg-red-600 transition-colors focus:outline-none focus:ring-4 focus:ring-white"
            aria-label="關閉彈窗"
          >
            ✕
          </button>
        </div>

        {/* 科系 */}
        <div className="p-6 border-b-4 border-black border-dashed">
          <h3 className="font-black text-lg mb-3 uppercase tracking-widest">開設科系</h3>
          <div className="flex flex-wrap gap-2">
            {school.majors.map((m) => (
              <span key={m} className="bg-yellow-300 border-2 border-black px-4 py-1 font-black text-sm tracking-widest">
                #{m}
              </span>
            ))}
          </div>
        </div>

        {/* 學校亮點 */}
        <div className="p-6 border-b-4 border-black border-dashed">
          <h3 className="font-black text-lg mb-4 uppercase tracking-widest">學校亮點</h3>
          <ul className="space-y-3">
            {school.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-3 font-bold text-base leading-relaxed">
                <span className="text-xl mt-0.5" aria-hidden="true">{h.icon}</span>
                <span>{h.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 行動按鈕 */}
        <div className="p-6 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            onClick={onClose}
            className="flex-1 bg-red-600 text-white border-4 border-black py-4 font-black text-center text-lg hover:bg-red-700 transition-colors uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-black"
          >
            立即諮詢報名 🔥
          </a>
          <a
            href={school.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-white border-4 border-black py-4 font-black text-center text-lg hover:bg-slate-100 transition-colors uppercase tracking-widest focus:outline-none focus:ring-4 focus:ring-black"
            aria-label={`前往 ${school.name} 官網（新視窗開啟）`}
          >
            前往官網 ➔
          </a>
        </div>
      </div>
    </div>
  );
}
