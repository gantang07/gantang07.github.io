---
layout: ../../layouts/PostLayout.astro
title: 从零开始搭建 GitHub Pages 个人网站（小白教程）
description: 超详细的小白教程，完全不懂代码也能跟着做，从零开始搭建一个属于你自己的个人网站，免费托管在 GitHub Pages 上。
author: gantang07
currentPage: docs
tags:
  - 教程
  - GitHub Pages
  - Astro
  - 网站搭建
---

# 从零开始搭建 GitHub Pages 个人网站（小白教程）

> 完全不懂代码也能看懂的超详细教程，跟着做就能搭出和我一样的网站！

---

## 📖 前言

你是不是也想有一个自己的个人网站？可以放作品集、写博客、分享技术文档，甚至发布自己做的小游戏？

这篇教程就是为你准备的！**完全不需要懂代码**，只要会复制粘贴，跟着步骤一步步来，就能搭出一个属于你自己的个人网站。

### 这篇教程能帮你做到什么？

- ✅ 免费拥有一个自己的个人网站（永久免费，没有广告）
- ✅ 网站地址是 `你的用户名.github.io`，很酷有没有
- ✅ 网站包含首页、博客、文档、游戏等多个板块
- ✅ 支持电脑和手机访问（响应式设计）
- ✅ 支持深色模式（自动跟随系统）
- ✅ 以后想更新内容，直接在网页上改就行

### 你需要准备什么？

- 一台能上网的电脑
- 一个浏览器（Chrome、Edge、Firefox 都行）
- 一个邮箱地址（用来注册 GitHub 账号）
- 一点点耐心（整个过程大概 30-60 分钟）

准备好了吗？我们开始吧！

---

## 🚀 第一步：注册 GitHub 账号

GitHub 是一个代码托管平台，我们的网站就放在上面，而且是**完全免费**的。

### 1.1 打开 GitHub 官网

在浏览器地址栏输入：https://github.com/

### 1.2 点击注册

点击页面右上角的 **"Sign up"** 按钮。

### 1.3 填写注册信息

按照提示填写：
- **Username（用户名）**：这个很重要！你的网站地址会是 `用户名.github.io`，所以想一个好记的名字吧
- **Email（邮箱）**：填你常用的邮箱
- **Password（密码）**：设置一个安全的密码

然后按照提示完成验证（可能会有人机验证，按要求做就行）。

### 1.4 验证邮箱

注册完成后，GitHub 会给你发一封验证邮件，去邮箱里点一下验证链接就好。

✅ 完成这一步，你就有自己的 GitHub 账号了！

---

## 📦 第二步：创建仓库

仓库（Repository）就是存放网站文件的地方，我们需要创建一个特殊名字的仓库。

### 2.1 新建仓库

登录 GitHub 后，点击右上角的 **+** 号，选择 **"New repository"**。

### 2.2 填写仓库信息

- **Repository name（仓库名）**：**必须填** `你的用户名.github.io`
  - 比如你的用户名是 `zhangsan`，仓库名就必须是 `zhangsan.github.io`
  - 注意：必须和你的用户名完全一样，包括大小写！
- **Description（描述）**：随便填，比如"我的个人网站"
- **Public / Private**：选 **Public**（公开的，这样别人才能访问你的网站）
- **Initialize this repository with**：**什么都不要勾**，我们从空仓库开始

### 2.3 创建仓库

点击 **"Create repository"** 按钮。

✅ 仓库创建好了！现在你应该看到一个空仓库的页面。

---

## 🔑 第三步：生成 Personal Access Token

这个 Token 相当于一把钥匙，用来让 GitHub Actions 自动帮我们构建网站。

> 注意：这一步可以先跳过，等后面需要的时候再回来弄。不过建议现在就弄好，省得后面忘。

### 3.1 打开设置页面

点击右上角你的头像，选择 **"Settings"**。

### 3.2 找到 Developer settings

在左侧菜单最下面，找到 **"Developer settings"**，点进去。

### 3.3 生成新 Token

- 左侧菜单选择 **"Personal access tokens"** → **"Tokens (classic)"**
- 点击 **"Generate new token"** → **"Generate new token (classic)"**
- 可能会让你再次输入密码，输入就行

### 3.4 配置 Token

- **Note（备注）**：随便填，比如"网站部署"
- **Expiration（有效期）**：建议选 **90 days**（90天，比较安全）
- **Select scopes（权限）**：勾选这两个：
  - ✅ **repo**（全部勾上，点 repo 前面的方框就行）
  - ✅ **workflow**（在 repo 下面一点，也要勾上）

