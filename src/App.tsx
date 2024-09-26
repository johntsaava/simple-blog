import { ArticleDescription } from "./components/article-description/article-description";
import { ArticleInfo } from "./components/article-info/article-info";
import { ArticleList } from "./components/article-list/article-list";
import { ArticleTitle } from "./components/article-title/article-title";
import { Article } from "./components/article/article";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { HeroSection } from "./components/hero-section/hero-section";
import { PageContainer } from "./components/page-container/page-container";

const article = {
  imageSrc: "https://via.placeholder.com/300",
  title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  description:
    "Ea soluta commodi quam exercitationem tempore molestias illo accusamus, quisquam aliquam eaque tenetur error tempora culpa, illum expedita delectus distinctio, numquam nihil.",
};

function App() {
  return (
    <>
      <Header />

      <PageContainer>
        <HeroSection />

        <ArticleList>
          <Article>
            <img src={article.imageSrc} alt={article.title} />
            <ArticleInfo>
              <ArticleTitle>{article.title}</ArticleTitle>
              <ArticleDescription>{article.description}</ArticleDescription>
            </ArticleInfo>
          </Article>
        </ArticleList>
      </PageContainer>

      <Footer />
    </>
  );
}

export default App;
