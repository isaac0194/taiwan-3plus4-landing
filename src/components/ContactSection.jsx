import { FadeInUp, PopIn } from './AnimatedSection';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-cyan-400 border-b-8 border-black halftone-bg px-4 text-center text-black"
      aria-labelledby="contact-heading"
    >
      <FadeInUp>
        <div className="inline-block bg-white border-4 border-black p-8 comic-shadow mb-20 transform -rotate-1">
          <h2
            id="contact-heading"
            className="text-4xl sm:text-7xl font-black text-stroke uppercase tracking-tighter text-yellow-400 text-black"
          >
            聯繫駐地代表諮詢
          </h2>
          <p className="mt-4 font-black text-2xl">夢想不等人，2026 年度名額有限！</p>
        </div>
      </FadeInUp>
      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <PopIn delay={0.1}>
          <div className="bg-green-400 border-4 border-black p-10 comic-shadow transform hover:rotate-2 transition-transform group text-black h-full">
            <img
              src="https://i.imgur.com/YdXztNr.png"
              alt="WhatsApp QR Code - 掃碼聯繫馬來西亞代表"
              className="w-48 h-48 mx-auto border-8 border-black mb-8 bg-white group-hover:scale-105 transition-transform"
              width="192"
              height="192"
            />
            <h3 className="text-3xl font-black mb-2 text-black underline tracking-tight italic">馬來西亞代表</h3>
            <p className="font-black bg-black text-white text-2xl inline-block px-4 py-1 mb-8 tracking-widest">
              +63 998 919 5808
            </p>
            <a
              href="https://wa.me/639989195808"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-4 border-black py-4 font-black text-2xl hover:bg-yellow-400 transition-all uppercase flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-black"
              aria-label="透過 WhatsApp 聯繫馬來西亞代表（新視窗開啟）"
            >
              WhatsApp 直接對話
            </a>
          </div>
        </PopIn>

        <PopIn delay={0.25}>
          <div className="bg-blue-400 border-4 border-black p-10 comic-shadow transform hover:-rotate-2 transition-transform group text-black h-full">
            <img
              src="https://i.imgur.com/QTAePgC.jpeg"
              alt="LINE QR Code - 掃碼加台灣校務辦公室好友"
              className="w-48 h-48 mx-auto border-8 border-black mb-8 bg-white group-hover:scale-105 transition-transform"
              width="192"
              height="192"
            />
            <h3 className="text-3xl font-black mb-2 text-black underline tracking-tight italic">台灣校務辦公室</h3>
            <p className="font-black bg-black text-white text-2xl inline-block px-4 py-1 mb-8 tracking-widest">
              +886 982 815 234
            </p>
            <a
              href="https://line.me/ti/p/~+886982815234"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#06C755] text-white border-4 border-black py-4 font-black text-2xl hover:bg-black transition-all uppercase tracking-widest flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-black"
              aria-label="透過 LINE 聯繫台灣校務辦公室（新視窗開啟）"
            >
              加 LINE 好友 <span aria-hidden="true">📱</span>
            </a>
          </div>
        </PopIn>
      </div>
    </section>
  );
}
