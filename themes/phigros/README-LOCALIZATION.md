# Browser-language localization

The theme now supports `zh-CN`, Japanese (`ja`) and English (`en`).

The locale is selected automatically from `navigator.language`:

- `ja-*` → Japanese
- `zh-*` → Chinese
- everything else → English

Hexo is static, so article/user content is not translated. Only theme UI labels are switched in the browser.

`languages/ja.yml` is included for Hexo's standard Japanese locale data. The runtime automatic browser switch is implemented in `source/js/main.js`.
