# Cloudflare Pages 環境變數設置 - 詳細視覺化步驟指南

## 📋 快速導覽

本指南將逐個為您講解如何設置 11 個環境變數。

---

## 前置準備

### 準備您需要的信息

在開始設置前，請準備以下信息。您可以在本文檔下方的「**信息收集表**」中填寫：

1. **DATABASE_URL** - 資料庫連接字符串
2. **JWT_SECRET** - JWT 簽名密鑰
3. **VITE_APP_ID** - OAuth App ID
4. **OAUTH_SERVER_URL** - `https://api.manus.im`（固定值）
5. **VITE_OAUTH_PORTAL_URL** - OAuth 登入頁面 URL
6. **OWNER_OPEN_ID** - 教會管理員 ID
7. **OWNER_NAME** - `竹南勝利堂`（可自訂）
8. **BUILT_IN_FORGE_API_KEY** - 服務端 API 密鑰
9. **BUILT_IN_FORGE_API_URL** - `https://api.manus.im/forge`（固定值）
10. **VITE_FRONTEND_FORGE_API_KEY** - 前端 API 密鑰
11. **VITE_FRONTEND_FORGE_API_URL** - `https://api.manus.im/forge`（固定值）

### 信息收集表

請在此填寫您的信息（可複製此表到文本編輯器中填寫）：

```
1. DATABASE_URL = 
2. JWT_SECRET = 
3. VITE_APP_ID = 
4. OAUTH_SERVER_URL = https://api.manus.im
5. VITE_OAUTH_PORTAL_URL = 
6. OWNER_OPEN_ID = 
7. OWNER_NAME = 竹南勝利堂
8. BUILT_IN_FORGE_API_KEY = 
9. BUILT_IN_FORGE_API_URL = https://api.manus.im/forge
10. VITE_FRONTEND_FORGE_API_KEY = 
11. VITE_FRONTEND_FORGE_API_URL = https://api.manus.im/forge
```

---

## 第一步：登入 Cloudflare Dashboard

### 步驟 1.1：打開 Cloudflare 網站

1. 打開您的網頁瀏覽器
2. 在地址欄輸入：`https://dash.cloudflare.com`
3. 按下 Enter 鍵

### 步驟 1.2：登入您的帳號

1. 在登入頁面輸入您的電子郵件地址
2. 輸入您的密碼
3. 點擊「Sign in」按鈕

您應該看到 Cloudflare Dashboard 首頁。

---

## 第二步：進入 Pages 項目

### 步驟 2.1：點擊 Pages

1. 在 Cloudflare Dashboard 中
2. 在左側菜單中找到「Pages」
3. 點擊「Pages」

### 步驟 2.2：選擇您的項目

1. 您應該看到「chunan-victory-church」項目
2. 點擊該項目名稱進入項目詳情頁面

### 步驟 2.3：進入 Settings

1. 在項目頁面頂部，您會看到幾個標籤
2. 找到並點擊「Settings」標籤

---

## 第三步：進入環境變數設置

### 步驟 3.1：找到 Environment variables

1. 在 Settings 頁面的左側菜單中
2. 找到「Environment variables」選項
3. 點擊「Environment variables」

您現在應該看到「Environment variables」頁面，其中可能已有一些變數。

---

## 第四步：逐個添加環境變數

### 重要提示

- 環境變數名稱**區分大小寫**（例如：`DATABASE_URL` 不同於 `database_url`）
- 確保複製變數值時沒有多餘的空格
- 每個變數都需要單獨添加

---

## 環境變數 1：DATABASE_URL

### 步驟 1：點擊「Add variable」

在「Environment variables」頁面中，點擊「Add variable」按鈕。

### 步驟 2：填寫變數名稱

1. 在「Variable name」欄中輸入：
   ```
   DATABASE_URL
   ```

### 步驟 3：填寫變數值

1. 在「Value」欄中輸入您的資料庫連接字符串
2. 格式應該是：
   ```
   mysql://username:password@host:port/database_name
   ```
3. 例如：
   ```
   mysql://root:MyPassword123@db.example.com:3306/chunan_victory
   ```

### 步驟 4：選擇環境

1. 在「Environments」下拉菜單中
2. 選擇「Production」（生產環境）

### 步驟 5：保存

點擊「Save」按鈕。

您應該看到成功提示，`DATABASE_URL` 已添加到列表中。

---

## 環境變數 2：JWT_SECRET

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
JWT_SECRET
```

### 步驟 3：填寫變數值

輸入您生成的 JWT 密鑰（32 個字符的隨機字符串）。

例如：
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

**如果您還沒有生成 JWT_SECRET，請使用以下方法：**

**在線生成工具：**
1. 訪問 `https://generate-random.org/`
2. 設置長度為 32
3. 點擊「Generate」
4. 複製生成的字符串

