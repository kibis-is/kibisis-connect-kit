/// <reference types="vite/client" />

declare const __VERSION__: string;

interface ImportMetaEnv {
  readonly VITE_PROVIDER_ID: string;
  readonly VITE_REOWN_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
