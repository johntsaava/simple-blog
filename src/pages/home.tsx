import { useParams } from 'react-router-dom';

import { Article } from '~/components/article';
import { ArticleList } from '~/components/article-list';
import { HeroSection } from '~/components/hero-section/hero-section';
import { Page } from '~/components/page';

const article: {
  imageSrc: string;
  title: Record<string, string>;
  description: Record<string, string>;
} = {
  imageSrc: 'https://via.assets.so/img.jpg?w=300&h=300&tc=white&bg=lightgrey',
  title: {
    ka: 'ინოვაციური ტექნოლოგიები და მათი გავლენა მომავალზე',
    en: 'Innovative Technologies and Their Impact on the Future',
  },
  description: {
    ka: 'ტექნოლოგიების განვითარება სწრაფად იცვლის სამყაროს. ინოვაციები, როგორიცაა ხელოვნური ინტელექტი, ბლოკჩეინი და მობილური აპლიკაციები, განაპირობებენ ახალ შესაძლებლობებს და გამოწვევებს.',
    en: 'The rapid advancement of technology is transforming the world. Innovations like artificial intelligence, blockchain, and mobile applications are opening up new opportunities and challenges.',
  },
};

function getArticle(lang: string) {
  return {
    ...article,
    title: article.title[lang],
    description: article.description[lang],
  };
}

const Home: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  const article = getArticle(lang);

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
