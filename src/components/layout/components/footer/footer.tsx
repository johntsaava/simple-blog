import { useParams } from "react-router-dom";
import classes from "./footer.module.css";
import { getTranslation } from "../../../../utils/locales";

export const Footer: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  return (
    <footer className={classes.footerRoot}>
      © {new Date().getFullYear()} {t("title")}. {t("copyRight")}
    </footer>
  );
};
