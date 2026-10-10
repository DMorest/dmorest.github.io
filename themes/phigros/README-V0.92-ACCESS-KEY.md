# v0.92 — Article access keys

Add `access_key` to an article's front matter to encrypt its rendered HTML during Hexo generation and show the PhigrOS-style access gate on the generated page.

```yaml
---
title: Restricted article
access_key: "your-access-key"
---
```

Articles without `access_key` are unchanged. Protected content is encrypted at build time using AES-256-GCM with a PBKDF2-SHA-256 derived key. The browser decrypts it only after a valid key is entered. A successful key is remembered in localStorage for that article on that browser; clear site data to forget it.

This is client-side static-site protection, not server-side identity/access control. Anyone with the key can share it, and short keys can be brute-forced if someone obtains the generated files. Use a strong unique key for sensitive content. Build/deploy the site again after changing or removing a key.


### v0.92.1 compatibility fix

Encryption now runs through a Hexo helper registered in `scripts/access-control.js`; the EJS template no longer calls Node `require()` directly, which is unavailable in Hexo’s EJS rendering context.


### v0.92.2 visual refinements

The incorrect-key dialog is moved to `document.body` so it centers in the viewport even inside backdrop-filtered panels. Its confirm button uses the white/black Phigros hexagonal style. The access gate now uses Saira for the condensed Latin title and a red geometric passcode bar inspired by the supplied reference.
