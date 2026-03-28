import { useState } from 'react';
import { IconChevron } from './shared';

const steps = [
  { date: '12 - 01月', title: '截止報名', tasks: '完成系統填寫，確認文件清晰無誤。', remind: '1月31日為截止日。SPM可先提預估成績。' },
  { date: '02月', title: '文件初審', tasks: '留意 Email 補件通知。檢查護照效期是否足夠。', remind: '定期檢查垃圾信箱避免錯過重要通知。' },
  { date: '03月', title: '入學面試', tasks: '各校安排視訊或面試學員。展現學習意願。', remind: '' },
  { date: '04月', title: '資格複審', tasks: '官方進行最終學歷與身分審查。', remind: '此階段為後台作業，保持通訊暢通即可。' },
  { date: '05月', title: '錄取公告', tasks: '公佈錄取榜單並寄發錄取通知書袋。', remind: '錄取通知書是辦理簽證必備文件。' },
  { date: '06月', title: '學歷驗證', tasks: '辦理馬國外交部與 TECO 認證。', remind: '程序繁瑣，收到通知後建議即刻預約。' },
  { date: '07月', title: '簽證打包', tasks: '申請居留簽證。依照批次訂購機票。', remind: '打包清單包含常備藥、面試服與家鄉零食。' },
  { date: '08月', title: '赴台啟航', tasks: '8月中下旬抵台。參與新生生活輔導週。', remind: '正式告別家人，迎接獨立生活新篇章。' },
  { date: '09月', title: '正式開學', tasks: '進入高職學習。開始技能訓練與實務實習。', remind: '建立正確的工作倫理與學習態度。' },
];

export default function TimelineSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="timeline" className="py-24 border-b-8 border-black bg-white px-4 text-center" aria-labelledby="timeline-heading">
      <div className="max-w-4xl mx-auto">
        <h2
          id="timeline-heading"
          className="text-4xl sm:text-6xl font-black text-stroke mb-20 uppercase transform rotate-1 tracking-tighter text-yellow-400"
        >
          2026 年度時程地圖
        </h2>
        <div className="grid gap-6 text-left">
          {steps.map((step, i) => {
            const isOpen = active === i;
            return (
              <div
                key={i}
                className={`border-4 border-black comic-shadow transform transition-all ${isOpen ? 'translate-x-4 rotate-1' : ''}`}
              >
                <button
                  onClick={() => setActive(i)}
                  aria-expanded={isOpen}
                  aria-controls={`timeline-content-${i}`}
                  id={`timeline-btn-${i}`}
                  className={`w-full flex items-center justify-between p-6 text-left font-black text-xl sm:text-2xl outline-none focus:ring-4 focus:ring-inset focus:ring-black ${
                    isOpen ? 'bg-purple-600 text-white' : 'bg-white hover:bg-slate-50 text-black'
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="bg-black text-white px-4 py-1 transform -skew-x-12 uppercase font-black">
                      {step.date}
                    </span>
                    {step.title}
                  </span>
                  <IconChevron isOpen={isOpen} />
                </button>
                <div
                  id={`timeline-content-${i}`}
                  role="region"
                  aria-labelledby={`timeline-btn-${i}`}
                  hidden={!isOpen}
                  className="p-8 border-t-4 border-black bg-white grid gap-4 text-xl font-bold leading-relaxed border-dashed text-black"
                >
                  <p><span aria-hidden="true">📝</span> 關鍵任務：{step.tasks}</p>
                  {step.remind && (
                    <p className="text-slate-600 italic"><span aria-hidden="true">🔔</span> 注意事項：{step.remind}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
