import { resolve } from "path";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

export const setupI18nPlugin = function () {
  return VueI18n({
    include: [resolve(__dirname, "../../locales/**")],
  });
};
