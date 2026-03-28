export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 text-center border-t-8 border-yellow-400" role="contentinfo">
      <h3 className="font-black text-4xl text-yellow-400 mb-8 italic tracking-tighter uppercase">
        TAIWAN 3+4 PROGRAM
      </h3>
      <div className="max-w-4xl mx-auto px-4 opacity-70 font-bold mb-10 leading-relaxed text-sm">
        本平台僅供赴台就讀諮詢使用。具體學制、補助金額及實習規範，<br />
        請以台灣僑務委員會（OCAC）最新公告之簡章規範為準。
      </div>
      <p className="text-xs text-gray-500 uppercase font-black tracking-widest">
        &copy; 2026 OFFICIAL PORTAL. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
