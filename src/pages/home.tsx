import { Article } from "../components/article";
import { ArticleList } from "../components/article-list";
import { HeroSection } from "../components/hero-section/hero-section";
import { Page } from "../components/page/page";

const article = {
  imageSrc: "https://via.assets.so/img.jpg?w=300&h=300&tc=white&bg=lightgrey",
  title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  description:
    "Ea soluta commodi quam exercitationem tempore molestias illo accusamus, quisquam aliquam eaque tenetur error tempora culpa, illum expedita delectus distinctio, numquam nihil.",
};

const Home: React.FC = () => {
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
