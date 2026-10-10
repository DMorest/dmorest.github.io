# v0.93.3 fixes

- Every article now uses one explicit `.phi-analysis-fill` element and the existing `--analysis-progress` variable.
- Removed the previous competing `::before` meter rules and the separate access-only width variable.
- Protected posts start with `--analysis-progress: 0%`; the lock class clamps only that fill layer to zero. When decryption succeeds, the existing variable is restored from the article metadata and the lock class is removed. The same fill element then renders exactly as for an ordinary article.
- Passcode placeholder/input text is nudged right. The hexagonal submit key is a little larger and moved closer to the right edge. The arrow is a literal `→` styled with the bundled `Phigros Custom` font.

Validation: JavaScript syntax, CSS parsing, and ZIP integrity checks passed. A headless Chromium visual smoke test could not complete in this environment, so browser rendering against the actual Hexo site has not been verified here.
