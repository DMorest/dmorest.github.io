# Waline 集成说明

本主题已集成 Waline Client v3，评论服务地址配置在 `_config.yml`：

```yaml
comments:
  enable: true
  waline:
    serverURL: "https://phatasia-dm.vercel.app"
    lang: "zh-CN"
    dark: true
```

文章 Front Matter 可用 `comments: false` 单独关闭某篇文章的评论。

Waline 客户端通过官方文档提供的 v3 CDN 加载，不需要在 Hexo 项目里安装 `@waline/client` npm 依赖。服务端继续运行在 Vercel，评论数据由 Waline 服务端使用其配置的数据源保存。

## 前端结构

评论区位于 `layout/_partial/waline.ejs`，文章页在 `layout/post.ejs` 中通过 partial 引入。样式集中在 `source/css/main.css` 的 `Waline / Saturn FILE_COMMENT` 区域。

## Vercel 安全域名

如果 Waline 服务端后来配置了 `SECURE_DOMAINS` / `secureDomains`，请把网站域名加入允许列表，例如 `dmorest.github.io`。未配置安全域名时，Waline Server 默认允许来源域名。修改环境变量后需要重新部署 Vercel 项目。


### 页面浏览数
文章页底部的 `VIEWS` 使用 Waline 的 pageview 统计功能。主题在初始化 Waline 时将 `pageview` 指向 `.waline-pageview-count`，由 Waline 服务端记录并返回当前文章的阅读次数。
