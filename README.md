# 竹南勝利堂官方網站

🙏 歡迎來到竹南勝利堂官方網站項目！

## 📖 項目簡介

這是竹南勝利堂（Victory Church）的官方網站，採用現代化技術構建，提供以下功能：

### ✨ 主要功能

- **首頁展示** - 教會介紹、聚會時間、交通資訊
- **最新消息** - 發佈教會動態、活動資訊
- **小組生活** - 展示各個小組的聚會信息
- **新朋友專區** - 為初次訪客提供完整資訊
- **線上奉獻** - 銀行轉帳和台灣 Pay 支付方式
- **聯繫我們** - 訪客可直接提交聯繫表單
- **代禱事項** - 訪客可提交代禱需求
- **活動報名** - 線上活動報名功能
- **互動地圖** - Google 地圖顯示教會位置

---

## 🛠️ 技術棧

本項目使用以下技術構建：

| 技術 | 用途 |
|------|------|
| **React 19** | 前端框架 |
| **Tailwind CSS 4** | 樣式設計 |
| **TypeScript** | 程式語言 |
| **Express 4** | 後端框架 |
| **tRPC 11** | API 通信 |
| **MySQL/TiDB** | 資料庫 |
| **Drizzle ORM** | 資料庫操作 |
| **Vite** | 構建工具 |

---

## 📁 項目結構

```
chunan-victory-church/
├── client/                    # 前端代碼
│   ├── src/
│   │   ├── pages/            # 頁面組件
│   │   │   ├── Home.tsx      # 首頁
│   │   │   ├── News.tsx      # 最新消息
│   │   │   ├── Groups.tsx    # 小組生活
│   │   │   ├── NewHere.tsx   # 新朋友專區
│   │   │   ├── Contact.tsx   # 聯繫我們
│   │   │   └── ...
│   │   ├── components/       # 可重用組件
│   │   ├── lib/              # 工具函數
│   │   └── App.tsx           # 主應用
│   └── public/               # 靜態資源
│       └── images/           # 圖片文件夾
│
├── server/                    # 後端代碼
│   ├── routers.ts            # API 路由
│   ├── db.ts                 # 資料庫操作
│   └── storage.ts            # 文件存儲
│
├── drizzle/                   # 資料庫配置
│   └── schema.ts             # 資料庫表定義
│
├── GITHUB_UPLOAD_GUIDE.md    # GitHub 上傳手冊
├── WEBSITE_MAINTENANCE_GUIDE.md # 網站維護手冊
├── .env.example              # 環境變數模板
└── package.json              # 項目依賴

```

---

## 🚀 快速開始

### 前置要求

- Node.js 18+ 
- pnpm 或 npm
- MySQL 資料庫

### 安裝步驟

1. **克隆項目**
   ```bash
   git clone https://github.com/your-username/chunan-victory-church.git
   cd chunan-victory-church
   ```

2. **安裝依賴**
   ```bash
   pnpm install
   # 或使用 npm
   npm install
   ```

3. **配置環境變數**
   ```bash
   cp .env.example .env
   # 編輯 .env 文件，填入您的配置信息
   ```

4. **初始化資料庫**
   ```bash
   pnpm db:push
   ```

5. **啟動開發服務器**
   ```bash
   pnpm dev
   ```

6. **訪問網站**
   - 打開瀏覽器，訪問 `http://localhost:3000`

---

## 📝 環境變數配置

複製 `.env.example` 為 `.env`，然後填入以下信息：

```env
# 資料庫
DATABASE_URL=mysql://user:password@localhost:3306/church_db

# 認證
JWT_SECRET=your_secret_key_here

# OAuth 配置
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=https://portal.manus.im

# API 密鑰
BUILT_IN_FORGE_API_KEY=your_api_key
VITE_FRONTEND_FORGE_API_KEY=your_frontend_key

# 應用信息
VITE_APP_TITLE=竹南勝利堂
VITE_APP_LOGO=/logo.png
```

詳見 `.env.example` 文件。

---

## 📖 使用指南

### 修改網站內容

詳細的網站維護指南，請參考 **[WEBSITE_MAINTENANCE_GUIDE.md](./WEBSITE_MAINTENANCE_GUIDE.md)**

主要操作：
- 修改最新消息
- 上傳和更換圖片
- 更新教會資訊

### 上傳到 GitHub

詳細的 GitHub 上傳步驟，請參考 **[GITHUB_UPLOAD_GUIDE.md](./GITHUB_UPLOAD_GUIDE.md)**

---

## 🧪 測試

運行單元測試：

```bash
pnpm test
```

---

## 📦 構建生產版本

```bash
pnpm build
```

構建後的文件位於 `dist/` 文件夾。

---

## 🌐 部署

### 在 Cloudflare 上部署

1. 登入 Cloudflare 帳號
2. 創建新的 Pages 項目
3. 連接您的 GitHub 倉庫
4. 配置構建設置：
   - Build command: `pnpm build`
   - Build output directory: `dist`
5. 部署完成

### 在其他平台部署

支持部署到：
- Vercel
- Netlify
- Railway
- Render

---

## 📚 文件說明

| 文件 | 說明 |
|------|------|
| `GITHUB_UPLOAD_GUIDE.md` | 完全零基礎的 GitHub 上傳手冊 |
| `WEBSITE_MAINTENANCE_GUIDE.md` | 網站內容維護手冊 |
| `.env.example` | 環境變數配置模板 |
| `package.json` | 項目依賴和腳本 |
| `drizzle.config.ts` | 資料庫配置 |

---

## 🔒 安全性

### 敏感信息保護

- ✅ `.env` 文件已在 `.gitignore` 中（不會上傳到 GitHub）
- ✅ API 密鑰存儲在環境變數中
- ✅ 資料庫密碼不在代碼中
- ✅ 所有敏感操作在後端進行

### 數據隱私

- 訪客提交的表單數據存儲在資料庫中
- 只有授權人員可以訪問
- 遵守相關隱私法規

---

## 🤝 貢獻

如果您想為項目做出貢獻：

1. Fork 本倉庫
2. 創建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

---

## 📞 聯繫方式

- 📧 郵箱：contact@example.com
- 📱 電話：(037) 123-4567
- 🌐 網站：https://chunan-victory-church.com
- 📍 地址：350 苗栗縣竹南鎮延平路 31 號

---

## 📄 許可證

本項目採用 MIT 許可證。詳見 [LICENSE](./LICENSE) 文件。

---

## 🙏 致謝

感謝所有為這個項目做出貢獻的人！

---

## 📋 更新日誌

### v1.0.0 (2026-01-30)
- ✨ 初版發佈
- 🎨 完整的首頁設計
- 📰 最新消息功能
- 👥 小組生活展示
- 🗺️ 互動地圖集成
- 💝 線上奉獻功能
- 📧 聯繫表單和代禱功能

---

## 🎯 未來計劃

- [ ] 線上課程功能
- [ ] 會眾管理系統
- [ ] 奉獻統計儀表板
- [ ] 多語言支持
- [ ] 移動應用

---

**祝您使用愉快！** 🙏

如有任何問題或建議，歡迎聯繫我們。
