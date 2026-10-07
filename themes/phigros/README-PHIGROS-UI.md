# Hexo Theme Phigros — PhigrOS / D.O.M.E UI

这是在原主题基础上做的一次 UI 重构，目标不是简单“换蓝色”，而是把 Hexo 内容组织成类似 Phigros 的系统界面：

- **PhigrOS Shell**：顶部系统栏、倾斜导航、状态感和扫描线背景。
- **D.O.M.E Console**：文章页、归档页、分类页使用数据节点/控制台式标题栏。
- **动态判定线感**：保留原主题的判定线组件，并用扫描光、网格和几何切角统一视觉。
- **移动端**：窄屏自动切换为折叠菜单和单列卡片。
- **可访问性**：支持 `prefers-reduced-motion`。

## 重要修复

原压缩包里的 `source/css/main.css` 实际上包含了一份 HTML 文档，而不是 CSS；本版本已重建为真正的 CSS。

另外补上了主题引用但原包缺失的：

`source/js/main.js`

## 配置

`_config.yml` 新增：

```yaml
phigros:
  system_name: "PhigrOS"
  dome_label: "D.O.M.E"
  accent: "#39b9e8"

background:
  image: "/images/bg.jpg"
  blur: "12px"
  brightness: "0.30"
  grid: true
  grid_color: "57, 185, 232"
```

如果想进一步接近“收藏品”界面，可以给文章 front-matter 增加：

```yaml
categories:
  - Story
tags:
  - PhigrOS
```


## 视觉原则

为了避免页面变成普通的“赛博朋克主题”，颜色控制在深灰、青蓝和少量难度色之间；大量使用细边框、斜切角、数据标签、低透明度网格和局部发光，而不是大面积霓虹。
