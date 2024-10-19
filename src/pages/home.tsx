import { Link, useParams } from 'react-router-dom';

import { Article } from '~/components/article';
import { ArticleList } from '~/components/article-list';
import { Container } from '~/components/container';
import { HeroSection } from '~/components/hero-section/hero-section';
import { Article as ArticleType } from '~/reducers/article-reducer';

type HomeProps = {
  articles: ArticleType[];
};

const HomePage: React.FC<HomeProps> = ({ articles }) => {
  const params = useParams();
  const lang = params.lang as string;

  return (
    <>
      <HeroSection />
      <Container>
        <ArticleList>
          {articles.map((article) => (
            <Link to={`article/${article.id}`} key={article.id}>
              <Article.Root>
                <Article.Picture
                  src={article.imageSrc}
                  alt={article.title[lang]}
                  width={300}
                  height={300}
                />
                <Article.Info>
                  <Article.Title>{article.title[lang]}</Article.Title>
                  <Article.Description>{article.description[lang]}</Article.Description>
                </Article.Info>
              </Article.Root>
            </Link>
          ))}
        </ArticleList>
      </Container>
    </>
  );
};

export default HomePage;
