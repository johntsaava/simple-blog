import { useMutation, useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';

import * as api from '~/api/articles';
import { Article } from '~/components/article';
import { ArticleList } from '~/components/article-list';
import { Button } from '~/components/button';
import { Container } from '~/components/container';
import { HeroSection } from '~/components/hero-section/hero-section';
import { Loading } from '~/components/loading';
import { queryClient } from '~/main';
import { getTranslation } from '~/utils/locales';

const HomePage: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const articles = useQuery({
    queryKey: ['articles'],
    queryFn: api.getArticles,
  });
  const deleteArticle = useMutation({
    mutationFn: api.deleteArticle,
  });
  const handleDeleteArticle = (id: string) => {
    deleteArticle.mutate(id, {
      onSuccess() {
        queryClient.invalidateQueries({
          queryKey: ['articles'],
        });
      },
    });
  };

  if (articles.isLoading) {
    return <Loading />;
  }
  if (articles.isError) {
    return <p>{articles.error.message}</p>;
  }

  return (
    <>
      <HeroSection />
      <Container>
        <ArticleList>
          {articles.data?.map((article) => (
            <Link to={`article/${article.id}`} key={article.id}>
              <Article.Root>
                <Article.Picture src={article.imageSrc} alt={article.title[lang]} />
                <Article.Info>
                  <Article.Title>{article.title[lang]}</Article.Title>
                  <Article.Description>{article.description[lang]}</Article.Description>
                </Article.Info>
                <Article.Actions>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleDeleteArticle(article.id);
                    }}
                  >
                    {t('delete')}
                  </Button>
                </Article.Actions>
              </Article.Root>
            </Link>
          ))}
        </ArticleList>
      </Container>
    </>
  );
};

export default HomePage;
