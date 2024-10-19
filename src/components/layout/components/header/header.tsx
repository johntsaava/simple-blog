import { Link, NavLink, useLocation, useParams } from 'react-router-dom';

import { Container } from '~/components/container';
import { getTranslation, locales } from '~/utils/locales';

import classes from './header.module.css';

export const Header: React.FC = () => {
  const location = useLocation();
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const navItems = [
    { name: t('home'), path: `/${lang}` },
    { name: t('about'), path: 'about' },
    { name: t('create'), path: 'create' },
  ];

  return (
    <Container>
      <header className={classes.headerRoot}>
        <Link to={`/${lang}`}>
          <h1 className={classes.title}>{t('title')}</h1>
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

        <ul className={classes.langItems}>
          {locales.map((locale) => (
            <li key={locale} className={classes.langItem}>
              <Link
                to={`/${locale}${location.pathname.slice(3)}`}
                className={locale === lang ? classes.langLink__active : classes.langLink}
              >
                {locale}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </Container>
  );
};
