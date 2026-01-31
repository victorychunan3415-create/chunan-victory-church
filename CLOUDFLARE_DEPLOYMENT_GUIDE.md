# 竹南勝利堂官方網站 - Cloudflare Pages 部署完整指南

## 📋 目錄

1. [什麼是 Cloudflare Pages？](#什麼是-cloudflare-pages)
2. [前置準備](#前置準備)
3. [第一步：連接 GitHub Repository](#第一步連接-github-repository)
4. [第二步：配置構建設定](#第二步配置構建設定)
5. [第三步：設置環境變數](#第三步設置環境變數)
6. [第四步：自訂域名設置](#第四步自訂域名設置)
7. [部署後的驗證](#部署後的驗證)
8. [常見問題](#常見問題)

---

## 什麼是 Cloudflare Pages？

Cloudflare Pages 是一個免費的靜態網站託管服務，具有以下優勢：

| 功能 | 說明 |
|------|------|
| **免費託管** | 無限制的帶寬和請求 |
| **自動部署** | 每次推送代碼到 GitHub 時自動部署 |
| **全球 CDN** | 自動分發到全球 200+ 個數據中心 |
| **HTTPS** | 自動配置 SSL/TLS 證書 |
| **自訂域名** | 支持自訂域名和子域名 |
| **環境變數** | 安全地存儲敏感信息 |
| **分析** | 內置訪問分析 |

---

## 前置準備

在開始部署前，請確保：

- ✅ 您已經有 GitHub 帳號
- ✅ 您已經將代碼上傳到 GitHub Repository
- ✅ 您有一個 Cloudflare 帳號（免費註冊）
- ✅ 您的 GitHub Repository 是公開的（Public）

---

## 第一步：連接 GitHub Repository

### 1.1 建立 Cloudflare 帳號

如果您還沒有 Cloudflare 帳號：

1. 訪問 `https://dash.cloudflare.com/sign-up`
2. 選擇「Cloudflare Pages」
3. 使用電子郵件註冊或使用 Google/GitHub 帳號登入
4. 完成電子郵件驗證

### 1.2 登入 Cloudflare Dashboard

1. 訪問 `https://dash.cloudflare.com`
2. 輸入您的電子郵件和密碼
3. 點擊「Sign in」

### 1.3 進入 Pages 部分

1. 在左側菜單中，找到「Pages」選項
2. 點擊「Pages」
3. 點擊「Create a project」按鈕

### 1.4 連接 GitHub Repository

1. 點擊「Connect to Git」
2. 選擇「GitHub」
3. 如果您還沒有授權 Cloudflare 訪問 GitHub，會看到授權頁面
4. 點擊「Authorize Cloudflare」
5. 在 GitHub 上確認授權

### 1.5 選擇 Repository

1. 在「Select a repository」中，找到並選擇 `chunan-victory-church`
2. 點擊「Begin setup」

---

## 第二步：配置構建設定

### 2.1 配置頁面

您會看到「Set up builds and deployments」頁面。按照以下步驟填寫：

#### 項目名稱

- **Project name**: `chunan-victory-church`
- 這將成為您的臨時域名：`chunan-victory-church.pages.dev`

#### 生產分支

- **Production branch**: `main`
- 這是 GitHub 上的主分支名稱

### 2.2 構建設定

在「Build settings」部分，填寫以下信息：

| 設定項 | 值 | 說明 |
|--------|-----|------|
| **Framework preset** | `None` | 我們使用自訂構建命令 |
| **Build command** | `pnpm build` | 構建前端和後端 |
| **Build output directory** | `dist` | 構建輸出目錄 |
| **Root directory** | `/` | 項目根目錄 |

**詳細步驟：**

1. 點擊「Framework preset」下拉菜單
2. 選擇「None」
3. 在「Build command」欄填寫：`pnpm build`
4. 在「Build output directory」欄填寫：`dist`
5. 其他設定保持默認

### 2.3 環境變數（先跳過）

在「Environment variables」部分，您可以先跳過，稍後在第三步進行配置。

### 2.4 保存配置

1. 向下滾動，點擊「Save and Deploy」
2. Cloudflare 會開始構建和部署您的網站
3. 等待部署完成（通常需要 2-5 分鐘）

---

## 第三步：設置環境變數

### 3.1 訪問項目設定

1. 在 Cloudflare Pages 中，點擊您的項目 `chunan-victory-church`
2. 點擊「Settings」標籤
3. 在左側菜單中點擊「Environment variables」

### 3.2 添加環境變數

您需要添加以下環境變數。這些變數應該與您在 GitHub Secrets 中設置的相同。

#### 生產環境變數

點擊「Add variable」，逐個添加以下變數：

| 變數名稱 | 值 | 說明 |
|---------|-----|------|
| `DATABASE_URL` | 您的資料庫連接字符串 | MySQL/TiDB 連接 URL |
| `JWT_SECRET` | 隨機生成的密鑰 | 用於 JWT 簽名 |
| `VITE_APP_ID` | 您的 OAuth App ID | Manus OAuth 應用 ID |
| `OAUTH_SERVER_URL` | `https://api.manus.im` | Manus OAuth 服務器 URL |
| `VITE_OAUTH_PORTAL_URL` | Manus 登入門戶 URL | OAuth 登入頁面 |
| `OWNER_OPEN_ID` | 您的 Manus Open ID | 教會管理員 ID |
| `OWNER_NAME` | `竹南勝利堂` | 教會名稱 |
| `BUILT_IN_FORGE_API_KEY` | Manus API 密鑰 | 服務端 API 密鑰 |
| `BUILT_IN_FORGE_API_URL` | Manus API URL | 內置 API 服務 URL |
| `VITE_FRONTEND_FORGE_API_KEY` | 前端 API 密鑰 | 客戶端 API 密鑰 |
| `VITE_FRONTEND_FORGE_API_URL` | 前端 API URL | 前端使用的 API URL |

### 3.3 添加變數的步驟

對於每個變數，執行以下步驟：

1. 點擊「Add variable」
2. 在「Variable name」欄填寫變數名稱（例如：`DATABASE_URL`）
3. 在「Value」欄填寫變數值
4. 點擊「Save」

**⚠️ 重要提示：**
- 不要在 Cloudflare 中存儲敏感信息（如密碼、API 密鑰）的明文
- 確保您的 API 密鑰和連接字符串是正確的
- 如果變數值包含特殊字符，可能需要使用引號

### 3.4 重新部署

添加環境變數後，您需要重新部署網站以應用這些變數：

1. 返回「Deployments」標籤
2. 找到最新的部署
3. 點擊「Retry deployment」或進行新的 Git push

---

## 第四步：自訂域名設置

### 4.1 連接自訂域名

如果您有自己的域名（例如：`chunan-victory-church.org`），可以連接到 Cloudflare Pages：

1. 在 Cloudflare Pages 項目中，點擊「Custom domains」
2. 點擊「Set up a custom domain」
3. 輸入您的域名（例如：`chunan-victory-church.org`）
4. 點擊「Continue」

### 4.2 配置 DNS

Cloudflare 會提供 DNS 配置說明。根據您的域名提供商，執行以下步驟：

#### 如果域名在 Cloudflare 上

1. Cloudflare 會自動配置 DNS 記錄
2. 等待 DNS 生效（通常 5-30 分鐘）

#### 如果域名在其他提供商上（例如：GoDaddy、Namecheap）

1. 登入您的域名提供商的控制面板
2. 找到「DNS 設定」或「Name Servers」
3. 將 Name Servers 更改為 Cloudflare 提供的值：
   - `ns1.cloudflare.com`
   - `ns2.cloudflare.com`
4. 保存設定
5. 等待 DNS 生效（通常 24-48 小時）

### 4.3 驗證域名

1. 返回 Cloudflare Pages
2. 檢查域名狀態
3. 當狀態變為「Active」時，您的自訂域名已經連接成功

---

## 部署後的驗證

### 5.1 檢查部署狀態

1. 在 Cloudflare Pages 中，點擊「Deployments」標籤
2. 查看最新部署的狀態
3. 如果顯示「Success」，表示部署成功

### 5.2 訪問您的網站

1. 訪問臨時域名：`https://chunan-victory-church.pages.dev`
2. 或訪問自訂域名（如果已配置）：`https://your-domain.com`
3. 檢查網站是否正常加載

### 5.3 檢查功能

- ✅ 首頁是否正常顯示
- ✅ 導航菜單是否可用
- ✅ 最新消息頁面是否加載
- ✅ 後台管理頁面是否可訪問
- ✅ 表單提交是否正常工作

### 5.4 檢查控制台錯誤

1. 打開網站
2. 按下 `F12` 打開開發者工具
3. 點擊「Console」標籤
4. 檢查是否有紅色錯誤信息
5. 如果有錯誤，記下錯誤信息以便調試

---

## 常見問題

### Q1：部署失敗，顯示「Build failed」

**A：** 可能的原因和解決方案：

1. **檢查構建命令**
   - 確保構建命令是 `pnpm build`
   - 檢查 `package.json` 中是否有 `build` 腳本

2. **檢查依賴**
   - 確保所有依賴都已安裝
   - 檢查 `pnpm-lock.yaml` 是否已上傳到 GitHub

3. **檢查環境變數**
   - 確保所有必需的環境變數都已設置
   - 檢查環境變數值是否正確

4. **查看構建日誌**
   - 在 Cloudflare Pages 中，點擊失敗的部署
   - 查看「Build log」以了解具體錯誤

### Q2：網站無法訪問或顯示 404 錯誤

**A：** 可能的原因和解決方案：

1. **檢查部署狀態**
   - 確保部署已完成且狀態為「Success」

2. **清除瀏覽器緩存**
   - 按下 `Ctrl+Shift+Delete`（Windows）或 `Cmd+Shift+Delete`（Mac）
   - 清除緩存和 Cookie
   - 重新訪問網站

3. **檢查 DNS 配置**
   - 如果使用自訂域名，確保 DNS 已生效
   - 使用 `https://mxtoolbox.com/` 檢查 DNS 狀態

4. **檢查構建輸出目錄**
   - 確保構建輸出目錄設置為 `dist`
   - 檢查 `dist` 文件夾中是否有 `index.html` 文件

### Q3：環境變數未生效

**A：** 可能的原因和解決方案：

1. **重新部署**
   - 添加環境變數後，需要重新部署
   - 在 Cloudflare Pages 中點擊「Retry deployment」

2. **檢查變數名稱**
   - 確保變數名稱完全匹配（區分大小寫）
   - 例如：`DATABASE_URL` 不同於 `database_url`

3. **檢查變數值**
   - 確保變數值正確且完整
   - 如果值包含特殊字符，可能需要使用引號

4. **檢查代碼**
   - 確保代碼中正確引用了環境變數
   - 例如：`process.env.DATABASE_URL`

### Q4：自訂域名無法訪問

**A：** 可能的原因和解決方案：

1. **檢查 DNS 配置**
   - 確保 DNS 已正確配置
   - 使用 `nslookup` 或 `dig` 命令檢查 DNS 解析

2. **等待 DNS 生效**
   - DNS 更改可能需要 24-48 小時才能完全生效
   - 在此期間，使用臨時域名 `.pages.dev`

3. **檢查域名狀態**
   - 在 Cloudflare Pages 中，檢查域名狀態是否為「Active」

4. **檢查 SSL 證書**
   - Cloudflare 會自動配置 SSL 證書
   - 如果 SSL 證書未生效，等待 5-10 分鐘後重試

### Q5：如何更新已部署的網站？

**A：** 非常簡單：

1. 在本地修改代碼
2. 提交更改到 GitHub：
   ```bash
   git add .
   git commit -m "Update: 修改首頁內容"
   git push origin main
   ```
3. Cloudflare Pages 會自動檢測到更改
4. 自動開始構建和部署
5. 部署完成後，網站會自動更新

### Q6：如何回滾到之前的部署版本？

**A：**

1. 在 Cloudflare Pages 中，點擊「Deployments」標籤
2. 找到您想回滾到的部署版本
3. 點擊該部署的「...」菜單
4. 選擇「Rollback to this deployment」
5. 確認回滾

### Q7：如何監控網站性能？

**A：**

1. 在 Cloudflare Pages 中，點擊「Analytics」標籤
2. 查看以下信息：
   - 請求數量
   - 帶寬使用量
   - 錯誤率
   - 訪問地理分佈

3. 使用 Google Analytics 進行更詳細的分析：
   - 在 `client/index.html` 中添加 Google Analytics 代碼
   - 訪問 `https://analytics.google.com` 查看詳細報告

---

## 部署檢查清單

在部署到 Cloudflare Pages 前，請確認以下項目：

- [ ] 代碼已上傳到 GitHub Repository
- [ ] GitHub Repository 是公開的（Public）
- [ ] 已在 Cloudflare 中連接 GitHub Repository
- [ ] 構建命令設置為 `pnpm build`
- [ ] 構建輸出目錄設置為 `dist`
- [ ] 所有環境變數已在 Cloudflare 中設置
- [ ] 部署狀態顯示「Success」
- [ ] 網站可以通過臨時域名訪問
- [ ] 所有功能（導航、表單、後台）都正常工作
- [ ] 沒有控制台錯誤

---

## 總結

恭喜！您已經成功將竹南勝利堂官方網站部署到 Cloudflare Pages。

✅ 您的網站現在：
- 託管在全球 CDN 上
- 自動部署每次 GitHub 更新
- 擁有 HTTPS 加密連接
- 可以使用自訂域名
- 免費無限帶寬

🎉 您的網站已經準備好為訪客服務了！

---

## 需要幫助？

如果您遇到問題，可以：
1. 查看 Cloudflare Pages 官方文檔：`https://developers.cloudflare.com/pages`
2. 在 Cloudflare 社區尋求幫助：`https://community.cloudflare.com`
3. 查看本指南的常見問題部分
4. 檢查部署日誌以了解具體錯誤

祝您使用愉快！🚀
