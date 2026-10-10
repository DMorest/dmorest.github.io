# V0.90 — Moe Counter Random Themes & Browser Tab Title

- Moe Counter now supports `visitor_counter.theme: "random"` and randomly chooses a theme from a curated list on each page load.
- The random choice is shared by all counter images on a page load; the site-wide counter ID remains the same.
- Counter requests still run on all pages, while the visible counter remains limited to About and the homepage MISC section.
- The persistent browser tab title is now `PHANTASiA LOTUS LAND`.
- When the tab regains focus, `PHANTASiA CONNECTED` appears for 1 second before returning to the persistent title.

To use a fixed theme instead, set `visitor_counter.theme` in `_config.yml` to a theme name such as `morden-num`, `miku`, or `capoo-1`.
