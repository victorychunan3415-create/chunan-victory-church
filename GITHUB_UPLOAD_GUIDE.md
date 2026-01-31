# 竹南勝利堂網站 - GitHub 上傳完全指南

## 📋 目錄
1. [準備工作](#準備工作)
2. [安裝必要工具](#安裝必要工具)
3. [第一次上傳到 GitHub](#第一次上傳到-github)
4. [之後如何更新代碼](#之後如何更新代碼)
5. [常見問題](#常見問題)

---

## 準備工作

### 您需要準備的東西：
1. **GitHub 帳號** - 如果沒有，請先到 [github.com](https://github.com) 註冊一個免費帳號
2. **電腦** - Windows、Mac 或 Linux 都可以
3. **網路連接** - 用來上傳代碼

### 第一步：建立 GitHub 倉庫（Repository）

1. 登入 GitHub 帳號
2. 點擊右上角的 **「+」** 符號
3. 選擇 **「New repository」**（新建倉庫）
4. 填寫以下信息：
   - **Repository name**（倉庫名稱）：輸入 `chunan-victory-church`
   - **Description**（描述）：輸入 `竹南勝利堂官方網站`
   - **Visibility**（可見性）：選擇 **「Public」**（公開）- 這樣別人可以看到您的代碼
5. **不要勾選** 「Initialize this repository with a README」
6. 點擊 **「Create repository」** 按鈕

✅ 完成！您現在有了一個空的 GitHub 倉庫

---

## 安裝必要工具

### 步驟 1：安裝 Git

**什麼是 Git？** Git 是一個版本控制工具，讓您可以上傳和管理代碼。

#### 在 Windows 上安裝：
1. 訪問 [git-scm.com](https://git-scm.com)
2. 點擊 **「Download」** 按鈕
3. 下載 Windows 版本
4. 雙擊安裝程序，一直點擊 **「Next」** 直到完成

#### 在 Mac 上安裝：
1. 打開 **Terminal**（終端）
2. 複製並粘貼以下命令：
   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. 按 Enter 鍵
4. 然後輸入：
   ```
   brew install git
   ```

#### 在 Linux 上安裝：
```bash
sudo apt-get install git
```

### 步驟 2：驗證 Git 安裝成功

1. **Windows 用戶**：
   - 按 **Windows 鍵 + R**
   - 輸入 `cmd` 並按 Enter
   - 在黑色窗口中輸入 `git --version`

2. **Mac/Linux 用戶**：
   - 打開 **Terminal**（終端）
   - 輸入 `git --version`

✅ 如果顯示版本號（例如 `git version 2.40.0`），表示安裝成功

### 步驟 3：配置 Git

在終端或命令提示符中輸入以下命令（將信息替換為您的）：

```bash
git config --global user.name "您的名字"
git config --global user.email "您的郵箱@gmail.com"
```

例如：
```bash
git config --global user.name "李牧師"
git config --global user.email "pastor@example.com"
```

---

## 第一次上傳到 GitHub

### 步驟 1：準備項目文件夾

1. 在電腦上找到 `chunan-victory-church` 文件夾
2. 記住這個文件夾的完整路徑（例如：`C:\Users\YourName\Documents\chunan-victory-church`）

### 步驟 2：打開終端並進入項目文件夾

**Windows 用戶：**
1. 在文件夾中按 **Shift + 右鍵**
2. 選擇 **「在此處打開 PowerShell 窗口」** 或 **「在此處打開命令窗口」**

**Mac/Linux 用戶：**
1. 打開 **Terminal**（終端）
2. 輸入 `cd ` 然後將文件夾拖入終端窗口
3. 按 Enter

### 步驟 3：初始化 Git 倉庫

在終端中輸入以下命令：

```bash
git init
```

這會在您的項目文件夾中建立一個隱藏的 `.git` 文件夾。

### 步驟 4：添加所有文件

```bash
git add .
```

這個命令會添加項目中的所有文件到 Git。

### 步驟 5：建立第一個提交（Commit）

```bash
git commit -m "Initial commit: 竹南勝利堂官方網站"
```

**說明：** 
- `commit` 表示保存一個版本
- `-m` 表示添加一條消息
- 引號內的文字是說明這次保存的內容

### 步驟 6：連接到 GitHub 倉庫

回到 GitHub，您剛建立的倉庫頁面會顯示一些命令。複製以下命令（將 `your-username` 替換為您的 GitHub 用戶名）：

```bash
git remote add origin https://github.com/your-username/chunan-victory-church.git
git branch -M main
git push -u origin main
```

在終端中逐行輸入這些命令。

**第一次會要求您輸入 GitHub 用戶名和密碼：**
- 用戶名：輸入您的 GitHub 用戶名
- 密碼：輸入您的 GitHub 密碼（或 Personal Access Token）

> **提示：** 如果您使用了雙因素認證，需要使用 Personal Access Token 而不是密碼。詳見常見問題。

### 步驟 7：驗證上傳成功

1. 刷新 GitHub 頁面
2. 您應該能看到所有的項目文件已經上傳到 GitHub

✅ 恭喜！您已成功上傳代碼到 GitHub！

---

## 之後如何更新代碼

每當您修改了代碼或文件後，按照以下步驟更新 GitHub：

### 快速更新步驟（3 步）

**步驟 1：進入項目文件夾**
```bash
cd /path/to/chunan-victory-church
```

**步驟 2：提交更改**
```bash
git add .
git commit -m "更新說明：例如 '修改首頁文字'"
```

**步驟 3：上傳到 GitHub**
```bash
git push
```

完成！您的更改已上傳到 GitHub。

---

## 常見問題

### Q1：我忘記了 GitHub 密碼怎麼辦？

**A：** 
1. 訪問 [github.com/login](https://github.com/login)
2. 點擊 **「Forgot password?」**（忘記密碼？）
3. 按照郵件指示重設密碼

### Q2：上傳時出現「Permission denied」錯誤

**A：** 這通常是因為 GitHub 帳號設置了雙因素認證。您需要使用 Personal Access Token：

1. 登入 GitHub
2. 點擊右上角頭像 → **Settings**（設置）
3. 左側選擇 **Developer settings**（開發者設置）
4. 選擇 **Personal access tokens**（個人訪問令牌）
5. 點擊 **Generate new token**（生成新令牌）
6. 勾選 `repo` 權限
7. 點擊 **Generate token**（生成令牌）
8. 複製生成的令牌
9. 上傳時用這個令牌代替密碼

### Q3：我想刪除已上傳的敏感信息

**A：** 
1. 確保您的 `.gitignore` 文件包含了敏感文件（如 `.env`）
2. 如果已經上傳了敏感文件，需要從 GitHub 歷史中刪除：
   ```bash
   git rm --cached .env
   git commit -m "Remove .env file"
   git push
   ```

### Q4：如何查看上傳歷史？

**A：** 在 GitHub 倉庫頁面上，點擊 **「Commits」** 標籤可以看到所有的上傳記錄。

### Q5：多個人如何協作開發？

**A：** 
1. 倉庫所有者邀請其他人為協作者：
   - 進入倉庫 → **Settings**（設置）
   - 左側選擇 **Collaborators**（協作者）
   - 點擊 **Add people**（添加人員）
   - 輸入協作者的 GitHub 用戶名

2. 協作者需要先 clone（克隆）倉庫到本地：
   ```bash
   git clone https://github.com/your-username/chunan-victory-church.git
   ```

---

## 📝 總結

| 操作 | 命令 |
|------|------|
| 第一次初始化 | `git init` |
| 添加所有文件 | `git add .` |
| 提交更改 | `git commit -m "說明"` |
| 連接到 GitHub | `git remote add origin https://...` |
| 第一次上傳 | `git push -u origin main` |
| 之後上傳 | `git push` |
| 查看狀態 | `git status` |
| 查看日誌 | `git log` |

---

## 🎉 下一步

上傳到 GitHub 後，您可以：
1. 在 Cloudflare 中部署網站
2. 設置自動部署（CI/CD）
3. 邀請其他人協作

祝您上傳順利！如有問題，請參考 [GitHub 官方文檔](https://docs.github.com)。
