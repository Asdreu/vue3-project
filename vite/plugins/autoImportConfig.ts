import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";

export const setupAutoImport = function () {
  return [
    AutoImport({
      dts: "types/auto-import.d.ts",
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ["vue", "vue-router"],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
      ],
    }),

    Components({
      dts: "types/components.d.ts",

      // 自动导入的组件目录
      dirs: ["src/components"],
      directoryAsNamespace: true,
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),

        // 自动注册图标组件
        IconsResolver({
          // 图标使用前缀 例如 <icon-mdi-xxx>
          prefix: "icon",

          // 允许自动导入的图标集
          enabledCollections: ["mdi", "ep"],
        }),
      ],
    }),

    // 自动导入图标
    Icons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ];
};
