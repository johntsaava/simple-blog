import { Dispatch, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '~/components/button';
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
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

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
        imageSrc: imagePreview || '/images/default.webp',
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
        <label htmlFor='image'>{t('image')}</label>
        <input id='image' type='file' accept='image/*' onChange={handleImageUpload} />
        {imagePreview && (
          <img src={imagePreview} alt='Preview' style={{ maxWidth: '300px', maxHeight: '300px' }} />
        )}

        <label htmlFor='titleKa'>{t('nameKa')}</label>
        <input id='titleKa' type='text' name='titleKa' required minLength={2} maxLength={100} />

        <label htmlFor='titleEn'>{t('nameEn')}</label>
        <input id='titleEn' type='text' name='titleEn' required minLength={2} maxLength={100} />

        <label htmlFor='descriptionKa'>{t('descriptionKa')}</label>
        <textarea id='descriptionKa' name='descriptionKa' required minLength={10} maxLength={500} />

        <label htmlFor='descriptionEn'>{t('descriptionEn')}</label>
        <textarea id='descriptionEn' name='descriptionEn' required minLength={10} maxLength={500} />

        <Button type='submit'>{t('create')}</Button>
      </form>
    </Page>
  );
};

export default ArticleCreate;
