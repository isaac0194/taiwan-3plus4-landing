import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative pt-40 pb-24 bg-cyan-400 border-b-8 border-black overflow-hidden px-4 text-center comic-bg"
      aria-label="頁面主視覺"
    >
      <div className="absolute top-10 left-10 opacity-20 halftone-bg w-40 h-40 rounded-full" aria-hidden="true"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30, rotate: -4 }}
          animate={{ opacity: 1, y: 0, rotate: -2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-block bg-white border-4 border-black px-6 py-2 text-xl font-black mb-10 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transform -rotate-2"
        >
          <span aria-hidden="true">📢</span>{' '}
          <span className="text-red-600 underline text-black">2026 NEWS:</span> 馬來西亞專區招生正式啟動
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, type: 'spring', stiffness: 120 }}
          className="text-6xl sm:text-8xl md:text-9xl font-black leading-tight text-stroke uppercase transform -rotate-1 mb-14 tracking-tighter text-white"
        >
          SPM 後的<br />
          <span className="text-yellow-400 italic">華麗轉身</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="bg-white border-4 border-black comic-shadow p-8 max-w-3xl mx-auto transform rotate-1 hover:rotate-0 transition-transform text-black font-bold"
        >
          <p className="text-xl sm:text-3xl font-black leading-relaxed">
            台灣官方正式認證「3年高中+4年大學」計畫<br />
            <span className="bg-yellow-300 px-4 inline-block mt-4 border-4 border-black border-dashed italic">
              免學費、領津貼、拿正規大學學位！
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
