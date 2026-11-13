# 安居科技驗屋｜安居科技有限公司 官方網站專案

這是一套專為位於台中地區的 **「安居科技驗屋（安居科技有限公司）」** 量身打造的高規格、響應式（RWD）官方網站。網站設計與內容參考了台灣與台中頂尖驗屋機構（如鴻宇健康驗屋、樂居驗屋、成家驗屋等）之高水準配置，並符合公平交易委員會對驗屋證照廣告之真實性規範。

---

## 📂 專案檔案結構

- [index.html](file:///c:/Users/user/Desktop/goodlive/index.html)：官網主頁面（含台中在地 SEO 結構化資料 JSON-LD、12 大區塊完整內容）。
- [styles.css](file:///c:/Users/user/Desktop/goodlive/styles.css)：瑞士建築精密科技風（Swiss Architectural Precision）視覺設計與手機/平板/電腦響應式樣式表。
- [app.js](file:///c:/Users/user/Desktop/goodlive/app.js)：互動功能核心（12 大檢驗儀器分類篩選、四大系統 120+ 細項切換、即時驗屋費用試算器、案例分享渲染、一鍵產生 LINE 預約單）。
- `assets/`：專為安居科技生成之高畫質商業攝影視覺圖檔：
  - [hero-inspection.jpg](file:///c:/Users/user/Desktop/goodlive/assets/hero-inspection.jpg)：首頁主視覺（工程師手持紅外線熱像儀與平板於新成屋實測）。
  - [instruments-showcase.jpg](file:///c:/Users/user/Desktop/goodlive/assets/instruments-showcase.jpg)：精密科學檢驗儀器陣列展示圖。
  - [thermal-demo.jpg](file:///c:/Users/user/Desktop/goodlive/assets/thermal-demo.jpg)：紅外線熱像儀捕捉窗框角落低溫微滲水對照圖。

---

## 🚀 如何開啟與預覽網站

本網站採用零框架負擔之現代化標準 HTML5 / CSS3 / ES6 架構，**直接雙擊點開 `index.html` 即可在任何瀏覽器完整操作所有互動功能**，亦可直接部署至任何雲端主機（GitHub Pages、Vercel、Netlify、中華電信虛擬主機等）。

---

## 🛠️ 日後快速修改指南（給業主）

1. **修改公司電話、LINE ID、信箱與地址**：
   打開 [app.js](file:///c:/Users/user/Desktop/goodlive/app.js#L4-L16) 最上方的 `COMPANY_CONFIG` 與 [index.html](file:///c:/Users/user/Desktop/goodlive/index.html) 聯絡區塊，即可隨時將目前的虛擬示範聯絡資料替換為貴司實際申請的電話、LINE 官方帳號、信箱與地址。
2. **新增真實「案例分享」**：
   打開 [app.js](file:///c:/Users/user/Desktop/goodlive/app.js#L168-L202) 的 `CASES_DATA` 陣列，目前我們已為您配置了 **「首波榮譽屋主案例授權折抵 $1,000 募集橫幅」** 以及 **3 則「標準檢測示範樣本」**，當您累積第一批台中客戶案例後，只需修改該陣列文字即可無縫上線。
3. **調整收費標準與折扣**：
   打開 [app.js](file:///c:/Users/user/Desktop/goodlive/app.js#L207-L287) 的 `computePricing()` 函式與 [index.html](file:///c:/Users/user/Desktop/goodlive/index.html#L483-L578) 的收費表，即可隨時微調各坪數級距定價。
