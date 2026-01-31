# 📚 完整的 GitHub 上傳指南（從零開始）

> 本指南適合完全不懂編程的人。按照步驟操作即可成功上傳項目到 GitHub。

---

## 📋 目錄

1. [準備工作](#準備工作)
2. [第一步：建立 GitHub 帳號](#第一步建立-github-帳號)
3. [第二步：下載並解壓 ZIP 檔案](#第二步下載並解壓-zip-檔案)
4. [第三步：安裝 GitHub Desktop](#第三步安裝-github-desktop)
5. [第四步：在 GitHub 上建立 Repository](#第四步在-github-上建立-repository)
6. [第五步：使用 GitHub Desktop 上傳代碼](#第五步使用-github-desktop-上傳代碼)
7. [第六步：驗證上傳是否成功](#第六步驗證上傳是否成功)
8. [常見問題](#常見問題)

---

## 準備工作

### 您需要準備的東西

- ✅ 一台電腦（Windows 或 Mac）
- ✅ 網路連接
- ✅ 從 Manus 下載的 ZIP 檔案（`chunan-victory-church.zip`）
- ✅ 15-20 分鐘的時間

### 您需要的帳號

- ✅ GitHub 帳號（免費）
- ✅ GitHub Desktop 應用程式（免費）

---

## 第一步：建立 GitHub 帳號

### 如果您已經有 GitHub 帳號，跳過此步驟

### 1.1 訪問 GitHub 官網

1. 打開瀏覽器
2. 在地址欄輸入：`https://github.com`
3. 按 Enter

### 1.2 點擊「Sign up」按鈕

1. 在頁面右上角找到「Sign up」按鈕
2. 點擊它

### 1.3 填寫註冊信息

1. **Email address**（電子郵件）：輸入您的電子郵件
2. **Password**（密碼）：輸入一個安全的密碼
3. **Username**（用戶名）：輸入一個用戶名（例如：`victorychurch2026`）
4. 點擊「Create account」

### 1.4 驗證電子郵件

1. GitHub 會發送驗證郵件到您的電子郵件
2. 打開郵件並點擊驗證連結
3. 完成驗證

✅ **完成！您現在有 GitHub 帳號了。**

---

## 第二步：下載並解壓 ZIP 檔案

### 2.1 下載 ZIP 檔案

1. 從 Manus 下載 `chunan-victory-church.zip` 檔案
2. 將檔案保存到您的電腦上（例如：桌面或下載文件夾）

### 2.2 解壓 ZIP 檔案

#### 在 Windows 上：

1. 找到 `chunan-victory-church.zip` 檔案
2. 右鍵點擊它
3. 選擇「Extract All」（解壓全部）
4. 選擇解壓位置（例如：桌面或 C:\Users\YourName\Documents）
5. 點擊「Extract」

#### 在 Mac 上：

1. 找到 `chunan-victory-church.zip` 檔案
2. 雙擊它
3. 系統會自動解壓，生成 `CHUNAN-VICTORY-CHURCH` 文件夾

### 2.3 檢查文件夾結構

解壓後，您應該看到一個名為 `CHUNAN-VICTORY-CHURCH` 的文件夾。

**打開這個文件夾，確認您看到以下內容：**

```
CHUNAN-VICTORY-CHURCH/
├── .github/
├── client/
├── drizzle/
├── patches/
├── server/
├── shared/
├── package.json          ← 重要！必須看到這個文件
├── vite.config.ts
├── tsconfig.json
├── .env.example
├── .gitignore
└── 其他文件...
```

✅ **如果您看到 `package.json` 文件，說明解壓正確。**

---

## 第三步：安裝 GitHub Desktop

### 3.1 下載 GitHub Desktop

1. 打開瀏覽器
2. 在地址欄輸入：`https://desktop.github.com`
3. 按 Enter
4. 點擊「Download」按鈕
5. 等待下載完成

### 3.2 安裝 GitHub Desktop

#### 在 Windows 上：

1. 找到下載的 `GitHubDesktopSetup.exe` 檔案
2. 雙擊它
3. 按照安裝向導操作
4. 安裝完成後，GitHub Desktop 會自動啟動

#### 在 Mac 上：

1. 找到下載的 `GitHub Desktop.zip` 檔案
2. 雙擊它進行解壓
3. 將 `GitHub Desktop` 應用拖到「Applications」文件夾
4. 打開「Applications」文件夾，雙擊「GitHub Desktop」啟動

### 3.3 登入 GitHub Desktop

1. 打開 GitHub Desktop
2. 點擊「Sign in」按鈕
3. 輸入您的 GitHub 用戶名和密碼
4. 點擊「Sign in」

✅ **完成！GitHub Desktop 已安裝並登入。**

---

## 第四步：在 GitHub 上建立 Repository

### 4.1 訪問 GitHub 網站

1. 打開瀏覽器
2. 進入 `https://github.com`
3. 登入您的帳號

### 4.2 建立新 Repository

1. 在頁面右上角找到「+」按鈕
2. 點擊「+」
3. 選擇「New repository」（新建 Repository）

### 4.3 填寫 Repository 信息

| 欄位 | 填寫內容 | 說明 |
|------|--------|------|
| **Repository name** | `chunan-victory-church` | 項目名稱 |
| **Description** | `竹南勝利堂官方網站` | 項目描述（可選） |
| **Visibility** | 選擇「Public」 | 公開或私密 |
| **Initialize this repository with** | **不勾選** | 保持空白 |

### 4.4 建立 Repository

1. 點擊「Create repository」按鈕
2. 等待頁面加載

✅ **完成！您的 Repository 已建立。**

---

## 第五步：使用 GitHub Desktop 上傳代碼

### 5.1 在 GitHub Desktop 中添加本地 Repository

1. 打開 GitHub Desktop
2. 點擊「File」菜單
3. 選擇「Add Local Repository」（添加本地 Repository）

### 5.2 選擇您的項目文件夾

1. 點擊「Choose...」按鈕
2. 瀏覽到您解壓的 `CHUNAN-VICTORY-CHURCH` 文件夾
3. 選中它
4. 點擊「Select Folder」

### 5.3 初始化 Git Repository

GitHub Desktop 會詢問：「This directory does not appear to be a Git repository. Would you like to create a repository here?」

1. 點擊「Create a Repository」
2. 填寫以下信息：
   - **Name**：`chunan-victory-church`
   - **Local Path**：自動填充（保持不變）
   - **Initialize this repository with a README**：**不勾選**
   - **Git ignore**：選擇「Node」
   - **License**：選擇「MIT License」（可選）
3. 點擊「Create Repository」

### 5.4 提交（Commit）代碼

1. GitHub Desktop 會顯示所有文件變更
2. 在左側面板中，您應該看到所有文件都被選中（打勾）
3. 在底部找到「Summary」欄位
4. 輸入提交信息：`Initial commit`
5. 點擊「Commit to main」按鈕

### 5.5 發佈（Publish）到 GitHub

1. 點擊頁面頂部的「Publish repository」按鈕
2. 確認以下信息：
   - **Name**：`chunan-victory-church`
   - **Description**：`竹南勝利堂官方網站`
   - **Keep this code private**：**不勾選**（保持公開）
3. 點擊「Publish Repository」

✅ **完成！您的代碼已上傳到 GitHub。**

---

## 第六步：驗證上傳是否成功

### 6.1 檢查 GitHub 網站

1. 打開瀏覽器
2. 進入 `https://github.com/your-username/chunan-victory-church`（用您的用戶名替換）
3. 您應該看到：
   - ✅ 所有文件夾和文件都已上傳
   - ✅ `package.json` 文件可見
   - ✅ `.github` 文件夾可見
   - ✅ 提交信息顯示「Initial commit」

### 6.2 確認文件完整性

檢查以下文件是否存在：

| 文件/文件夾 | 狀態 |
|-----------|------|
| `client/` | ✅ 應該存在 |
| `server/` | ✅ 應該存在 |
| `drizzle/` | ✅ 應該存在 |
| `package.json` | ✅ 應該存在 |
| `.github/workflows/` | ✅ 應該存在 |
| `.env.example` | ✅ 應該存在 |

✅ **如果所有文件都存在，說明上傳成功！**

---

## 常見問題

### Q1：上傳後沒看到所有文件？

**A：** 可能是以下原因：
1. 刷新頁面（按 F5）
2. 檢查 `.gitignore` 是否過濾了文件
3. 確認提交已完成

### Q2：GitHub Desktop 顯示「This directory does not appear to be a Git repository」？

**A：** 這是正常的。按照第 5.3 步的說明點擊「Create a Repository」即可。

### Q3：上傳後 Cloudflare 部署仍然失敗？

**A：** 確認以下事項：
1. Repository 中有 `package.json` 文件
2. Repository 中有 `.github/workflows/deploy.yml` 文件
3. 在 Cloudflare Pages 中設置了正確的構建命令：`pnpm build`

### Q4：如何更新已上傳的代碼？

**A：** 
1. 修改本地文件
2. 在 GitHub Desktop 中，新的更改會自動顯示
3. 輸入提交信息
4. 點擊「Commit to main」
5. 點擊「Push origin」

### Q5：如何刪除 Repository？

**A：**
1. 進入 GitHub 上的 Repository
2. 點擊「Settings」（設定）
3. 向下滾動找到「Danger Zone」
4. 點擊「Delete this repository」
5. 輸入 Repository 名稱確認
6. 點擊「I understand the consequences, delete this repository」

### Q6：上傳時出現「Permission denied」錯誤？

**A：** 
1. 確保您已在 GitHub Desktop 中登入
2. 確保您有 Repository 的寫入權限
3. 嘗試重新登入 GitHub Desktop

---

## 下一步

上傳成功後，您可以：

1. **配置 Cloudflare Pages 部署**
   - 參考 `CLOUDFLARE_DEPLOYMENT_GUIDE.md`

2. **設置環境變數**
   - 參考 `CLOUDFLARE_ENV_SETUP_DETAILED.md`

3. **在後台管理新聞**
   - 訪問 `/admin/news` 頁面

---

## 需要幫助？

如果您遇到問題，請：

1. 檢查錯誤信息
2. 查看本指南的「常見問題」部分
3. 在 GitHub 上搜索類似問題
4. 聯繫技術支持

---

**祝您上傳順利！🎉**
