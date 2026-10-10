# v0.93.4 fixes

## Native FILE_CONTENT analysis meter restored
- Removed the extra `.phi-analysis-fill` child element.
- Removed the CSS rule that disabled `.phi-file-topbar::before`.
- Restored the topbar's original native pseudo-element as the sole progress fill, driven by the same per-post `--analysis-progress` property used for every post.
- Protected posts no longer receive a separate red/hidden topbar treatment. Their fill is rendered the same way as an ordinary post; the real per-post percentage is available from initial render.

## Access button arrow
- Replaced the text arrow with the user-supplied Font Awesome-style SVG path (`viewBox="0 0 448 512"`).
- Kept the current button sizing and inset alignment, and retained the slight rightward input text adjustment.

## Checks
- `node --check source/js/main.js` passed.
- CSS parsed with `tinycss2` without parse errors.
- Confirmed there is no `.phi-analysis-fill` layer and no rule disabling `.phi-file-topbar::before`.
- ZIP integrity test passed.
