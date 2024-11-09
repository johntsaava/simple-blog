import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

import { getArticle } from '~/api/articles';
import { Container } from '~/components/container';
import { Loading } from '~/components/loading';
import { NotFound } from '~/components/not-found';

const ArticlePage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const lang = params.lang as string;

  const article = useQuery({
    queryKey: ['articles', id],
    queryFn: () => getArticle(id),
  });

  if (article.isLoading) {
    return <Loading />;
  }
  if (article.isError) {
    return <NotFound />;
  }

  return (
    <Container>
      <img src={article.data?.imageSrc} alt={article.data?.title[lang]} height={512} />
      <h1>{article.data?.title[lang]}</h1>
      <p>{article.data?.description[lang]}</p>
    </Container>
  );
};

export default ArticlePage;