**或使用命令行（Mac/Linux）：**
```bash
openssl rand -base64 32
```

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 3：VITE_APP_ID

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
VITE_APP_ID
```

### 步驟 3：填寫變數值

輸入您的 Manus OAuth App ID。

例如：
```
app_1234567890abcdef
```

**如何獲取 VITE_APP_ID：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「OAuth Applications」
3. 找到您的應用程序
4. 複製「App ID」欄位的值

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 4：OAUTH_SERVER_URL

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
OAUTH_SERVER_URL
```

### 步驟 3：填寫變數值

這是一個固定值，輸入：
```
https://api.manus.im
```

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 5：VITE_OAUTH_PORTAL_URL

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
VITE_OAUTH_PORTAL_URL
```

### 步驟 3：填寫變數值

輸入 Manus 登入頁面 URL。

例如：
```
https://portal.manus.im/login
```

**如何獲取 VITE_OAUTH_PORTAL_URL：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「OAuth Applications」
3. 找到「Portal URL」或「Login URL」
4. 複製該 URL

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 6：OWNER_OPEN_ID

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
OWNER_OPEN_ID
```

### 步驟 3：填寫變數值

輸入教會管理員的 Manus Open ID。

例如：
```
user_9876543210fedcba
```

**如何獲取 OWNER_OPEN_ID：**
1. 登入 Manus 控制面板
2. 進入「Account Settings」或「Profile」
3. 找到「Open ID」或「User ID」
4. 複製該 ID

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 7：OWNER_NAME

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
OWNER_NAME
```

### 步驟 3：填寫變數值

輸入教會名稱：
```
竹南勝利堂
```

您可以根據需要修改此值。

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 8：BUILT_IN_FORGE_API_KEY

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
BUILT_IN_FORGE_API_KEY
```

### 步驟 3：填寫變數值

輸入 Manus 服務端 API 密鑰。

例如：
```
sk_live_abcdef1234567890ghijkl
```

**如何獲取 BUILT_IN_FORGE_API_KEY：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「API Keys」
3. 找到「Server-side API Key」或「Backend API Key」
4. 複製該密鑰

⚠️ **重要：** 這是一個敏感的密鑰，不要在任何地方分享。

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 9：BUILT_IN_FORGE_API_URL

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
BUILT_IN_FORGE_API_URL
```

### 步驟 3：填寫變數值

這是一個固定值，輸入：
```
https://api.manus.im/forge
```

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 10：VITE_FRONTEND_FORGE_API_KEY

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
VITE_FRONTEND_FORGE_API_KEY
```

### 步驟 3：填寫變數值

輸入 Manus 前端 API 密鑰。

例如：
```
pk_live_mnopqr7890abcdefghijkl
```

**如何獲取 VITE_FRONTEND_FORGE_API_KEY：**
1. 登入 Manus 控制面板
2. 進入「Settings」→「API Keys」
3. 找到「Frontend API Key」或「Client-side API Key」
4. 複製該密鑰

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 環境變數 11：VITE_FRONTEND_FORGE_API_URL

### 步驟 1：點擊「Add variable」

### 步驟 2：填寫變數名稱

```
VITE_FRONTEND_FORGE_API_URL
```

### 步驟 3：填寫變數值

這是一個固定值，輸入：
```
https://api.manus.im/forge
```

### 步驟 4：選擇環境

選擇「Production」

### 步驟 5：保存

點擊「Save」按鈕。

---

## 第五步：驗證所有環境變數

### 步驟 1：檢查列表

完成添加所有 11 個環境變數後，您應該看到以下列表：

```
✓ DATABASE_URL
✓ JWT_SECRET
✓ VITE_APP_ID
✓ OAUTH_SERVER_URL
✓ VITE_OAUTH_PORTAL_URL
✓ OWNER_OPEN_ID
✓ OWNER_NAME
✓ BUILT_IN_FORGE_API_KEY
✓ BUILT_IN_FORGE_API_URL
✓ VITE_FRONTEND_FORGE_API_KEY
✓ VITE_FRONTEND_FORGE_API_URL
```

### 步驟 2：確認環境

確保所有變數都設置在「Production」環境中。

### 步驟 3：檢查變數值

1. 點擊每個變數
2. 確認值正確且完整
3. 沒有多餘的空格或特殊字符

---

## 第六步：重新部署

環境變數設置完成後，需要重新部署以應用這些變數。

### 方法 1：使用 Cloudflare Pages 重新部署

1. 返回「Deployments」標籤
2. 找到最新的部署
3. 點擊「Retry deployment」按鈕
4. 等待部署完成（通常 5-10 分鐘）

### 方法 2：進行新的 Git Push

在本地執行以下命令：

