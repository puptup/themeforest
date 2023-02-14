import { Language } from "@localization";
import { useTranslation } from "react-i18next";

export const useLocalization = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language as Language;

  return {
    t,
    language,
  };
};
