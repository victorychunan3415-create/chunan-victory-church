# Cloudflare Pages 環境變數詳細配置指南

## 📋 目錄

1. [環境變數概述](#環境變數概述)
2. [獲取環境變數值](#獲取環境變數值)
3. [在 Cloudflare 中設置環境變數](#在-cloudflare-中設置環境變數)
4. [驗證環境變數](#驗證環境變數)
5. [環境變數安全最佳實踐](#環境變數安全最佳實踐)

---

## 環境變數概述

環境變數是應用程序運行時需要的配置值。它們包含敏感信息（如 API 密鑰、資料庫連接字符串），不應該被提交到 Git 倉庫。

### 為什麼需要環境變數？

| 原因 | 說明 |
|------|------|
| **安全性** | 避免在代碼中暴露敏感信息 |
| **靈活性** | 在不同環境（開發、測試、生產）使用不同的配置 |
| **可維護性** | 集中管理配置，便於修改 |
| **協作** | 團隊成員不需要知道所有敏感信息 |

---

## 獲取環境變數值

### 1. DATABASE_URL（資料庫連接字符串）

**用途：** 連接到 MySQL/TiDB 資料庫

**格式：**
```
mysql://username:password@host:port/database_name
```

**例子：**
```
mysql://root:MyPassword123@db.example.com:3306/chunan_victory_church
```

**如何獲取：**
1. 聯絡您的資料庫提供商
2. 獲取以下信息：
   - 用戶名（username）
   - 密碼（password）
   - 主機地址（host）
   - 端口號（port，通常是 3306）
   - 資料庫名稱（database_name）
3. 按照上面的格式組合

### 2. JWT_SECRET（JWT 簽名密鑰）

**用途：** 用於簽名和驗證 JWT 令牌

**如何生成：**

**方法 A：使用在線工具**
1. 訪問 `https://generate-random.org/`
2. 設置長度為 32 個字符
3. 複製生成的隨機字符串

**方法 B：使用命令行**

在 Mac/Linux 上：
```bash
openssl rand -base64 32
```

在 Windows 上（使用 PowerShell）：
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object {[byte](Get-Random -Maximum 256)}))
```

**例子：**
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

### 3. VITE_APP_ID（OAuth App ID）

**用途：** Manus OAuth 應用程序 ID

**如何獲取：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「OAuth Applications」
3. 找到您的應用程序
4. 複製「App ID」

**例子：**
```
app_1234567890abcdef
```

### 4. OAUTH_SERVER_URL（OAuth 服務器 URL）

**用途：** Manus OAuth 服務器地址

**值：**
```
https://api.manus.im
```

這是固定值，無需修改。

### 5. VITE_OAUTH_PORTAL_URL（OAuth 登入門戶 URL）

**用途：** Manus 登入頁面 URL

**如何獲取：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「OAuth Applications」
3. 找到「Portal URL」或「Login URL」
4. 複製該 URL

**例子：**
```
https://portal.manus.im/login
```

### 6. OWNER_OPEN_ID（教會管理員 ID）

**用途：** 識別教會管理員

**如何獲取：**
1. 登入 Manus 控制面板
2. 進入「Account Settings」或「Profile」
3. 找到「Open ID」或「User ID」
4. 複製該 ID

**例子：**
```
user_9876543210fedcba
```

### 7. OWNER_NAME（教會名稱）

**用途：** 顯示教會名稱

**值：**
```
竹南勝利堂
```

您可以根據需要修改。

### 8. BUILT_IN_FORGE_API_KEY（服務端 API 密鑰）

**用途：** Manus 內置 API 的服務端密鑰

**如何獲取：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「API Keys」
3. 找到「Server-side API Key」或「Backend API Key」
4. 複製該密鑰

**例子：**
```
sk_live_abcdef1234567890ghijkl
```

⚠️ **重要：** 這個密鑰非常敏感，不要在客戶端代碼中使用。

### 9. BUILT_IN_FORGE_API_URL（內置 API URL）

**用途：** Manus 內置 API 的服務器地址

**值：**
```
https://api.manus.im/forge
```

這是固定值，無需修改。

### 10. VITE_FRONTEND_FORGE_API_KEY（前端 API 密鑰）

**用途：** Manus 內置 API 的前端密鑰

**如何獲取：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「API Keys」
3. 找到「Frontend API Key」或「Client-side API Key」
4. 複製該密鑰

**例子：**
```
pk_live_mnopqr7890abcdefghijkl
```

⚠️ **注意：** 這個密鑰可以在客戶端代碼中使用，但不要在 Git 中提交。

### 11. VITE_FRONTEND_FORGE_API_URL（前端 API URL）

**用途：** Manus 內置 API 的前端服務器地址

**值：**
```
https://api.manus.im/forge
```

這是固定值，無需修改。

---

## 在 Cloudflare 中設置環境變數

### 步驟 1：訪問 Cloudflare Dashboard

1. 訪問 `https://dash.cloudflare.com`
2. 登入您的 Cloudflare 帳號

### 步驟 2：進入 Pages 項目

1. 在左側菜單中點擊「Pages」
2. 選擇您的項目 `chunan-victory-church`

### 步驟 3：進入設定

1. 點擊「Settings」標籤
2. 在左側菜單中點擊「Environment variables」

### 步驟 4：添加環境變數

對於每個環境變數，執行以下步驟：

#### 4.1 點擊「Add variable」

#### 4.2 填寫變數信息

在彈出的表單中：

1. **Variable name**：輸入變數名稱（例如：`DATABASE_URL`）
2. **Value**：輸入變數值（例如：`mysql://root:password@host:3306/db`）
3. **Environments**：選擇環境（通常選擇「Production」）

#### 4.3 點擊「Save」

### 步驟 5：重新部署

添加環境變數後，需要重新部署以應用這些變數：

1. 返回「Deployments」標籤
2. 找到最新的部署
3. 點擊「Retry deployment」

或者進行新的 Git push：
```bash
git add .
git commit -m "Update: 環境變數配置"
git push origin main
```

---

## 環境變數配置表

複製以下表格，填寫您的實際值：

| 變數名稱 | 值 | 備註 |
|---------|-----|------|
| `DATABASE_URL` | `mysql://...` | 資料庫連接字符串 |
| `JWT_SECRET` | `a1b2c3d4...` | 隨機生成的密鑰 |
| `VITE_APP_ID` | `app_...` | Manus OAuth App ID |
| `OAUTH_SERVER_URL` | `https://api.manus.im` | 固定值 |
| `VITE_OAUTH_PORTAL_URL` | `https://portal.manus.im/login` | Manus 登入頁面 |
| `OWNER_OPEN_ID` | `user_...` | 教會管理員 ID |
| `OWNER_NAME` | `竹南勝利堂` | 教會名稱 |
| `BUILT_IN_FORGE_API_KEY` | `sk_live_...` | 服務端 API 密鑰 |
| `BUILT_IN_FORGE_API_URL` | `https://api.manus.im/forge` | 固定值 |
| `VITE_FRONTEND_FORGE_API_KEY` | `pk_live_...` | 前端 API 密鑰 |
| `VITE_FRONTEND_FORGE_API_URL` | `https://api.manus.im/forge` | 固定值 |

---

## 驗證環境變數

### 方法 1：檢查部署日誌

1. 在 Cloudflare Pages 中，點擊「Deployments」
2. 點擊最新的部署
3. 查看「Build log」
4. 搜索環境變數相關的信息

### 方法 2：檢查應用程序日誌

1. 訪問您的網站
2. 打開開發者工具（按 `F12`）
3. 點擊「Console」標籤
4. 查看是否有與環境變數相關的錯誤

### 方法 3：測試 API 連接

1. 訪問您的網站
2. 嘗試使用需要 API 的功能（例如：登入、提交表單）
3. 如果功能正常工作，說明環境變數配置正確

---

## 環境變數安全最佳實踐

### ✅ 應該做的事

| 做法 | 說明 |
|------|------|
| **使用 Cloudflare Secrets** | 在 Cloudflare 中安全地存儲敏感信息 |
| **定期更換密鑰** | 每 3-6 個月更換一次 API 密鑰 |
| **限制密鑰權限** | 只授予密鑰必要的權限 |
| **監控密鑰使用** | 定期檢查 API 密鑰的使用情況 |
| **使用不同的密鑰** | 開發、測試、生產環境使用不同的密鑰 |

### ❌ 不應該做的事

| 做法 | 原因 |
|------|------|
| **在代碼中硬編碼密鑰** | 會被提交到 Git，造成安全風險 |
| **在 Git 提交中包含 .env 文件** | 敏感信息會被暴露 |
| **在公開場合分享密鑰** | 任何人都可以使用您的密鑰 |
| **使用相同的密鑰在多個環境** | 如果一個環境被破壞，所有環境都會受影響 |
| **在日誌中記錄密鑰** | 日誌可能被其他人訪問 |

---

## 常見問題

### Q1：我忘記了某個環境變數的值怎麼辦？

**A：**
1. 聯絡相應服務的提供商（例如：資料庫提供商、Manus 支持）
2. 重新生成或獲取該值
3. 在 Cloudflare 中更新環境變數
4. 重新部署網站

### Q2：環境變數值包含特殊字符怎麼辦？

**A：**
1. 在 Cloudflare 中，特殊字符通常不需要轉義
2. 如果包含引號，可以使用反斜杠轉義：`\"`
3. 如果仍然有問題，嘗試使用 Base64 編碼

### Q3：如何測試環境變數是否正確設置？

**A：**
1. 在應用程序中添加調試代碼：
   ```javascript
   console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
   ```
2. 部署後檢查控制台輸出
3. 或者嘗試使用依賴環境變數的功能

### Q4：環境變數更改後需要重新部署嗎？

**A：** 是的，需要重新部署。執行以下操作之一：
1. 在 Cloudflare Pages 中點擊「Retry deployment」
2. 進行新的 Git push（即使沒有代碼更改）

### Q5：如何在本地開發中使用相同的環境變數？

**A：**
1. 在項目根目錄創建 `.env.local` 文件
2. 添加相同的環境變數：
   ```
   DATABASE_URL=mysql://...
   JWT_SECRET=a1b2c3d4...
   ```
3. 確保 `.env.local` 在 `.gitignore` 中
4. 重新啟動開發服務器

---

## 總結

✅ 您已經學會了：
1. 什麼是環境變數以及為什麼需要它們
2. 如何獲取每個環境變數的值
3. 如何在 Cloudflare 中設置環境變數
4. 如何驗證環境變數是否正確配置
5. 環境變數安全最佳實踐

🎉 您的 Cloudflare Pages 部署現在已經配置完整了！

---

## 需要幫助？

如果您遇到問題：
1. 查看本指南的常見問題部分
2. 檢查 Cloudflare 官方文檔：`https://developers.cloudflare.com/pages/platform/build-configuration/`
3. 聯絡相應服務的技術支持
4. 查看應用程序日誌以了解具體錯誤

祝您使用愉快！🚀
