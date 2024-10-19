import { Dispatch } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Page } from '~/components/page';
import { ArticlesAction } from '~/reducers/article-reducer';
import { getTranslation } from '~/utils/locales';

type ArticleCreateProps = {
  dispatch: Dispatch<ArticlesAction>;
};

const ArticleCreate: React.FC<ArticleCreateProps> = ({ dispatch }) => {
  const navigate = useNavigate();
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const handleCreateArticle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const titleKa = formData.get('titleKa') as string;
    const titleEn = formData.get('titleEn') as string;
    const descriptionKa = formData.get('descriptionKa') as string;
    const descriptionEn = formData.get('descriptionEn') as string;

    dispatch({
      type: 'ADD_ARTICLE',
      payload: {
        id: new Date().getTime(),
        imageSrc: 'https://via.assets.so/img.jpg?w=300&h=300&tc=white&bg=lightgrey',
        title: { ka: titleKa, en: titleEn },
        description: { ka: descriptionKa, en: descriptionEn },
      },
    });

    navigate('/');
  };

  return (
    <Page>
      <form
        onSubmit={handleCreateArticle}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <label htmlFor='titleKa'>{t('nameKa')}</label>
        <input id='titleKa' type='text' name='titleKa' />

        <label htmlFor='titleEn'>{t('nameEn')}</label>
        <input id='titleEn' type='text' name='titleEn' />

        <label htmlFor='descriptionKa'>{t('descriptionKa')}</label>
        <textarea id='descriptionKa' name='descriptionKa' />

        <label htmlFor='descriptionEn'>{t('descriptionEn')}</label>
        <textarea id='descriptionEn' name='descriptionEn' />

        <button type='submit'>{t('create')}</button>
      </form>
    </Page>
  );
};

export default ArticleCreate;
