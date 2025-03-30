# react-web-app-with-openai

# [https://bit.ly/ntu-ai-web-4](https://bit.ly/ntu-ai-web-4)

安裝所需套件
```
npm i
```

啟動開發伺服器
```
npm run dev
```

## 環境變數範例

.env
```
OPENAI_API_KEY=
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
FIREBASE_CLIENT_ID=
```

## 安裝Git

1. 至 [Git官方網站](https://www.git-scm.com/) 下載並且安裝 Git
2. 設定使用者名稱與Email

```
git config --global user.name "你的使用者名稱"
git config --global user.email 你的EMAIL
```

## 更新至Github
```
git add .
git commit -m "這次所執行的變更"
git push origin main
```
=====================================
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/ouyangkiwi/good-material-website.git
git push -u origin main

#git 指令
git status 檢視目前所在的分支相關資訊

git checkout 分支名稱 
==>切換分支

git chekout man  
==>切換到main分支

git checkout feature/add-firebase  
==>切換到feature/add-firebase分支

git checkout -b xxxx 
==>新增想要的分支名稱

git checkout -b hotfix 
下分支給xxx君來做
git checkout -b feature/add-tts-and-widget-ui

git checkout -a 
==>列出所有分支

git push origin HEAD
//當工作成果完成後把分支推到github 
import OpenAI from "openai";

const openai = new OpenAI();
const speechFile = path.resolve("./speech.mp3");

const mp3 = await openai.audio.speech.create({
  model: "gpt-4o-mini-tts",
  voice: "coral",
  input: "Today is a wonderful day to build something people love!",
  instructions: "Speak in a cheerful and positive tone.",
});

const buffer = Buffer.from(await mp3.arrayBuffer());