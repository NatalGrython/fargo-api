/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly RATING_PORT: string;
  readonly RATING_BLOCKCHAIN_URI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
