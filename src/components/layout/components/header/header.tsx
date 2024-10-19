import { Link, NavLink } from "react-router-dom";
import classes from "./header.module.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "about", path: "/about" },
];

export const Header: React.FC = () => {
  return (
    <header className={classes.headerRoot}>
      <Link to="/">
        <h1>Simple blog</h1>
      </Link>

      <ul className={classes.navItems}>
        {navItems.map(({ name, path }) => (
          <li key={path} className={classes.navItem}>
            <NavLink
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
    </header>
  );
};
