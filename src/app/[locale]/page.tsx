import { useTranslations } from "next-intl";
import { getLocale } from "next-intl/server";

export default function Home() {
  const t = useTranslations("Index");
  const locale = getLocale();
  return (
    <>
      <h1>{t("title")}</h1>
      <p>{locale}</p>
    </>
  );
}
