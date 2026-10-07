# v7.2 changes

- Category folder cards now open the newest (first) article in that category directly.
- Category cards with zero articles are rendered greyed out and non-clickable.
- Core category cards continue sharing their images with the homepage `home.features` entries.
- Added `saturn.category_fallback_cover` for categories without a configured cover.
- Default fallback image path: `themes/phigros/source/images/category-default.jpg`.
- Non-core category cards use `saturn.category_folders.<category>.cover` when set, otherwise the fallback cover.
