import type { App } from "vue";
import { setupI18n } from "./i18n";


export const setupPlugins = function (app: App) {
    setupI18n(app);
};
