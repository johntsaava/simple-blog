import { Link, NavLink, useParams } from "react-router-dom";
import classes from "./header.module.css";

export const Header: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  const navItems = [
    { name: "Home", path: `/${lang}` },
    { name: "about", path: "about" },
  ];

  return (
    <header className={classes.headerRoot}>
      <Link to={`/${lang}`}>
        <h1>Simple blog</h1>
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

      <Link to={lang === "ka" ? "/en" : "/ka"} className={classes.langLink}>
        {lang === "ka" ? "Eng" : "ქარ"}
      </Link>
    </header>
  );
};
