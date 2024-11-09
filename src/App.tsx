import { Suspense, lazy } from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';

import { Layout } from '~/components/layout';
import { Loading } from '~/components/loading';
import { defaultLocale, locales } from '~/utils/locales';

const HomePage = lazy(() => import('~/pages/home'));
const AboutPage = lazy(() => import('~/pages/about'));
const NotFoundPage = lazy(() => import('~/pages/not-found'));
const ArticleCreatePage = lazy(() => import('~/pages/article-create'));
const ArticlePage = lazy(() => import('~/pages/article'));

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  if (!locales.includes(lang)) {
    return <Navigate to={`/${defaultLocale}`} />;
  }

  return <Outlet />;
};

function App() {
  return (
    <Routes>
      <Route path=':lang' element={<LangGuard />}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='article/:id'
            element={
              <Suspense fallback={<Loading />}>
                <ArticlePage />
              </Suspense>
            }
          />
          <Route
            path='create'
            element={
              <Suspense fallback={<Loading />}>
                <ArticleCreatePage />
              </Suspense>
            }
          />
          <Route
            path='about'
            element={
              <Suspense fallback={<Loading />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<Loading />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path='*' element={<Navigate to={`/${defaultLocale}`} />} />
    </Routes>
  );
}

export default App;