```bash
git add .
git commit -m "Update: 環境變數配置完成"
git push origin main
```

Cloudflare 會自動檢測到更新，並開始新的部署。

---

## 第七步：驗證環境變數是否生效

### 步驟 1：等待部署完成

1. 在「Deployments」標籤中查看部署狀態
2. 等待狀態變為「Success」

### 步驟 2：訪問網站

1. 訪問 `https://chunan-victory-church.pages.dev`
2. 或訪問您的自訂域名
3. 等待頁面加載

### 步驟 3：測試功能

1. 嘗試登入後台管理
2. 嘗試提交表單
3. 檢查是否有錯誤信息

### 步驟 4：檢查控制台

1. 打開開發者工具（按 F12）
2. 點擊「Console」標籤
3. 查看是否有與環境變數相關的錯誤

---

## 常見錯誤和解決方案

### 錯誤 1：「Cannot connect to database」

**原因：** `DATABASE_URL` 不正確或資料庫不可訪問

**解決方案：**
1. 檢查 `DATABASE_URL` 值是否正確
2. 確保資料庫服務器在線
3. 確保 Cloudflare 服務器可以訪問您的資料庫
4. 檢查資料庫用戶名和密碼

### 錯誤 2：「Invalid OAuth configuration」

**原因：** `VITE_APP_ID` 或 `OAUTH_SERVER_URL` 不正確

**解決方案：**
1. 檢查 `VITE_APP_ID` 是否正確複製
2. 確保 `OAUTH_SERVER_URL` 是 `https://api.manus.im`
3. 在 Manus 控制面板中驗證 App ID

### 錯誤 3：「API key is invalid」

**原因：** API 密鑰不正確或已過期

**解決方案：**
1. 檢查 `BUILT_IN_FORGE_API_KEY` 和 `VITE_FRONTEND_FORGE_API_KEY` 是否正確
2. 確保密鑰未過期
3. 在 Manus 控制面板中重新生成密鑰（如需要）

### 錯誤 4：「Environment variable not found」

**原因：** 環境變數名稱拼寫錯誤或未設置

**解決方案：**
1. 檢查變數名稱是否完全匹配（區分大小寫）
2. 確保變數已在 Cloudflare 中設置
3. 重新部署以應用環境變數

### 錯誤 5：「部署失敗」

**原因：** 環境變數值包含特殊字符或格式不正確

**解決方案：**
1. 檢查變數值是否包含多餘的空格
2. 確保特殊字符正確轉義
3. 查看部署日誌以了解具體錯誤

---

## 快速參考表

| # | 變數名稱 | 值 | 類型 | 固定值 |
|---|---------|-----|------|--------|
| 1 | DATABASE_URL | mysql://... | 連接字符串 | ❌ |
| 2 | JWT_SECRET | a1b2c3d4... | 隨機密鑰 | ❌ |
| 3 | VITE_APP_ID | app_... | OAuth ID | ❌ |
| 4 | OAUTH_SERVER_URL | https://api.manus.im | URL | ✅ |
| 5 | VITE_OAUTH_PORTAL_URL | https://portal.manus.im/login | URL | ❌ |
| 6 | OWNER_OPEN_ID | user_... | 用戶 ID | ❌ |
| 7 | OWNER_NAME | 竹南勝利堂 | 文本 | ❌ |
| 8 | BUILT_IN_FORGE_API_KEY | sk_live_... | API 密鑰 | ❌ |
| 9 | BUILT_IN_FORGE_API_URL | https://api.manus.im/forge | URL | ✅ |
| 10 | VITE_FRONTEND_FORGE_API_KEY | pk_live_... | API 密鑰 | ❌ |
| 11 | VITE_FRONTEND_FORGE_API_URL | https://api.manus.im/forge | URL | ✅ |

---

## 檢查清單

在完成所有設置後，請確認以下項目：

- [ ] 所有 11 個環境變數都已添加
- [ ] 所有變數都設置在「Production」環境
- [ ] 變數名稱完全匹配（區分大小寫）
- [ ] 變數值正確且完整
- [ ] 沒有多餘的空格或特殊字符
- [ ] 已重新部署網站
- [ ] 部署狀態顯示「Success」
- [ ] 網站可以訪問
- [ ] 沒有環境變數相關的錯誤

---

## 總結

✅ 您已經成功設置了所有 11 個環境變數！

🎉 您的 Cloudflare Pages 部署現在已經完全配置，可以開始使用了。

---

## 需要幫助？

如果您遇到問題：
1. 查看本指南的「常見錯誤和解決方案」部分
2. 檢查 Cloudflare 官方文檔
3. 查看部署日誌以了解具體錯誤
4. 聯絡 Manus 技術支持

祝您使用愉快！🚀
