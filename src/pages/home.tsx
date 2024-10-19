import { useParams } from "react-router-dom";
import { Article } from "../components/article";
import { ArticleList } from "../components/article-list";
import { HeroSection } from "../components/hero-section/hero-section";
import { Page } from "../components/page/page";
import { getTranslation } from "../utils/locales";

const Home: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;
  const t = getTranslation(lang);

  const article = {
    imageSrc: "https://via.assets.so/img.jpg?w=300&h=300&tc=white&bg=lightgrey",
    title: t("homeTitle"),
    description: t("homeDescription"),
  };

  return (
    <>
      <HeroSection />
      <Page>
        <ArticleList>
          <Article.Root>
            <img src={article.imageSrc} alt={article.title} />
            <Article.Info>
              <Article.Title>{article.title}</Article.Title>
              <Article.Description>{article.description}</Article.Description>
            </Article.Info>
          </Article.Root>
        </ArticleList>
      </Page>
    </>
  );
};

export default Home;
