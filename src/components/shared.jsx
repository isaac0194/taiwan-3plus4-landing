// 共用 UI 元件

export const IconZap = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    className="text-red-600 fill-yellow-400"
    aria-hidden="true"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const IconChevron = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="3"
    className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
    aria-hidden="true"
  >
    <path d="M19 9l-7 7-7-7" />
  </svg>
);

export const Badge = ({ text, color = 'bg-red-500' }) => (
  <div
    className={`absolute -top-4 -right-4 ${color} text-white font-black px-3 py-1 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-6 z-10 text-sm animate-bounce uppercase`}
    aria-label={text}
  >
    {text}
  </div>
);
