# 台灣人力仲介網站

專業的南部人力仲介服務網站，提供看護工和工廠移工媒合服務。

## 技術架構

- **前端框架**: Next.js 15.4 + React 19
- **CMS**: Payload CMS 3.78
- **資料庫**: MongoDB
- **樣式**: CSS Modules + CSS Variables
- **部署**: Railway

## 功能特色

- ✅ 響應式設計（桌面、平板、手機）
- ✅ 專業商務風格設計
- ✅ Payload CMS 後台管理
- ✅ SEO 優化
- ✅ 快速載入速度

## 本地開發

1. 安裝依賴：
```bash
npm install
```

2. 複製環境變數：
```bash
cp .env.example .env
```

3. 啟動開發伺服器：
```bash
npm run dev
```

4. 開啟瀏覽器訪問：
- 前台：http://localhost:3000
- CMS 後台：http://localhost:3000/admin

## 建置

```bash
npm run build
npm start
```

## 目錄結構

```
taiwan-labor-agency/
├── app/              # Next.js App Router 頁面
├── components/       # React 組件
├── lib/              # 工具函數與配置
├── public/           # 靜態資源
└── payload.config.ts # Payload CMS 配置
```

## 服務項目

- 看護工仲介（居家、醫院、長照機構）
- 工廠移工仲介（製造業、食品加工、紡織業）

## 服務區域

高雄市、台南市、屏東縣、嘉義地區

## 聯絡資訊

- 電話：(07) 1234-5678
- Email: info@southlabor.com.tw
- 地址：高雄市前鎮區中山三路 123 號

## License

ISC
