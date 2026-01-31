# 竹南勝利堂官方網站 - GitHub 上傳正確步驟

## ⚠️ 重要提示

您從 Manus 下載的 ZIP 檔案**已經是完整的項目**，不需要初始化。以下是正確的上傳步驟。

---

## 快速上傳步驟（推薦 - GitHub Desktop）

### 步驟 1：下載 GitHub Desktop

1. 訪問 `https://desktop.github.com`
2. 點擊「Download」下載 GitHub Desktop
3. 安裝完成後打開應用

### 步驟 2：登入 GitHub

1. 打開 GitHub Desktop
2. 點擊「File」→「Options」（Windows）或「GitHub Desktop」→「Preferences」（Mac）
3. 點擊「Accounts」
4. 點擊「Sign in」
5. 輸入您的 GitHub 用戶名和密碼
6. 點擊「Sign in」

### 步驟 3：在 GitHub 上建立新 Repository

1. 打開網頁瀏覽器，訪問 `https://github.com`
2. 登入您的 GitHub 帳號
3. 點擊右上角的「+」圖標，選擇「New repository」
4. 填寫以下信息：
   - **Repository name**: `chunan-victory-church`
   - **Description**: `竹南勝利堂官方網站`
   - **Public/Private**: 選擇「Public」（公開）
   - **Initialize this repository with**: 不勾選任何選項
5. 點擊「Create repository」

### 步驟 4：在 GitHub Desktop 中添加本地項目

1. 打開 GitHub Desktop
2. 點擊「File」→「Add Local Repository」
3. 點擊「Choose」按鈕
4. 選擇您解壓的 `CHUNAN-VICTORY-CHURCH` 文件夾
5. 點擊「Add Repository」

### 步驟 5：發佈到 GitHub

1. 在 GitHub Desktop 中，點擊「Publish repository」按鈕
2. 確認以下信息：
   - **Name**: `chunan-victory-church`
   - **Description**: `竹南勝利堂官方網站`
   - **Keep this code private**: 不勾選（如果您想公開）
3. 點擊「Publish Repository」

✅ **完成！** 您的代碼現在已經上傳到 GitHub 了。

---

## 命令列上傳步驟（適合有技術基礎的用戶）

### 前置準備：安裝 Git

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

### 步驟 1：配置 Git

打開終端或命令提示符，執行以下命令：

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

將 `Your Name` 和 `your-email@example.com` 替換為您的實際信息。

### 步驟 2：在 GitHub 上建立新 Repository

1. 訪問 `https://github.com`
2. 登入您的 GitHub 帳號
3. 點擊右上角的「+」圖標，選擇「New repository」
4. 填寫以下信息：
   - **Repository name**: `chunan-victory-church`
   - **Description**: `竹南勝利堂官方網站`
   - **Public/Private**: 選擇「Public」（公開）
   - **Initialize this repository with**: 不勾選任何選項
5. 點擊「Create repository」

### 步驟 3：複製 Repository URL

1. 在 GitHub 上，點擊綠色的「Code」按鈕
2. 確保選擇「HTTPS」標籤
3. 複製顯示的 URL（例如：`https://github.com/your-username/chunan-victory-church.git`）

### 步驟 4：在本地初始化 Git

打開終端或命令提示符，執行以下命令：

```bash
# 進入項目文件夾
cd /path/to/CHUNAN-VICTORY-CHURCH

# 初始化 Git
git init

# 添加所有文件
git add .

# 創建第一次提交
git commit -m "Initial commit: 竹南勝利堂官方網站"
```

**說明：**
- 將 `/path/to/CHUNAN-VICTORY-CHURCH` 替換為您的實際文件夾路徑
- 例如（Windows）：`C:\Users\YourName\Desktop\CHUNAN-VICTORY-CHURCH`
- 例如（Mac/Linux）：`/Users/YourName/Desktop/CHUNAN-VICTORY-CHURCH`

### 步驟 5：添加遠程 Repository 並推送

執行以下命令：

```bash
# 添加遠程 Repository
git remote add origin https://github.com/your-username/chunan-victory-church.git

# 重命名主分支為 main
git branch -M main

# 推送代碼到 GitHub
git push -u origin main
```

**說明：**
- 將 `your-username` 替換為您的 GitHub 用戶名
- 例如：`https://github.com/john-doe/chunan-victory-church.git`

✅ **完成！** 您的代碼現在已經上傳到 GitHub 了。

