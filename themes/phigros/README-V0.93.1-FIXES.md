# v0.93.1 — Access gate polish

- Restored the titlebar analysis meter to the same `::before` implementation used by ordinary articles.
- Removed the separate `.phi-analysis-fill` element so regular and decrypted articles share one rendering path.
- After decryption, JavaScript restores `--analysis-progress` before removing the protected state.
- Replaced the custom SVG arrow with the plain `→` character.
- Inset the hexagonal submit button from the passcode strip edge and aligned its clipped slants.
