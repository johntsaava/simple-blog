import { useParams } from 'react-router-dom';

import { NotFound } from '~/components/not-found';
import { Page } from '~/components/page';
import { Article } from '~/reducers/article-reducer';

type ArticlePageProps = {
  articles: Article[];
};

const ArticlePage: React.FC<ArticlePageProps> = ({ articles }) => {
  const params = useParams();
  const id = parseInt(params.id as string);
  const lang = params.lang as string;

  const article = articles.find((article) => article.id === id);

  if (!article) {
    return <NotFound />;
  }

  return (
    <Page>
      <img src={article.imageSrc} alt={article.title[lang]} width={512} height={512} />
      <h1>{article.title[lang]}</h1>
      <p>{article.description[lang]}</p>
    </Page>
  );
};

export default ArticlePage;