---

## 上傳後的步驟

### 1. 驗證上傳成功

1. 打開 GitHub，進入您的 Repository
2. 確認所有文件都已上傳
3. 您應該看到 `.github`、`client`、`drizzle`、`server`、`shared` 等文件夾

### 2. 設置環境變數（GitHub Secrets）

為了安全地存儲敏感信息（如 API 密鑰），需要在 GitHub 中設置 Secrets：

1. 在 GitHub Repository 頁面，點擊「Settings」
2. 在左側菜單中點擊「Secrets and variables」→「Actions」
3. 點擊「New repository secret」
4. 添加以下環境變數（從您的 `.env.local` 文件中複製值）：

| Secret 名稱 | 說明 |
|------------|------|
| `DATABASE_URL` | 資料庫連接字符串 |
| `JWT_SECRET` | JWT 簽名密鑰 |
| `VITE_APP_ID` | OAuth App ID |
| `OAUTH_SERVER_URL` | OAuth 服務器 URL |
| `VITE_OAUTH_PORTAL_URL` | OAuth 登入頁面 URL |
| `OWNER_OPEN_ID` | 教會管理員 ID |
| `OWNER_NAME` | 教會名稱 |
| `BUILT_IN_FORGE_API_KEY` | 服務端 API 密鑰 |
| `BUILT_IN_FORGE_API_URL` | 內置 API URL |
| `VITE_FRONTEND_FORGE_API_KEY` | 前端 API 密鑰 |
| `VITE_FRONTEND_FORGE_API_URL` | 前端 API URL |

---

## 常見錯誤和解決方案

### 錯誤 1：「this directory does not appear to be a git repository」

**原因：** 文件夾中沒有 `.git` 目錄

**解決方案（GitHub Desktop）：**
1. 確保您選擇的是 `CHUNAN-VICTORY-CHURCH` 文件夾（包含 `package.json` 的那個）
2. 點擊「Publish repository」而不是「Add Local Repository」

**解決方案（命令列）：**
1. 確保您已經執行了 `git init` 命令
2. 確保您在正確的文件夾中（應該看到 `package.json` 文件）

### 錯誤 2：「fatal: remote origin already exists」

**原因：** 已經添加過遠程 Repository

**解決方案：**
```bash
# 移除現有的遠程 Repository
git remote remove origin

# 重新添加
git remote add origin https://github.com/your-username/chunan-victory-church.git
```

### 錯誤 3：「Permission denied (publickey)」

**原因：** SSH 密鑰配置問題

**解決方案：**
1. 確保您使用的是 HTTPS URL（不是 SSH）
2. 在 GitHub Desktop 中重新登入
3. 或者在命令列中使用 HTTPS URL：`https://github.com/your-username/chunan-victory-church.git`

### 錯誤 4：「fatal: 'origin' does not appear to be a 'git' repository」

**原因：** 遠程 Repository URL 不正確

**解決方案：**
```bash
# 檢查遠程 Repository 設置
git remote -v

# 如果輸出為空或不正確，重新添加
git remote add origin https://github.com/your-username/chunan-victory-church.git
```

---

## 更新代碼到 GitHub

在本地修改代碼後，如何將更新上傳到 GitHub？

### 使用 GitHub Desktop：

1. 在 GitHub Desktop 中，您會看到修改的文件列表
2. 在左下角輸入提交信息（例如：「Fix: 修復首頁 bug」）
3. 點擊「Commit to main」
4. 點擊「Push origin」

### 使用命令列：

```bash
# 添加所有修改的文件
git add .

# 創建提交
git commit -m "Fix: 修復首頁 bug"

# 推送到 GitHub
git push origin main
```

---

## 總結

✅ 您已經成功：
1. 建立了 GitHub Repository
2. 上傳了竹南勝利堂官方網站的代碼
3. 設置了環境變數
4. 準備好進行版本控制和協作開發

🎉 恭喜！您的網站代碼現在已經安全地存儲在 GitHub 上了。

---

## 需要幫助？

如果您仍然遇到問題，請檢查：
1. 您是否在正確的文件夾中（應該看到 `package.json`）
2. 您的 GitHub 帳號是否已登入
3. Repository 名稱是否正確（`chunan-victory-church`）
4. 您的網際網路連接是否正常

如果問題仍未解決，請參考 GitHub 官方文檔：`https://docs.github.com`
