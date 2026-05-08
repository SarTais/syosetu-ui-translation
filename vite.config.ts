import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        name: 'Syosetu UI translations',
        namespace: 'https://github.com/SarTais/syosetu-ui-translation',
        version: '0.1.0',
        author: 'SarTais',
        description: 'Improves and translates Syosetu/Narou UI labels into English while preserving search behavior.',
        match: [
          'https://*.syosetu.com/*',
          'https://syosetu.com/*',
        ],
        icon: 'https://www.google.com/s2/favicons?sz=64&domain=syosetu.com',
        'run-at': 'document-idle',
        grant: 'none',
      },
      build: {
        fileName: 'syosetu-ui-translations.user.js',
      },
    }),
  ],
});
