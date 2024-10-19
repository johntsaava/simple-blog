import { useParams } from 'react-router-dom';

import { Container } from '~/components/container';
import { getTranslation } from '~/utils/locales';

const AboutPage: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  return (
    <Container>
      <section>
        <p>{t('aboutDescription')}</p>
      </section>
    </Container>
  );
};

export default AboutPage;
