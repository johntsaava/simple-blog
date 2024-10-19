import { useParams } from 'react-router-dom';

import { Container } from '~/components/container';
import { getTranslation } from '~/utils/locales';

import classes from './footer.module.css';

export const Footer: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  return (
    <Container>
      <footer className={classes.footerRoot}>
        © {new Date().getFullYear()} {t('title')}. {t('copyRight')}
      </footer>
    </Container>
  );
};
