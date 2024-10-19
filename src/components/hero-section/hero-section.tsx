import { useParams } from 'react-router-dom';

import { getTranslation } from '../../utils/locales';
import classes from './hero-section.module.css';

export const HeroSection: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  return (
    <section className={classes.heroSectionRoot}>
      <h2 className={classes.title}>{t('heroTitle')}</h2>
      <p>{t('heroDescription')}</p>
    </section>
  );
};
