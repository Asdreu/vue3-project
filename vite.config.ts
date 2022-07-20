import { fileURLToPath, URL } from "url";
import { defineConfig, loadEnv } from "vite";

import { setupPlugins } from "./vite/plugins";
import { parseEnv } from "./vite/utils";

export default defineConfig(({ command, mode }) => {
  const isBuild: Boolean = command == "build" ? true : false;
  const env: ImportMetaEnv = parseEnv(loadEnv(mode, process.cwd()));

  return {
    plugins: [...setupPlugins(isBuild, env)],
    resolve: {
      // 配置导入的路径别名，注意在 tsconfig 要再配置一次
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
        "#": fileURLToPath(new URL("./types", import.meta.url)),
      },
    },
    server: {
      host: true,
      port: env.VITE_PORT,
      proxy: {
        "/api": {
          target: env.VITE_MOCK_ENABLE ? "/" : env.VITE_API_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
