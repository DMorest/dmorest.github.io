# v8.5 Changes

## Mobile Saturn folder drawer

Fixed a CSS cascade bug that forced `.phi-folder-panel` to `transform: none !important` on mobile. That rule overrode the drawer’s closed/open transforms, making the mobile drawer behavior inconsistent and preventing the intended overlay interaction.

The existing v8.4 real scrim, fixed close button, article-click close, outside-click close, Escape close, and folder-link close behavior are retained.
