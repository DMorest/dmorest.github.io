# Saturn Virtual OS / FILE_CONTENT 文章界面

文章页现在采用 Phigros 收藏品中 Saturn Virtual OS / D.O.M.E 风格的“文件分析”界面。

## Front Matter

在 Markdown 文章开头可以写：

```yaml
---
title: Save White Horse
date: 2026-10-07
analysis: 50
analysis_status: "50% ANALYZED."
supervisor: "deathMark"
category_label: "main"
folder_cover: "/images/transit-tide.jpg"
folder_title: "Transit Tide"
folder_subtitle: "Chapter VII"
folder_completion: 74
folder_items: 14
---
```

### 字段说明

- `analysis`: 顶部分析进度，0–100。100 时默认显示 `ANALYSIS COMPLETED.`，其他数值默认显示 `XX% ANALYZED.`。
- `analysis_status`: 手动覆盖顶部状态文字，可写任意文本。
- `supervisor`: 文件信息中的 SUPERVISOR。
- `category_label`: 文件信息中的 CATEGORY。
- `folder_cover`: 左侧 FOLDER_INFORMATION 的封面。
- `folder_title`: 左侧封面标题，默认使用文章标题。
- `folder_subtitle`: 左侧封面副标题，例如 `Chapter VII`。
- `folder_completion`: 左侧封面的 Completion 百分比，默认跟随 `analysis`。
- `folder_items`: 左侧文件夹总项目数，用于底部 `1/14` 一类的计数。

## 设计结构

- 左栏：`FOLDER_INFORMATION` → 封面 → `CONTENT` → 文件列表 → `< BACK`
- 右栏：`FILE_CONTENT` → `ANALYSIS ...` → 大标题 → DATE / SUPERVISOR / CATEGORY → 正文
- 顶部分析条是真正根据 `analysis` 字段变化的 UI，而不是普通网页阅读进度条。

## PhigrOS 启动背景

首页支持类似 Phigros 启动画面的暗色背景、几何六边形线条网络和自下向上的扫描光。

默认背景文件：

`themes/phigros/source/images/phigros-bg.jpg`

把你自己的启动背景图片放到这个位置即可。也可以修改主题 `_config.yml`：

```yaml
background:
  image: "/images/phigros-bg.jpg"
  blur: "5px"
  brightness: "0.22"
```

建议使用较大的横向图片；主题会自动压暗背景，避免背景抢过文字和 UI。


## v3 visual corrections

- Main UI font: Saira via Google Fonts. CJK uses the configured CJK/system fallback.
- Code blocks use Consolas/Cascadia Mono instead of the UI font.
- `FILE_CONTENT` top bar is itself the analysis progress meter; there is no separate mini progress bar.
- Homepage startup visuals are layered above the background and below page content.
- Put the custom homepage background at `themes/phigros/source/images/phigros-bg.jpg`.
- Background is deliberately darkened; adjust `background.brightness` in the theme config if needed.


## v3.3 网格密度
首页鱼眼三角网格已缩小至约 110px 边长，以增加网格数量并强化两侧弯曲效果。

## v3.7 visual corrections

- `FILE_CONTENT` top bar height reduced to 36px on desktop (34px on narrow screens).
- `FILE_CONTENT` blue tab reduced to 104px minimum width for a tighter Saturn Virtual OS proportion.
- Homepage network changed from upright `△/▽` triangles to sideways `▶/◀` equilateral triangles, stacked vertically and retaining the subtle fisheye warp.
- Existing line-glow animation remains attached to the network itself; no separate scan-line texture is added.


### v5.3
- MISC author/friends blocks borderless.
- Social icon links configurable in `home.misc.social`.
- Copyright moved to centered bottom readout.
- Default background path fixed to bundled `source/images/bg.jpg`.
- Archive i18n `%d` formatting corrected.