### 3.5 生成 Token

点击页面最下面的 **"Generate token"** 按钮。

### 3.6 保存 Token

⚠️ **非常重要！** 生成的 Token 只会显示这一次，一定要复制下来保存好！

它长这样：`ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

把它复制到记事本里存好，后面可能会用到。

✅ Token 生成好了！

---

## 📝 第四步：创建网站文件

现在我们要开始创建网站的文件了。别担心，不需要你写代码，只要复制粘贴就行。

我们需要创建这些文件：

```
你的仓库/
├── package.json
├── astro.config.mjs
├── .gitignore
├── public/
│   └── favicon.svg
├── src/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── games/
│   │   │   └── index.astro
│   │   ├── blog/
│   │   │   └── index.astro
│   │   ├── docs/
│   │   │   └── index.astro
│   │   └── novels/
│   │       └── index.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── components/
│   │   └── Navbar.astro
│   └── styles/
│       └── global.css
└── .github/
    └── workflows/
        └── deploy.yml
```

看起来很多？别慌，我们一个一个来创建。

### 怎么在 GitHub 网页上创建文件？

1. 在你的仓库页面，点击 **"Add file"** → **"Create new file"**
2. 在文件名那里输入文件路径（比如 `package.json`）
3. 把下面对应的代码复制粘贴到内容区
4. 拉到页面最下面，点击 **"Commit new file"**

就这么简单！我们开始吧。

---

### 4.1 创建 package.json

**文件名**：`package.json`

**内容**：

```json
{
  "name": "my-website",
  "type": "module",
  "version": "0.0.1",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "astro": "^4.0.0"
  }
}
```

复制上面的内容，粘贴进去，然后提交。

---

### 4.2 创建 astro.config.mjs

**文件名**：`astro.config.mjs`

**内容**：

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://你的用户名.github.io',
});
```

⚠️ 注意：把 `你的用户名` 改成你自己的 GitHub 用户名！

比如你的用户名是 `zhangsan`，就改成：
```javascript
site: 'https://zhangsan.github.io',
```

---

### 4.3 创建 .gitignore

**文件名**：`.gitignore`

**内容**：

```
# build output
dist/
.output/

# dependencies
node_modules/

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# environment variables
.env
.env.production

# macOS-specific files
.DS_Store
```

---

### 4.4 创建 public/favicon.svg

**文件名**：`public/favicon.svg`

**内容**：

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="50" cy="50" r="45" fill="url(#grad)"/>
  <text x="50" y="65" text-anchor="middle" fill="white" font-size="50" font-weight="bold" font-family="Arial, sans-serif">G</text>
</svg>
```

这是网站的图标，你可以后面再改成自己喜欢的。

---

### 4.5 创建 src/styles/global.css

**文件名**：`src/styles/global.css`

**内容**：

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --text-secondary: #6b7280;
  --primary-color: #3b82f6;
  --primary-hover: #2563eb;
  --card-bg: #ffffff;
  --card-border: #e5e7eb;
  --nav-bg: rgba(255, 255, 255, 0.8);
  --nav-border: #e5e7eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #0f172a;
    --text-color: #f1f5f9;
    --text-secondary: #94a3b8;
    --primary-color: #60a5fa;
    --primary-hover: #3b82f6;
    --card-bg: #1e293b;
    --card-border: #334155;
    --nav-bg: rgba(15, 23, 42, 0.8);
    --nav-border: #334155;
  }
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  background-color: var(--bg-color);
  color: var(--text-color);
  line-height: 1.6;
  transition: background-color 0.3s, color 0.3s;
}

a {
  color: var(--primary-color);
  text-decoration: none;
  transition: color 0.2s;
}

a:hover {
  color: var(--primary-hover);
}

/* 导航栏 */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--nav-border);
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.5rem;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-brand {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-color);
}

.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
}

.nav-links a {
  color: var(--text-secondary);
  font-weight: 500;
  padding: 0.5rem 0;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: var(--primary-color);
  border-bottom-color: var(--primary-color);
}

/* 主内容区 */
.main-content {
  max-width: 1000px;
  margin: 0 auto;
  padding: 3rem 1.5rem;
  min-height: calc(100vh - 64px - 80px);
}

/* 页脚 */
.footer {
  border-top: 1px solid var(--card-border);
  padding: 2rem 1.5rem;
  text-align: center;
  color: var(--text-secondary);
  font-size: 0.875rem;
}

/* 首页 Hero */
.hero {
  text-align: center;
  padding: 3rem 0;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color), #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  font-size: 1.25rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

/* 卡片网格 */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.card {
  background: var(--card-bg);
  border: 1px solid var(--card-border);
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.3s;
  display: block;
  color: var(--text-color);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border-color: var(--primary-color);
}

.card-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.card h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--text-color);
}

.card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

/* 页面标题 */
.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.page-description {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* 列表区域 */
.list-section {
  margin-top: 2rem;
}

.list-section h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.list-item {
  padding: 1rem 0;
  border-bottom: 1px solid var(--card-border);
}

.list-item:last-child {
  border-bottom: none;
}

.list-item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.list-item p {
  color: var(--text-secondary);
  font-size: 0.9rem;
}

.date {
  font-size: 0.85rem;
  color: var(--text-secondary);
  margin-right: 1rem;
}

/* 占位提示 */
.placeholder {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--card-bg);
  border: 2px dashed var(--card-border);
  border-radius: 12px;
}

.placeholder-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.placeholder h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.placeholder p {
  color: var(--text-secondary);
}

/* 响应式 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1rem;
  }
  
  .page-title {
    font-size: 1.75rem;
  }
  
  .nav-links {
    gap: 1rem;
    font-size: 0.9rem;
  }
  
  .card-grid {
    grid-template-columns: 1fr;
  }
}
```

