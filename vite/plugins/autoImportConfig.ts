import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import IconsResolver from "unplugin-icons/resolver";

export const setupAutoImport= function () {
  return [
    AutoImport({
      dts: "types/auto-import.d.ts",
      imports: ["vue", "vue-router"],
      resolvers: [ElementPlusResolver()],
    }),

    Components({
      dts: "types/components.d.ts",
      dirs: ["src/components"],
      directoryAsNamespace: true,
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          alias: {
            park: "icon-park",
          },
          customCollections: ["custom", "inline"],
        }),
      ],
    }),
  ];
};
