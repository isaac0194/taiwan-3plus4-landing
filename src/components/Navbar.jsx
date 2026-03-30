import { IconZap } from './shared';

const navItems = [
  { href: '#finance', label: '財務分析' },
  { href: '#schools', label: '合作學校' },
  { href: '#news', label: '媒體報導' },
  { href: '#timeline', label: '報名時程' },
];

export default function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 bg-yellow-400 border-b-4 border-black z-50 h-20 flex items-center shadow-lg"
      role="navigation"
      aria-label="主要導航"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex justify-between items-center font-black">
        <a href="#" className="flex items-center gap-2 cursor-pointer" aria-label="Taiwan 3+4 首頁">
          <div className="bg-white border-4 border-black p-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-6">
            <IconZap />
          </div>
          <span className="text-2xl sm:text-3xl tracking-tighter italic uppercase">Taiwan 3+4</span>
        </a>
        <div className="hidden lg:flex gap-3 text-black items-center" role="list">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="bg-white border-4 border-black px-4 py-2 text-base leading-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-yellow-300 hover:-translate-y-1 transition-all focus:outline-none focus:ring-4 focus:ring-black"
              role="listitem"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-red-600 text-white border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 transition-all active:scale-95 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-black"
          aria-label="立即報名諮詢"
        >
          立即報名
        </a>
      </div>
    </nav>
  );
}