---

### 4.6 创建 src/components/Navbar.astro

**文件名**：`src/components/Navbar.astro`

**内容**：

```astro
---
const { currentPage } = Astro.props;
---

<nav class="navbar">
  <div class="nav-container">
    <a href="/" class="nav-brand">gantang07</a>
    <ul class="nav-links">
      <li><a href="/" class={currentPage === 'home' ? 'active' : ''}>首页</a></li>
      <li><a href="/games/" class={currentPage === 'games' ? 'active' : ''}>游戏</a></li>
      <li><a href="/blog/" class={currentPage === 'blog' ? 'active' : ''}>博客</a></li>
      <li><a href="/docs/" class={currentPage === 'docs' ? 'active' : ''}>文档</a></li>
      <li><a href="/novels/" class={currentPage === 'novels' ? 'active' : ''}>小说</a></li>
    </ul>
  </div>
</nav>
```

⚠️ 注意：把 `gantang07` 改成你自己的用户名或者你想显示的名字。

---

### 4.7 创建 src/layouts/Layout.astro

**文件名**：`src/layouts/Layout.astro`

**内容**：

```astro
---
import Navbar from '../components/Navbar.astro';
import '../styles/global.css';

const { title, currentPage } = Astro.props;
const siteTitle = 'gantang07 的小站';
---

<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} | {siteTitle}</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <Navbar currentPage={currentPage} />
    <main class="main-content">
      <slot />
    </main>
    <footer class="footer">
      <p>© {new Date().getFullYear()} gantang07 · Powered by Astro & GitHub Pages</p>
    </footer>
  </body>
</html>
```

⚠️ 注意：把两处的 `gantang07` 改成你自己的名字。

---

### 4.8 创建 src/pages/index.astro（首页）

**文件名**：`src/pages/index.astro`

**内容**：

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout title="首页" currentPage="home">
  <div class="hero">
    <h1>欢迎来到我的小站 👋</h1>
    <p>这里有我做的小游戏、写的博客、技术文档，还有正在创作的小说。随便逛逛吧～</p>
  </div>
  
  <div class="card-grid">
    <a href="/games/" class="card">
      <div class="card-icon">🎮</div>
      <h3>网页小游戏</h3>
      <p>我做的一些有趣的网页小游戏，打开就能玩，不用下载。</p>
    </a>
    
    <a href="/blog/" class="card">
      <div class="card-icon">📝</div>
      <h3>博客文章</h3>
      <p>技术笔记、生活感悟、折腾记录，想到啥写啥。</p>
    </a>
    
    <a href="/docs/" class="card">
      <div class="card-icon">📚</div>
      <h3>技术文档</h3>
      <p>一些项目的文档和教程，方便自己也方便大家查阅。</p>
    </a>
    
    <a href="/novels/" class="card">
      <div class="card-icon">📖</div>
      <h3>小说创作</h3>
      <p>正在写的小说，慢慢更新中，欢迎追更。</p>
    </a>
  </div>
