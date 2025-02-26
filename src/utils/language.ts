import { ref } from "vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import en from "element-plus/dist/locale/en.mjs";

export enum Languages {
  zh_cn = "zh-cn",
  en_us = "en-us",
}

const locale = {
  [Languages.zh_cn]: zhCn,
  [Languages.en_us]: en,
};

export const getCurrentLocale = (lang?: Languages) => {
  return lang ? locale[lang] : locale[getCurrentLanguage()];
};

export const currentLanguage = ref(Languages.zh_cn);
export const currentLocale = ref(getCurrentLocale());

export function setCurrentLanguage(lang: Languages) {
  currentLanguage.value = lang;
}

export function getCurrentLanguage() {
  return currentLanguage.value;
}
