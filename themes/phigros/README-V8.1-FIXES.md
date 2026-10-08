# v8.1 fixes

- Fixed `layout/index.ejs` missing `misc` / `friendSites` initialization that caused `ReferenceError: misc is not defined` on the homepage.
- Keeps the v8.0 Saturn category format: `saturn.categories` with English internal IDs and external `name` labels.
- Keeps the supplied customized `source/css/main.css` from v8.0.