</Layout>
```

你可以把里面的文字改成你自己的。

---

### 4.9 创建 src/pages/games/index.astro（游戏页）

**文件名**：`src/pages/games/index.astro`

**内容**：

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="网页小游戏" currentPage="games">
  <h1 class="page-title">🎮 网页小游戏</h1>
  <p class="page-description">我做的一些有趣的网页小游戏，打开浏览器就能玩</p>

  <div class="placeholder">
    <div class="placeholder-icon">🕹️</div>
    <h3>游戏开发中...</h3>
    <p>第一个小游戏正在制作中，敬请期待！</p>
  </div>

  <div class="list-section" style="margin-top: 3rem;">
    <h2>📋 游戏计划</h2>
    <div class="list-item">
      <h3>贪吃蛇</h3>
      <p>经典小游戏，用 Canvas 实现</p>
    </div>
    <div class="list-item">
      <h3>2048</h3>
      <p>数字合成小游戏</p>
    </div>
    <div class="list-item">
      <h3>打砖块</h3>
      <p>复古街机风格</p>
    </div>
  </div>
</Layout>
```

---

### 4.10 创建 src/pages/blog/index.astro（博客页）

**文件名**：`src/pages/blog/index.astro`

**内容**：

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="博客文章" currentPage="blog">
  <h1 class="page-title">📝 博客文章</h1>
  <p class="page-description">技术笔记、生活感悟、折腾记录</p>

  <div class="placeholder">
    <div class="placeholder-icon">✍️</div>
    <h3>还没有文章</h3>
    <p>第一篇博客正在酝酿中...</p>
  </div>

  <div class="list-section" style="margin-top: 3rem;">
    <h2>📌 想写的主题</h2>
    <div class="list-item">
      <h3>Astro 搭建 GitHub Pages 教程</h3>
      <p>从零开始用 Astro 搭建个人网站的完整记录</p>
    </div>
    <div class="list-item">
      <h3>网页小游戏开发笔记</h3>
      <p>用 Canvas 做小游戏的经验分享</p>
    </div>
    <div class="list-item">
      <h3>AI 工具使用心得</h3>
      <p>各种 AI 工具的折腾和实用技巧</p>
    </div>
  </div>
</Layout>
```

---

### 4.11 创建 src/pages/docs/index.astro（文档页）

**文件名**：`src/pages/docs/index.astro`

**内容**：

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="技术文档" currentPage="docs">
  <h1 class="page-title">📚 技术文档</h1>
  <p class="page-description">一些项目的文档和教程</p>

  <div class="placeholder">
    <div class="placeholder-icon">📖</div>
    <h3>文档整理中...</h3>
    <p>好东西正在路上，敬请期待！</p>
  </div>

  <div class="list-section" style="margin-top: 3rem;">
    <h2>📋 计划中的文档</h2>
    <div class="list-item">
      <h3>Astro 使用指南</h3>
      <p>Astro 框架的常用功能和最佳实践</p>
    </div>
    <div class="list-item">
      <h3>GitHub Pages 部署手册</h3>
      <p>从零开始部署静态网站的完整步骤</p>
    </div>
    <div class="list-item">
      <h3>前端开发工具箱</h3>
      <p>常用的前端开发工具和库推荐</p>
    </div>
  </div>
</Layout>
```

---

### 4.12 创建 src/pages/novels/index.astro（小说页）

**文件名**：`src/pages/novels/index.astro`

**内容**：

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout title="小说创作" currentPage="novels">
  <h1 class="page-title">📖 小说创作</h1>
  <p class="page-description">正在写的小说，慢慢更新中</p>

  <div class="placeholder">
    <div class="placeholder-icon">📝</div>
    <h3>正在构思中...</h3>
    <p>第一个故事正在脑海里慢慢成型</p>
  </div>

  <div class="list-section" style="margin-top: 3rem;">
    <h2>📋 创作计划</h2>
    <div class="list-item">
      <h3>第一部小说（暂定名）</h3>
      <p>科幻/奇幻题材，世界观构建中</p>
    </div>
    <div class="list-item">
      <h3>短篇集</h3>
      <p>一些小故事和灵感片段</p>
    </div>
  </div>
