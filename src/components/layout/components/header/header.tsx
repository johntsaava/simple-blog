import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import classes from "./header.module.css";
import { getTranslation } from "../../../../utils/locales";

export const Header: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const navItems = [
    { name: t("home"), path: `/${lang}` },
    { name: t("about"), path: "about" },
  ];

  return (
    <header className={classes.headerRoot}>
      <Link to={`/${lang}`}>
        <h1>{t("title")}</h1>
      </Link>

      <ul className={classes.navItems}>
        {navItems.map(({ name, path }) => (
          <li key={path} className={classes.navItem}>
            <NavLink
              end
              to={path}
              className={({ isActive }) =>
                isActive ? classes.navItemLink__active : classes.navItemLink
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link
        to={`${lang === "ka" ? "/en" : "/ka"}${location.pathname.slice(3)}`}
        className={classes.langLink}
      >
        {lang === "ka" ? "Eng" : "ქარ"}
      </Link>
    </header>
  );
};
