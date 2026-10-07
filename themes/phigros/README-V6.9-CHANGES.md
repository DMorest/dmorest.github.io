# v6.9 变更

修复 Hexo 8 / Warehouse 6 下分类相关模板的兼容性问题。

- `layout/categories.ejs`：将不存在的 `site.categories.get()` 改为 `site.categories.findOne({ name: ... })`。
- `layout/core-category.ejs`：同样改用 `findOne()`，修复日志/教程/创作三个固定分类页。
- `layout/post.ejs`：Hexo 8 中 `page.categories` 是 Query 对象，改为 `toArray()` 后再读取首个分类，并修复同分类 Folder 的筛选。
- 不改变现有分类页视觉设计。
