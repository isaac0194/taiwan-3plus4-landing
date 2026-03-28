import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Badge } from './shared';
import { FadeInUp, SlideIn } from './AnimatedSection';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const chartOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { backgroundColor: '#000', padding: 12 },
  },
  scales: {
    x: { grid: { color: '#000' }, ticks: { font: { weight: 'bold' } } },
    y: { grid: { display: false }, ticks: { font: { weight: 'bold', size: 14 } } },
  },
};

const chartData = {
  labels: ['一般私大', '一般國大', '3+4 專班'],
  datasets: [
    {
      data: [-120000, -80000, 45000],
      backgroundColor: ['#f43f5e', '#fbbf24', '#22c55e'],
      borderColor: '#000',
      borderWidth: 4,
    },
  ],
};

export default function FinanceSection() {
  return (
    <section id="finance" className="py-24 border-b-8 border-black bg-white px-4" aria-labelledby="finance-heading">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInUp>
          <h2
            id="finance-heading"
            className="text-4xl sm:text-6xl font-black text-stroke text-center mb-16 transform -rotate-1 uppercase tracking-tighter text-yellow-400"
          >
            數據說話！為什麼選我們？
          </h2>
        </FadeInUp>
        <SlideIn from="left">
          <div className="bg-slate-50 border-4 border-black p-6 sm:p-12 comic-shadow relative group text-black">
            <Badge text="省錢首選!" color="bg-green-500" />
            <div className="h-80 w-full" role="img" aria-label="財務比較圖表：3+4專班預計可帶回 RM 45,000 啟動金，一般私大費用約 RM 120,000，一般國大費用約 RM 80,000">
              <Bar options={chartOptions} data={chartData} />
            </div>
            <div className="mt-10 p-6 bg-yellow-100 border-4 border-black border-dashed font-black text-lg text-center">
              <span aria-hidden="true">💡</span> 實習津貼結餘：畢業後預計可帶回約{' '}
              <strong className="text-red-600 text-3xl font-black">RM 45,000</strong> 的啟動金！
            </div>
          </div>
        </SlideIn>
      </div>
    </section>
  );
}
