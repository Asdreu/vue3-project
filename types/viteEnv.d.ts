/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: String;
  readonly VITE_MOCK_ENABLE: Boolean;
  readonly VITE_PORT: Number;
  readonly VITE_GLOB_APP_TITLE: String;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
