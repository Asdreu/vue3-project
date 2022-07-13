import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import OptimizationPersist from "vite-plugin-optimize-persist";
import PkgConfig from "vite-plugin-package-config";
import Icons from "unplugin-icons/vite";

import { setupAutoImport } from "./autoImportConfig";
import { setupMockPlugin } from "./mockPluginConfig";
import { setupStyleImportPlugin } from "./styleImportConfig";
import { setupI18nPlugin } from "./i18nPluginConfig";

export const setupPlugins = function (
  isBuild: Boolean,
  env: ImportMetaEnv
): Plugin[] {
  const plugins: Plugin[] = [
    vue(),
    vueJsx(),
    OptimizationPersist(),
    PkgConfig(),
    Icons({
      autoInstall: true,
    }),
  ];

  // 添加自动导入的插件（配置）
  plugins.push(...setupAutoImport());

  // 添加 Mock 插件（配置）
  if (env.VITE_MOCK_ENABLE) {
    plugins.push(setupMockPlugin(isBuild));
  }

  // 添加按需引入组件库的样式插件（配置）
  plugins.push(setupStyleImportPlugin());

  // 添加国际化插件（配置）
  plugins.push(setupI18nPlugin());

  return plugins;
};
