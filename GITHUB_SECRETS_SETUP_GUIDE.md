# 📚 GitHub Secrets 設置詳細指南

> 本指南說明如何在 GitHub 中設置 Cloudflare 部署所需的 Secrets。

---

## 📋 目錄

1. [什麼是 Secrets？](#什麼是-secrets)
2. [需要設置的三個 Secrets](#需要設置的三個-secrets)
3. [第一步：獲取 Cloudflare API Token](#第一步獲取-cloudflare-api-token)
4. [第二步：獲取 Cloudflare Account ID](#第二步獲取-cloudflare-account-id)
5. [第三步：在 GitHub 中設置 Secrets](#第三步在-github-中設置-secrets)
6. [驗證設置成功](#驗證設置成功)

---

## 什麼是 Secrets？

**Secrets** 是 GitHub 用來安全存儲敏感信息的功能。例如：
- API 令牌
- 密碼
- 帳號 ID
- 其他機密信息

GitHub Actions 在運行時可以訪問這些 Secrets，但不會在日誌中顯示它們的實際值。

---

## 需要設置的三個 Secrets

### Secret 1：CLOUDFLARE_API_TOKEN

| 項目 | 值 |
|------|-----|
| **Secret Name** | `CLOUDFLARE_API_TOKEN` |
| **Secret Value** | 您從 Cloudflare 生成的 API Token |
| **用途** | 授權 GitHub Actions 訪問您的 Cloudflare 帳號 |

### Secret 2：CLOUDFLARE_ACCOUNT_ID

| 項目 | 值 |
|------|-----|
| **Secret Name** | `CLOUDFLARE_ACCOUNT_ID` |
| **Secret Value** | 您的 Cloudflare 帳號 ID（通常是一個 32 位的字符串） |
| **用途** | 告訴 GitHub Actions 要部署到哪個 Cloudflare 帳號 |

### Secret 3：CLOUDFLARE_PROJECT_NAME

| 項目 | 值 |
|------|-----|
| **Secret Name** | `CLOUDFLARE_PROJECT_NAME` |
| **Secret Value** | `chunan-victory-church` |
| **用途** | 告訴 GitHub Actions 要部署到哪個 Pages 項目 |

---

## 第一步：獲取 Cloudflare API Token

### 1.1 進入 Cloudflare API Tokens 頁面

1. 打開瀏覽器
2. 進入 `https://dash.cloudflare.com/profile/api-tokens`
3. 您應該看到「API Tokens」頁面

### 1.2 建立新的 API Token

1. 點擊「Create Token」按鈕
2. 您應該看到幾個預設模板
3. 找到「Edit Cloudflare Workers」模板
4. 點擊「Use template」

### 1.3 配置 Token 權限

頁面會顯示 Token 的權限設定。確保包含：
- ✅ **Account Resources** → **Cloudflare Pages**
- ✅ **Permission** → **Edit**

### 1.4 複製 Token

1. 點擊「Create Token」
2. 頁面會顯示生成的 Token（一個很長的字符串）
3. **立即複製它**（頁面只會顯示一次）
4. 將它保存在安全的地方

**示例 Token 格式：**
```
v1.0d3f4a5b6c7d8e9f0a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z
```

---

## 第二步：獲取 Cloudflare Account ID

### 2.1 進入 Cloudflare Dashboard

1. 打開瀏覽器
2. 進入 `https://dash.cloudflare.com`
3. 登入您的帳號

### 2.2 找到 Account ID

**方法 1：在頁面右下角**
1. 進入 Dashboard 首頁
2. 向下滾動到頁面底部
3. 您應該看到「Account ID」

**方法 2：在帳號設定中**
1. 點擊右上角的用戶頭像
2. 選擇「Account Settings」（帳號設定）
3. 在「Account」部分找到「Account ID」

### 2.3 複製 Account ID

1. 找到 Account ID 後
2. 點擊「Copy」按鈕（或手動複製）
3. 將它保存在安全的地方

**示例 Account ID 格式：**
```
a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
```

---

## 第三步：在 GitHub 中設置 Secrets

### 3.1 進入 GitHub Repository 設定

1. 打開瀏覽器
2. 進入您的 GitHub Repository：`https://github.com/your-username/chunan-victory-church`
3. 點擊「Settings」（設定）標籤

### 3.2 進入 Secrets 頁面

1. 在左側菜單中找到「Secrets and variables」
2. 點擊它
3. 您應該看到子菜單
4. 點擊「Actions」

### 3.3 建立第一個 Secret：CLOUDFLARE_API_TOKEN

1. 點擊「New repository secret」按鈕
2. 您應該看到一個表單：

```
Name: [輸入框]
Secret: [輸入框]
```

3. 在「Name」欄位輸入：
```
CLOUDFLARE_API_TOKEN
```

4. 在「Secret」欄位輸入：
```
[您從 Cloudflare 複製的 API Token]
```

5. 點擊「Add secret」

✅ **第一個 Secret 已建立！**

### 3.4 建立第二個 Secret：CLOUDFLARE_ACCOUNT_ID

1. 再次點擊「New repository secret」
2. 在「Name」欄位輸入：
```
CLOUDFLARE_ACCOUNT_ID
```

3. 在「Secret」欄位輸入：
```
[您從 Cloudflare 複製的 Account ID]
```

4. 點擊「Add secret」

✅ **第二個 Secret 已建立！**

### 3.5 建立第三個 Secret：CLOUDFLARE_PROJECT_NAME

1. 再次點擊「New repository secret」
2. 在「Name」欄位輸入：
```
CLOUDFLARE_PROJECT_NAME
```

3. 在「Secret」欄位輸入：
```
chunan-victory-church
```

4. 點擊「Add secret」

✅ **第三個 Secret 已建立！**

---

## 驗證設置成功

### 4.1 檢查 Secrets 列表

1. 進入「Secrets and variables」→「Actions」
2. 您應該看到三個 Secrets：
   - ✅ `CLOUDFLARE_API_TOKEN`
   - ✅ `CLOUDFLARE_ACCOUNT_ID`
   - ✅ `CLOUDFLARE_PROJECT_NAME`

### 4.2 推送修改到 GitHub

1. 打開 GitHub Desktop
2. 確保 `.github/workflows/deploy.yml` 已修改
3. 提交並推送到 GitHub

### 4.3 查看 GitHub Actions 運行

1. 進入 GitHub Repository
2. 點擊「Actions」標籤
3. 您應該看到最新的工作流運行
4. 等待 10-15 分鐘完成

### 4.4 檢查部署結果

1. 如果所有步驟都成功，您應該看到：
   - ✅ 工作流狀態：「Success」（綠色對勾）
   - ✅ Cloudflare Pages 顯示部署成功

---

## 常見問題

### Q1：Secret Name 和 Secret Value 有什麼區別？

**A：**
- **Secret Name** = 標籤名稱（在 GitHub Actions 中使用）
  - 例如：`CLOUDFLARE_API_TOKEN`
  - 必須完全匹配工作流文件中的名稱

- **Secret Value** = 實際的敏感信息
  - 例如：您的 API Token 或 Account ID
  - GitHub 會加密存儲，不會在日誌中顯示

### Q2：我可以修改 Secret Name 嗎？

**A：** 不建議。Secret Name 必須與工作流文件中的名稱完全匹配。如果您修改了 Secret Name，需要同時修改工作流文件。

### Q3：我忘記了 API Token 怎麼辦？

**A：** 
1. 進入 `https://dash.cloudflare.com/profile/api-tokens`
2. 找到您建立的 Token
3. 點擊「Roll」重新生成新的 Token
4. 複製新的 Token
5. 在 GitHub 中更新 `CLOUDFLARE_API_TOKEN` Secret

### Q4：Secret 被洩露了怎麼辦？

**A：**
1. 立即進入 Cloudflare 並撤銷該 Token
2. 生成新的 Token
3. 在 GitHub 中更新 Secret

### Q5：為什麼部署仍然失敗？

**A：** 可能的原因：
- Secret Name 拼寫錯誤
- Secret Value 不完整或有空格
- API Token 已過期或被撤銷
- Account ID 不正確

---

## 快速參考

### 三個 Secrets 的完整清單

| # | Secret Name | Secret Value | 來源 |
|---|------------|-------------|------|
| 1 | `CLOUDFLARE_API_TOKEN` | 您的 API Token | Cloudflare API Tokens 頁面 |
| 2 | `CLOUDFLARE_ACCOUNT_ID` | 您的 Account ID | Cloudflare Dashboard |
| 3 | `CLOUDFLARE_PROJECT_NAME` | `chunan-victory-church` | 固定值 |

---

## 下一步

設置完成後：

1. **推送修改** - 使用 GitHub Desktop 推送 `.github/workflows/deploy.yml`
2. **監控部署** - 在 GitHub Actions 中查看運行狀態
3. **驗證網站** - 訪問您的網站檢查是否正常運行

---

**祝您設置順利！🎉**
