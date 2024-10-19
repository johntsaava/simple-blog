import { useParams } from 'react-router-dom';

import { Article } from '~/components/article';
import { ArticleList } from '~/components/article-list';
import { HeroSection } from '~/components/hero-section/hero-section';
import { Page } from '~/components/page';
import { Article as ArticleType } from '~/reducers/article-reducer';

type HomeProps = {
  articles: ArticleType[];
};

const Home: React.FC<HomeProps> = ({ articles }) => {
  const params = useParams();
  const lang = params.lang as string;

  return (
    <>
      <HeroSection />
      <Page>
        <ArticleList>
          {articles.map((article) => (
            <Article.Root key={article.id}>
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
          ))}
        </ArticleList>
      </Page>
    </>
  );
};

export default Home;
