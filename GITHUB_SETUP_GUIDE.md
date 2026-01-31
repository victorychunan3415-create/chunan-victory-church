# 竹南勝利堂網站 - GitHub 上傳完整指南

## 📋 目錄

1. [準備工作](#準備工作)
2. [建立 GitHub 帳號](#建立-github-帳號)
3. [上傳代碼到 GitHub](#上傳代碼到-github)
4. [設置自動部署](#設置自動部署)
5. [常見問題](#常見問題)

---

## 準備工作

在開始前，您需要準備以下工具：

### 1. 安裝 Git（版本控制工具）

**Windows 用戶：**
- 訪問 [git-scm.com](https://git-scm.com/)
- 點擊下載按鈕，選擇 Windows 版本
- 下載完成後，雙擊安裝文件
- 一直點擊「Next」直到安裝完成
- 安裝完成後，重啟電腦

**Mac 用戶：**
- 訪問 [git-scm.com](https://git-scm.com/)
- 點擊下載按鈕，選擇 macOS 版本
- 下載並安裝

**驗證安裝成功：**
- 打開「終端機」（Windows 用戶打開「命令提示字元」或「PowerShell」）
- 輸入 `git --version`
- 如果顯示版本號（如 `git version 2.x.x`），表示安裝成功

### 2. 安裝 Visual Studio Code（代碼編輯器）

- 訪問 [code.visualstudio.com](https://code.visualstudio.com/)
- 點擊下載按鈕
- 安裝完成後打開

---

## 建立 GitHub 帳號

### 步驟 1：訪問 GitHub 官網

1. 打開瀏覽器
2. 訪問 [github.com](https://github.com)
3. 點擊右上角的「Sign up」按鈕

### 步驟 2：填寫註冊信息

1. **Email 地址**：輸入您的電子郵件地址
2. **密碼**：設置一個強密碼（至少 8 個字符，包含大小寫字母和數字）
3. **用戶名**：選擇一個用戶名（例如：`victory-church-admin`）
4. 勾選「I agree to the GitHub terms of service」
5. 點擊「Create account」按鈕

### 步驟 3：驗證郵件

1. GitHub 會發送驗證郵件到您的郵箱
2. 打開郵件，點擊驗證連結
3. 完成驗證後，您的 GitHub 帳號就建立成功了

---

## 上傳代碼到 GitHub

### 步驟 1：在 GitHub 上建立新倉庫

1. 登錄 GitHub 帳號
2. 點擊右上角的「+」圖標
3. 選擇「New repository」
4. 填寫以下信息：
   - **Repository name**：`chunan-victory-church`（倉庫名稱）
   - **Description**：`竹南勝利堂官方網站`（可選）
   - **Visibility**：選擇「Public」（公開）或「Private」（私密）
5. 點擊「Create repository」按鈕

### 步驟 2：配置 Git 用戶信息

打開終端機（或命令提示字元），輸入以下命令：

```bash
git config --global user.name "您的名字"
git config --global user.email "您的郵箱@example.com"
```

例如：
```bash
git config --global user.name "Victory Church"
git config --global user.email "admin@victory-church.com"
```

### 步驟 3：在本地初始化 Git 倉庫

1. 打開 Visual Studio Code
2. 打開項目文件夾（File → Open Folder → 選擇 `chunan-victory-church` 文件夾）
3. 按下 `Ctrl + ~` 打開終端機
4. 輸入以下命令：

```bash
git init
git add .
git commit -m "Initial commit: 竹南勝利堂官方網站"
```

### 步驟 4：連接遠程倉庫

在終端機中輸入以下命令（將 `YOUR_USERNAME` 替換為您的 GitHub 用戶名）：

```bash
git remote add origin https://github.com/YOUR_USERNAME/chunan-victory-church.git
git branch -M main
git push -u origin main
```

### 步驟 5：輸入 GitHub 認證信息

1. 系統會提示您輸入 GitHub 用戶名和密碼
2. **用戶名**：輸入您的 GitHub 用戶名
3. **密碼**：輸入您的 GitHub 密碼
4. 按 Enter 鍵

**注意**：如果您啟用了雙因素認證，需要使用「Personal Access Token」而不是密碼。詳見下方「使用 Personal Access Token」部分。

### 步驟 6：驗證上傳成功

1. 回到 GitHub 網站
2. 刷新頁面
3. 如果看到您的代碼文件，表示上傳成功

---

## 設置自動部署

### 步驟 1：在 Cloudflare 上建立項目

1. 訪問 [Cloudflare Pages](https://pages.cloudflare.com/)
2. 點擊「Create a project」
3. 選擇「Connect to Git」
4. 授權 GitHub 帳號
5. 選擇 `chunan-victory-church` 倉庫
6. 填寫以下信息：
   - **Project name**：`chunan-victory-church`
   - **Production branch**：`main`
   - **Build command**：`pnpm build`
   - **Build output directory**：`dist`
7. 點擊「Save and Deploy」

### 步驟 2：配置環境變數

1. 在 Cloudflare Pages 項目設置中
2. 找到「Environment variables」部分
3. 添加以下環境變數（從 `.env.example` 文件複製）：

```
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
VITE_APP_ID=your_app_id
OAUTH_SERVER_URL=https://api.manus.im
VITE_OAUTH_PORTAL_URL=your_oauth_portal_url
OWNER_OPEN_ID=your_owner_id
OWNER_NAME=your_owner_name
BUILT_IN_FORGE_API_URL=your_api_url
BUILT_IN_FORGE_API_KEY=your_api_key
VITE_FRONTEND_FORGE_API_KEY=your_frontend_key
VITE_FRONTEND_FORGE_API_URL=your_frontend_url
VITE_ANALYTICS_ENDPOINT=your_analytics_endpoint
VITE_ANALYTICS_WEBSITE_ID=your_analytics_id
VITE_APP_TITLE=竹南勝利堂
VITE_APP_LOGO=your_logo_url
```

### 步驟 3：設置 GitHub Secrets（可選但推薦）

如果您想使用 GitHub Actions 自動部署，需要設置 GitHub Secrets：

1. 在 GitHub 上打開您的倉庫
2. 點擊「Settings」標籤
3. 在左側菜單中選擇「Secrets and variables」→「Actions」
4. 點擊「New repository secret」
5. 添加以下 Secrets：

```
CLOUDFLARE_API_TOKEN=your_cloudflare_api_token
CLOUDFLARE_ACCOUNT_ID=your_cloudflare_account_id
CLOUDFLARE_PROJECT_NAME=chunan-victory-church
```

加上所有環境變數（同上面列表）

---

## 常見問題

### Q1：如何更新代碼到 GitHub？

**A：** 每次修改代碼後，按照以下步驟更新：

1. 打開終端機
2. 輸入以下命令：

```bash
git add .
git commit -m "描述您的修改，例如：更新最新消息頁面"
git push
```

### Q2：如何恢復之前的版本？

**A：** 使用以下命令查看歷史版本：

```bash
git log --oneline
```

找到要恢復的版本，使用以下命令恢復：

```bash
git reset --hard <commit_hash>
git push --force
```

### Q3：如何使用 Personal Access Token？

**A：** 如果您啟用了雙因素認證：

1. 在 GitHub 上點擊「Settings」
2. 選擇「Developer settings」→「Personal access tokens」
3. 點擊「Generate new token」
4. 選擇 `repo` 權限
5. 生成 Token
6. 在 Git 認證時，使用 Token 而不是密碼

### Q4：部署失敗怎麼辦？

**A：** 檢查以下幾點：

1. 確保所有環境變數都已正確設置
2. 查看 GitHub Actions 或 Cloudflare Pages 的部署日誌
3. 確保 `pnpm build` 命令能在本地成功運行
4. 檢查是否有語法錯誤或依賴問題

### Q5：如何回滾到上一個版本？

**A：** 在 Cloudflare Pages 中：

1. 進入項目設置
2. 找到「Deployments」部分
3. 點擊之前的部署版本
4. 點擊「Rollback to this deployment」

---

## 📚 更多資源

- [Git 官方文檔](https://git-scm.com/doc)
- [GitHub 官方指南](https://guides.github.com/)
- [Cloudflare Pages 文檔](https://developers.cloudflare.com/pages/)

---

## 💡 提示

- **定期備份**：定期將代碼推送到 GitHub，防止數據丟失
- **清晰的提交信息**：使用有意義的提交信息，方便日後查看修改歷史
- **測試後再推送**：在本地測試成功後再推送代碼
- **不要提交敏感信息**：確保 `.env` 文件在 `.gitignore` 中，不要提交密鑰和密碼

---

**需要幫助？** 聯絡技術支持團隊或查看 [GitHub 社區論壇](https://github.community/)
