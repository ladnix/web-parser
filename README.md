# DOM selector tracker - add-selector.js

This small JavaScript utility allows you to interactively select and track
elements on a webpage. It highlights elements under the cursor, stores their
unique CSS selectors along with their type (text, image, video), and enables
you to export tht collected data with a single keypress.

## Features

- **Live Element Highlighting** - Red outline on hover.
- **Click to Capture** - Saves a unique CSS selector of clicked elements.
- **Smart Type Detection** - Classifies elements as `text`, `image`, or `video`.
- **LocalStorage Persistence** - Keeps collected data during the session.
- **Export with Alt Key** - Press `Alt` to download all collected selectors as
  `selectors.txt`.

