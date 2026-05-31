# The One Burger — 1:1 复刻项目

基于 [theoneburgerbcn.com](https://www.theoneburgerbcn.com/) 的品牌官网前端复刻。

**技术栈：** React 19 · Vite · Tailwind CSS 4 · GSAP · Lottie · react-slick

详细中文说明见 [项目说明.md](./项目说明.md)

---

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端输出的地址（默认 http://localhost:5173/）

```bash
npm run build      # 生产构建
npm run preview    # 预览构建结果
npm run download-assets   # 从原站下载字体/图片/视频
```

---

## 部署到 Vercel

1. Push 到 GitHub
2. [vercel.com](https://vercel.com) → **New Project** → 选择仓库
3. Framework 选 **Vite** → Deploy

---

## 项目结构

```
src/
  components/     # 页面区块（Hero、BurgersViewer、Specs、FAQ 等）
  pages/          # HomePage.jsx
  hooks/          # useDevice 响应式判断
  data/           # 文案、FAQ、Lottie JSON
public/
  fonts/          # Kunst 字体
  images/         # 图片
  videos/         # 视频（Desktop / Mobile 版本）
  icons/          # 配送平台 SVG
scripts/
  download-assets.mjs
```

---

## 页面区块（自上而下）

LoadingScreen → Header → HeroSection → ScrollText → AboutBurger → BurgersViewer → BurgerExtrudeDiagram → SpecsSection → PackagingAnimation → PriceSection → FAQ → PageTimer → ImagesSection → Footer

全局：`OrderModal`（下单弹窗）

---

## 已实现

- 加载动画、固定导航、Hero 视频与下单栏
- GSAP 滚动文字、收据/分解/包装视频（含 ScrollTrigger scrub / pin）
- Lottie 动态标题、三款汉堡展示（桌面三列 / 移动轮播）
- 技术规格四栏响应式布局
- 9.99€ 价格、FAQ 手风琴、页面计时器
- 双图横排、橙色页脚、下单弹窗
- Vercel 部署配置

---

## 参考

原站对照文件：`reference.js` · `reference.css` · `reference-user.html`