</Layout>
```

---

### 4.13 创建 .github/workflows/deploy.yml（最重要！）

**文件名**：`.github/workflows/deploy.yml`

**内容**：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

⚠️ 这个文件非常重要，它是让 GitHub 自动帮你构建网站的配置文件，一定要创建对！

---

✅ 好了，所有文件都创建完了！

现在你的仓库里应该有了所有必要的文件。

---

## ⚙️ 第五步：配置 GitHub Pages

文件都创建好了，现在我们来配置 GitHub Pages，让网站可以访问。

### 5.1 打开仓库设置

在你的仓库页面，点击顶部的 **"Settings"**（设置）。

### 5.2 找到 Pages 设置

在左侧菜单往下滑，找到 **"Pages"**，点进去。

### 5.3 配置部署源

在 **"Build and deployment"** 部分：
- **Source**：选择 **"GitHub Actions"**（不是 Deploy from a branch！）

### 5.4 等待构建

配置好之后，GitHub 会自动开始构建你的网站。

你可以点击顶部的 **"Actions"** 标签页查看构建进度。

第一次构建可能需要 1-2 分钟，耐心等一下。

当你看到构建状态变成绿色的 ✅ 时，就说明构建成功了！

---

## 🌐 第六步：访问你的网站

构建成功后，回到 Pages 设置页面，你会看到你的网站地址。

地址格式是：`https://你的用户名.github.io/`

比如你的用户名是 `zhangsan`，地址就是 `https://zhangsan.github.io/`

在浏览器里打开这个地址，你就能看到你的网站了！🎉

---

## ✏️ 第七步：怎么更新网站内容？

网站搭好了，以后想更新内容怎么办？很简单！

### 方法一：直接在 GitHub 网页上改（推荐小白用）

1. 打开你的仓库
2. 找到要修改的文件，点进去
3. 点击右上角的铅笔图标（Edit this file）
4. 修改内容
5. 拉到最下面，点击 **"Commit changes"**

然后等 1-2 分钟，网站就自动更新了！

### 方法二：在本地改了再上传（适合懂点代码的）

如果你会用 git，可以把仓库 clone 到本地，改完了再 push 上去，效果是一样的。

---

## 🎯 进阶：怎么添加新的博客文章？

想写新博客了？很简单！

### 步骤：

1. 在 `src/pages/blog/` 目录下创建一个新文件，比如 `my-first-post.md`
2. 文件名就是文章的网址，比如 `my-first-post.md` 对应的网址就是 `/blog/my-first-post/`
3. 文件内容用 Markdown 格式写，开头要加上这些信息：

```markdown
---
title: 文章标题
pubDate: 2026-06-27
description: 文章简短描述
author: 你的名字
tags:
  - 标签1
  - 标签2
---

# 文章标题

这里是文章正文...
```

4. 然后更新 `src/pages/blog/index.astro`，把新文章加到列表里

就这么简单！

---

## ❓ 常见问题

### Q: 网站构建失败了怎么办？

A: 点击 Actions 标签页，看看失败的构建日志，一般会有错误提示。最常见的问题是：
- 文件名写错了（注意大小写）
- 文件内容复制错了（少了括号或者引号）
- astro.config.mjs 里的 site 地址写错了

### Q: 为什么我的网站访问不了？

A: 检查一下：
1. 仓库名是不是 `你的用户名.github.io`
2. Pages 设置里 Source 是不是选的 GitHub Actions
3. Actions 里的构建是不是成功了（绿色对勾）
4. 有没有等够时间（第一次可能需要等几分钟）

### Q: 可以绑定自己的域名吗？

A: 可以的！在 Pages 设置里有 Custom domain 选项，按照提示配置就行。不过域名需要自己买。

### Q: 网站有流量限制吗？

A: GitHub Pages 有软限制，每月 100GB 流量，个人网站完全够用了。

### Q: 可以放广告吗？

A: GitHub Pages 不允许放商业广告，但是放个捐赠链接什么的没问题。

---

## 🎉 总结

恭喜你！你已经拥有了一个属于自己的个人网站！

回顾一下我们做了什么：
1. ✅ 注册了 GitHub 账号
2. ✅ 创建了仓库
3. ✅ 创建了所有网站文件
4. ✅ 配置了自动构建
5. ✅ 网站成功上线

这只是开始，后面你可以：
- 🎮 加几个网页小游戏
- ✍️ 多写几篇博客
- 📚 整理一些技术文档
- 📖 开始写你的小说

网站是你的，想怎么折腾就怎么折腾！

如果这篇教程对你有帮助，别忘了分享给你的朋友～

祝你玩得开心！🚀
