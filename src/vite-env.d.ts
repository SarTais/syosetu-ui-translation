/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SYOSETU_DATE_FORMAT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
