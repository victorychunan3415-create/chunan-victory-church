# 竹南勝利堂官方網站 - GitHub 上傳完整指南

## 📋 目錄
1. [準備工作](#準備工作)
2. [第一步：建立 GitHub 帳號](#第一步建立-github-帳號)
3. [第二步：建立新的 Repository](#第二步建立新的-repository)
4. [第三步：下載並準備代碼](#第三步下載並準備代碼)
5. [第四步：上傳代碼到 GitHub](#第四步上傳代碼到-github)
6. [第五步：設置環境變數](#第五步設置環境變數)
7. [常見問題](#常見問題)

---

## 準備工作

在開始之前，請確保您已經準備好：
- 一個可用的電子郵件地址
- 一台可以連接網際網路的電腦
- 大約 15-20 分鐘的時間

---

## 第一步：建立 GitHub 帳號

### 1.1 訪問 GitHub 官方網站

1. 打開您的網頁瀏覽器（Chrome、Firefox、Safari 等）
2. 在網址列輸入：`https://github.com`
3. 按下 Enter 鍵

### 1.2 點擊「Sign up」按鈕

在頁面右上角，您會看到一個「Sign up」按鈕。點擊它。

### 1.3 填寫註冊表單

您需要填寫以下信息：

| 欄位 | 說明 | 範例 |
|------|------|------|
| **Email address** | 您的電子郵件地址 | your-email@gmail.com |
| **Password** | 設置一個強密碼（至少 15 個字符或至少 8 個字符且包含大小寫和數字） | MyPassword123! |
| **Username** | GitHub 用戶名（只能包含字母、數字、連字符） | chunan-victory-church |

**密碼建議：**
- 包含大寫字母（A-Z）
- 包含小寫字母（a-z）
- 包含數字（0-9）
- 包含特殊符號（!@#$%）
- 至少 12 個字符

### 1.4 驗證電子郵件

1. GitHub 會向您的電子郵件發送驗證碼
2. 打開您的電子郵件，找到來自 GitHub 的郵件
3. 複製驗證碼
4. 返回 GitHub 頁面，輸入驗證碼
5. 點擊「Verify」

### 1.5 完成設置

按照 GitHub 的提示完成剩餘設置。您現在已經擁有 GitHub 帳號了！

---

## 第二步：建立新的 Repository

### 2.1 登入 GitHub

1. 訪問 `https://github.com`
2. 點擊右上角的用戶頭像
3. 選擇「Your repositories」

### 2.2 建立新 Repository

1. 點擊綠色的「New」按鈕
2. 您會看到「Create a new repository」頁面

### 2.3 填寫 Repository 信息

| 欄位 | 說明 | 範例 |
|------|------|------|
| **Repository name** | Repository 的名稱 | chunan-victory-church |
| **Description** | 簡短描述（可選） | 竹南勝利堂官方網站 |
| **Public/Private** | 選擇「Public」（公開）或「Private」（私密） | Public |
| **Initialize with README** | 勾選「Add a README file」 | ✓ |
| **.gitignore** | 選擇「Node」 | Node |
| **License** | 選擇「MIT License」 | MIT License |

### 2.4 建立 Repository

點擊綠色的「Create repository」按鈕。

恭喜！您已經成功建立了一個 GitHub Repository。

---

## 第三步：下載並準備代碼

### 3.1 下載代碼 ZIP 檔

1. 從 Manus 平台下載網站代碼的 ZIP 檔
2. 將 ZIP 檔保存到您的電腦（例如：桌面或下載資料夾）

### 3.2 解壓 ZIP 檔

**Windows 用戶：**
1. 右鍵點擊 ZIP 檔
2. 選擇「Extract All」或「解壓縮」
3. 選擇解壓位置（例如：桌面）
4. 點擊「Extract」

**Mac 用戶：**
1. 雙擊 ZIP 檔
2. 系統會自動解壓到同一資料夾

**Linux 用戶：**
```bash
unzip chunan-victory-church.zip
```

### 3.3 檢查文件結構

解壓後，您應該看到以下文件夾結構：

```
chunan-victory-church/
├── client/                    # 前端代碼
├── server/                    # 後端代碼
├── drizzle/                   # 資料庫配置
├── shared/                    # 共享代碼
├── .github/                   # GitHub Actions 配置
├── .env.example               # 環境變數範例
├── .gitignore                 # Git 忽略文件
├── README.md                  # 項目說明
├── GITHUB_SETUP_GUIDE.md      # GitHub 設置指南
├── WEBSITE_MAINTENANCE_GUIDE_UPDATED.md  # 網站維護手冊
├── package.json               # 項目依賴
└── ... 其他文件
```

---

## 第四步：上傳代碼到 GitHub

### 方法 A：使用 GitHub Desktop（推薦 - 最簡單）

#### A.1 下載 GitHub Desktop

1. 訪問 `https://desktop.github.com`
2. 點擊「Download」下載 GitHub Desktop
3. 安裝完成後打開應用

#### A.2 登入 GitHub

1. 在 GitHub Desktop 中，點擊「File」→「Options」（Windows）或「GitHub Desktop」→「Preferences」（Mac）
2. 點擊「Accounts」
3. 點擊「Sign in」
4. 輸入您的 GitHub 用戶名和密碼
5. 點擊「Sign in」

#### A.3 新增本地 Repository

1. 在 GitHub Desktop 中，點擊「File」→「Add Local Repository」
2. 點擊「Choose」選擇您解壓的 `chunan-victory-church` 資料夾
3. 點擊「Add Repository」

#### A.4 發佈到 GitHub

1. 在 GitHub Desktop 中，點擊「Publish repository」按鈕
2. 在「Name」欄填寫：`chunan-victory-church`
3. 在「Description」欄填寫：`竹南勝利堂官方網站`
4. 確保「Keep this code private」未被勾選（如果您想公開）
5. 點擊「Publish Repository」

完成！您的代碼現在已經上傳到 GitHub 了。

---

### 方法 B：使用命令列（適合有技術基礎的用戶）

#### B.1 安裝 Git

**Windows：**
1. 訪問 `https://git-scm.com/download/win`
2. 下載並安裝 Git
3. 使用默認設置完成安裝

**Mac：**
```bash
brew install git
```

**Linux：**
```bash
sudo apt-get install git
```

#### B.2 配置 Git

打開終端或命令提示符，執行以下命令：

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

將 `Your Name` 和 `your-email@example.com` 替換為您的實際信息。

#### B.3 初始化 Git Repository

在您的代碼資料夾中執行：

```bash
cd /path/to/chunan-victory-church
git init
git add .
git commit -m "Initial commit: 竹南勝利堂官方網站"
```

#### B.4 添加遠程 Repository

1. 在 GitHub 上建立 Repository（參考第二步）
2. 複製 Repository 的 HTTPS URL（在綠色「Code」按鈕下方）
3. 執行命令：

```bash
git remote add origin https://github.com/your-username/chunan-victory-church.git
git branch -M main
git push -u origin main
```

將 `your-username` 替換為您的 GitHub 用戶名。

完成！您的代碼現在已經上傳到 GitHub 了。

---

## 第五步：設置環境變數

### 5.1 在 GitHub 中設置 Secrets

環境變數（如 API 密鑰）不應該被上傳到 GitHub。GitHub 提供了「Secrets」功能來安全地存儲這些信息。

#### 5.1.1 訪問 Repository 設置

1. 在 GitHub 上打開您的 Repository
2. 點擊「Settings」標籤
3. 在左側菜單中點擊「Secrets and variables」→「Actions」

#### 5.1.2 新增 Secrets

點擊「New repository secret」按鈕，添加以下環境變數：

| Secret 名稱 | 值 | 說明 |
|------------|-----|------|
| `DATABASE_URL` | 您的資料庫連接字符串 | MySQL/TiDB 連接 URL |
| `JWT_SECRET` | 隨機生成的密鑰 | 用於 JWT 簽名 |
| `VITE_APP_ID` | 您的 OAuth App ID | Manus OAuth 應用 ID |
| `OAUTH_SERVER_URL` | `https://api.manus.im` | Manus OAuth 服務器 URL |
| `VITE_OAUTH_PORTAL_URL` | Manus 登入門戶 URL | OAuth 登入頁面 |
| `OWNER_OPEN_ID` | 您的 Manus Open ID | 教會管理員 ID |
| `OWNER_NAME` | 教會名稱 | 竹南勝利堂 |
| `BUILT_IN_FORGE_API_KEY` | Manus API 密鑰 | 服務端 API 密鑰 |
| `BUILT_IN_FORGE_API_URL` | Manus API URL | 內置 API 服務 URL |
| `VITE_FRONTEND_FORGE_API_KEY` | 前端 API 密鑰 | 客戶端 API 密鑰 |
| `VITE_FRONTEND_FORGE_API_URL` | 前端 API URL | 前端使用的 API URL |

### 5.2 從 .env.example 了解所需變數

項目中包含 `.env.example` 文件，列出了所有需要的環境變數。您可以參考這個文件來了解需要設置哪些 Secrets。

---

## 常見問題

### Q1：我忘記了 GitHub 密碼怎麼辦？

**A：** 
1. 訪問 `https://github.com/login`
2. 點擊「Forgot password?」
3. 輸入您的電子郵件地址
4. GitHub 會向您發送密碼重置郵件
5. 按照郵件中的指示重置密碼

### Q2：上傳後發現代碼有誤，如何更新？

**A：**

**使用 GitHub Desktop：**
1. 修改本地代碼
2. 在 GitHub Desktop 中，您會看到修改的文件列表
3. 在左下角輸入提交信息（例如：「Fix: 修復首頁 bug」）
4. 點擊「Commit to main」
5. 點擊「Push origin」

**使用命令列：**
```bash
git add .
git commit -m "Fix: 修復首頁 bug"
git push origin main
```

### Q3：如何刪除已上傳的敏感信息？

**A：** 如果您不小心上傳了敏感信息（如密碼、API 密鑰），請立即：

1. 在 GitHub 上刪除該 Repository
2. 更改所有相關的密碼和 API 密鑰
3. 重新建立 Repository 並重新上傳

### Q4：GitHub Desktop 和命令列哪個更好？

**A：**
- **GitHub Desktop**：更簡單，適合初學者，有圖形界面
- **命令列**：更強大，適合有技術基礎的用戶，可以進行更複雜的操作

建議初學者使用 GitHub Desktop。

### Q5：上傳到 GitHub 後，如何在 Cloudflare 上部署？

**A：** 這是一個更高級的主題。基本步驟是：

1. 在 Cloudflare Pages 中連接您的 GitHub Repository
2. 設置構建命令：`pnpm build`
3. 設置發佈目錄：`dist`
4. 配置環境變數（與 GitHub Secrets 相同）
5. Cloudflare 會自動部署您的網站

詳細步驟請參考 Cloudflare Pages 官方文檔。

### Q6：如何確保敏感信息不被上傳？

**A：** 項目已經配置了 `.gitignore` 文件，會自動忽略：
- `.env` 和 `.env.local` 文件
- `node_modules` 資料夾
- 構建輸出文件

確保您的敏感信息都存儲在 `.env.local` 文件中（不要上傳）。

---

## 總結

恭喜！您已經學會了如何：
1. ✅ 建立 GitHub 帳號
2. ✅ 建立新的 Repository
3. ✅ 上傳代碼到 GitHub
4. ✅ 設置環境變數

您的竹南勝利堂官方網站代碼現在已經安全地存儲在 GitHub 上，可以隨時進行版本控制和協作開發。

---

## 需要幫助？

如果您在任何步驟遇到問題，可以：
1. 查看 GitHub 官方文檔：`https://docs.github.com`
2. 在 GitHub 社區尋求幫助：`https://github.com/community`
3. 查看項目的 README.md 文件了解更多信息

祝您使用愉快！🎉
