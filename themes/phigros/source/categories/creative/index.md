---
title: 创作
layout: core-category
category_id: creative
permalink: categories/creative/
---

cat > README-V8.0-CHANGES.md <<'MD'
# V8.0 Changes

- Category IDs are now English/internal (`log`, `tutorial`, `creative`).
- External display names are configured with `saturn.categories.<id>.name`.
- Category covers are used by default in the Saturn FILE_CONTENT folder panel for categorized posts.
- `folder.*` per-post settings still override category defaults.
- Legacy posts using `日志 / 教程 / 创作` are resolved to the new internal IDs automatically.
- Homepage feature entries now explicitly target category IDs.
- Category/archive layouts and post cards use the same ID-to-display-name resolver.
- The bundled `source/css/main.css` is the supplied custom stylesheet.
