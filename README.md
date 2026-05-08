# Syosetu UI Translation

A TypeScript userscript project for translating UI text on Syosetu/Narou-related websites.

This repository is currently an early scaffold. The goal is to grow it into a modular userscript that builds to one installable `.user.js` file for Tampermonkey or Violentmonkey.

## Current Scope

The first version includes the project structure and the basic runtime pipeline:

- TypeScript source code
- Vite build setup
- `vite-plugin-monkey` userscript output
- locale registry with English as the default locale
- text translation feature
- attribute translation feature
- style injection feature
- debounced DOM observer for dynamic page updates

The translation dictionaries are being migrated into modular source-key and locale files.

## Supported Sites

The userscript is configured to run on:

- `syosetu.com`
- `*.syosetu.com`

This covers Narou/Syosetu subdomains such as `ncode.syosetu.com`, `yomou.syosetu.com`, `novel18.syosetu.com`, and related pages.

## Project Structure

```text
src/
  main.ts

  features/
    styles.css
    styles.ts
    translateAttributes.ts
    translateText.ts

  i18n/
    current.ts

    source/
      sourceTextToKey.ts
      translationKeys.ts

    locales/
      index.ts
      types.ts

      en/
        attributes.ts
        index.ts
        tags-adult.ts
        tags-general.ts
        ui.ts

  utils/
    dom.ts
    text.ts
```

## Translation Model

UI text is planned to flow through stable translation keys:

```text
source website text -> translation key -> selected locale text
```

For example:

```ts
sourceTextToKey.set('あらすじ', 'novel.synopsis');
```

```ts
ui['novel.synopsis'] = 'Synopsis';
```

This keeps Japanese source text centralized and lets future locales share the same translation keys.

Tag dictionaries are kept separate:

- `tags-general.ts`
- `tags-adult.ts`

Adult tags are only included on adult-domain hosts.

## Search Safety

Search values must not be changed.

Do not rewrite:

- `input[name="word"]`
- `input[name="notword"]`
- URL query parameters
- form values used by Syosetu search

Syosetu search depends on Japanese keywords and tags. Translating real search values can change search results.

## Development

Install dependencies:

```bash
npm install
```

Run the Vite dev server:

```bash
npm run dev
```

Chrome may block the Vite userscript dev loader on live Syosetu pages because it tries to load from `localhost` or `127.0.0.1`. If that happens, use the watch build workflow instead:

```bash
npm.cmd run build:watch
```

Leave it running while editing source files.

Type-check:

```bash
npm run typecheck
```

Build the userscript:

```bash
npm run build
```

The built userscript is written to:

```text
dist/syosetu-ui-translations.user.js
```

On Windows PowerShell, if script execution blocks `npm`, use:

```bash
npm.cmd run build
```

### Local Tampermonkey Wrapper

For local testing, enable file access for Tampermonkey:

1. Open `chrome://extensions/`.
2. Open Tampermonkey details.
3. Enable `Allow access to file URLs`.

Then create a small wrapper script in Tampermonkey:

```js
// ==UserScript==
// @name         Syosetu UI translations local
// @namespace    https://github.com/SarTais/syosetu-ui-translation
// @version      0.1.0-local
// @description  Local wrapper for built Syosetu UI translations userscript.
// @match        https://*.syosetu.com/*
// @grant        none
// @require      file:///C:/Path/To/syosetu-ui-translation/dist/syosetu-ui-translations.user.js
// @run-at       document-idle
// ==/UserScript==
```

Replace `C:/Path/To/syosetu-ui-translation` with your local checkout path. Run `npm.cmd run build:watch`, then reload the Syosetu page after rebuilds.

## Installation

1. Install Tampermonkey or Violentmonkey.
2. Run `npm run build`.
3. Open `dist/syosetu-ui-translations.user.js` with the userscript manager.

## Translation Boundaries

The userscript should avoid translating:

- novel body text
- synopsis text unless explicitly intended
- novel titles
- author names
- user-generated content
- real search input values
- URL query parameters

The goal is UI localization, not full page machine translation.

## License

MIT

## Disclaimer

This project is unofficial and is not affiliated with HinaProject, Syosetu, Shousetsuka ni Narou, or Nocturne Novels.
