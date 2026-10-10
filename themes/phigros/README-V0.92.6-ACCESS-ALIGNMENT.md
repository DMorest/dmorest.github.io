# v0.92.6 — Access UI alignment

- Prevented the protected red topbar from flashing while a saved key is being validated.
- Restored normal topbar styling only after successful decryption, and made the full analysis status visible.
- Rebuilt the passcode bar/button alignment with a red-outlined dark hexagon and a geometric SVG arrow.
- Kept the existing encryption and key-storage behavior unchanged.

Run `hexo clean`, `hexo generate`, then test a protected post with both a saved key and no saved key.
