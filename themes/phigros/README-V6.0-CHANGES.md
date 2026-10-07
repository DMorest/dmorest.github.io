# v6.0

- Stronger animated halo on the existing Phigros triangle network.
- Hard-lock page backgrounds to pure black and disable the old ambient blue/gray layer.
- Homepage dots are hidden on startup screen and appear from screen 2 onward.
- Posts use pure black + subtle dot field.
- Clicking the header home link from any non-home page opens the homepage at screen 2 (`?screen=1` internally, then cleaned from the URL).
- Post FOLDER_INFORMATION defaults to the article's first category and lists recent posts in the same category.
- Per-post `folder:` settings override category defaults; optional `folder.posts` can explicitly choose content.
- Adds `分类: /categories/` to the theme navigation.
- Categories and category detail pages now use a Saturn collection-style UI.
- EZ/HD/IN/AT difficulty-class logic is not used by the category UI.

## Folder front matter example

```yaml
folder:
  category: main
  title: Transit Tide
  subtitle: Chapter VII
  cover: /images/folders/transit-tide.jpg
  completion: 74
  items: 14
  posts:
    - article-slug-a
    - article-slug-b
```

Priority: per-post `folder.*` > `saturn.category_folders.<category>` > article category defaults.
