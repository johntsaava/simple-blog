import { useParams } from 'react-router-dom';

import { Page } from '~/components/page';
import { getTranslation } from '~/utils/locales';

const AboutPage: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  return (
    <Page>
      <section>
        <p>{t('aboutDescription')}</p>
      </section>
    </Page>
  );
};

export default AboutPage;
