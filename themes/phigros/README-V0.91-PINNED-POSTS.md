# v0.91 — Per-post pinning

Each post can independently be pinned in the folder list, homepage timeline, and archive page.

Add any of these Boolean fields to a post's Hexo front matter:

```yaml
pin_folder: true   # move this post to the top of its category/folder list
pin_timeline: true # move this post to the top of the homepage timeline
pin_archive: true  # show this post in the PINNED FILES group at the top of Archive
```

All three flags are independent. Omit a field or set it to `false` to disable that pin. For convenience, the equivalent nested form is also accepted:

```yaml
pin:
  folder: true
  timeline: false
  archive: true
```

Pinned items sort ahead of unpinned items, while each group remains newest-first. Timeline pinned sequence markers and Archive pinned sequence markers use orange. Archive pinned rows retain a short orange rail on the left, including hover/focus states.

The editor is not modified in this release; editor support will be added separately when its project files are provided.
