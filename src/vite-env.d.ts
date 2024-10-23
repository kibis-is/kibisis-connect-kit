/// <reference types="vite/client" />

declare const __VERSION__: string;

interface ImportMetaEnv {
  readonly VITE_PROVIDER_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
