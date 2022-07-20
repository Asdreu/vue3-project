import { useStorage } from "@vueuse/core";
import type { RemovableRef } from "@vueuse/core";

class Language {
  public locale: RemovableRef<String> = useStorage<String>("locale", "zh-CN");

  public switchLocale = () => {
    this.locale.value = this.locale.value === "zh-CN" ? "en" : "zh-CN";
  };
}

const lang = new Language();

export { lang };
