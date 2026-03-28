# Taiwan 3+4 產學專班 Landing Page

台灣官方認證「3年高中 + 4年大學」產學專班計畫的招生宣傳頁，專為馬來西亞 SPM 生設計。

🔗 **Live Site**: https://taiwan-3plus4-landing.vercel.app

---

## 技術棧

| 工具 | 版本 | 用途 |
|------|------|------|
| React | 18.2 | UI 框架 |
| Vite | 5.1 | 建構工具 |
| Tailwind CSS | 3.4 | 樣式 |
| Chart.js + react-chartjs-2 | latest | 財務比較圖表 |
| Lucide React | latest | 圖示 |

---

## 快速開始

```bash
# 安裝依賴
npm install

# 本地開發（http://localhost:5173）
npm run dev

# 正式建構
npm run build

# 預覽建構結果
npm run preview
```

---

## 專案結構

```
taiwan-3plus4-landing/
├── index.html                # HTML 入口（含 SEO meta tags、OG tags）
├── src/
│   ├── App.jsx               # 根元件（lazy load 非首屏元件）
│   ├── main.jsx              # React 入口
│   ├── index.css             # Tailwind 指令 + 全域樣式
│   └── components/
│       ├── shared.jsx        # 共用元件（IconZap, IconChevron, Badge）
│       ├── Navbar.jsx        # 固定頂部導航
│       ├── HeroSection.jsx   # 主視覺區塊
│       ├── FinanceSection.jsx # 財務比較圖表
│       ├── FeaturesSection.jsx # 三大特色
│       ├── SchoolsSection.jsx # 合作學校
│       ├── NewsSection.jsx   # 媒體報導
│       ├── TimelineSection.jsx # 報名時程
│       ├── ContactSection.jsx # 聯繫資訊
│       └── Footer.jsx        # 頁腳
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

---

## 部署

專案透過 **Vercel** 自動部署。推送至 `main` 分支即自動觸發部署。

```bash
git push origin main
```

---

## SEO

- Meta description、keywords、canonical URL
- Open Graph tags（支援 LINE / Facebook 分享預覽）
- Twitter Card
- JSON-LD Structured Data（EducationalOrganization schema）
- Google Fonts 使用 `font-display: swap` 避免 FOIT

## 無障礙性（Accessibility）

- 所有互動元素有 `aria-label`
- Timeline 使用 `aria-expanded` / `aria-controls` / `role="region"`
- 跑馬燈提供 `.sr-only` 靜態替代文字
- 圖片含有描述性 `alt` 屬性
- 跳至主要內容連結（Skip link）供鍵盤使用者使用
- `:focus-visible` 視覺指示

## 效能

- 非首屏元件（FinanceSection、SchoolsSection 等）使用 `React.lazy` + `Suspense` 延遲載入
- 字體在 `index.html` 中使用 `<link rel="preconnect">` 預連接
- `font-display: swap` 防止字體載入時頁面空白
