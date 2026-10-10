# v0.92.4 — Cached access unlock flash fix

- Protected article access gates are initially hidden.
- When a cached localStorage key exists, the theme attempts decryption without painting the red ACCESS DENIED gate first.
- If no key exists, the gate is shown immediately; if a cached key is stale/invalid, it is removed and the gate is shown.
- This prevents the visible denial-screen flash on repeat visits after successful unlock.

After replacing the theme, run `hexo clean`, `hexo generate`, then redeploy.
