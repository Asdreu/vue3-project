import {
  createStyleImportPlugin,
  ElementPlusResolve,
} from "vite-plugin-style-import";

export const setupStyleImportPlugin = function () {
  return createStyleImportPlugin({
    resolves: [ElementPlusResolve()],
    libs: [
      {
        libraryName: "vxe-table",
        esModule: true,
        resolveStyle: (name) => `vxe-table/es/${name}/style.css`,
      },
    ],
  });
};
