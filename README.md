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

## How It Works

1. On mouse hover, the current element is highlighted.
2. When you click an element:
    - Its unique selector is generated.
    - Its content type is detected.
    - The pair is saved to `localStorage`.
3. When the `Alt` key is pressed, the stored data is downloaded as a plain text
file.

## Example Entry

`div#content > p:nth-of-type(3)|text`

## Installation / Usage

1. Include the script in your browser's console or inject it into a webpage:
```js
(function() { /*...entire code...*/ })();
```
2. Hover over elements to preview.
3. Click to save.
4. Press `Alt` to export saved selectors.

## Use Cases

- Web scraping and automation.
- Visual testing and element targeting.
- UX research and DOM analysis.

## Limitations

- Only works in-browser and on a per-session basis.
- Requires manual script injection if not part of a packaged extension or app.

