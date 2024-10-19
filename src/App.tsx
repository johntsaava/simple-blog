import { Suspense, lazy, useReducer } from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';

import { Layout } from '~/components/layout';
import { Loading } from '~/components/loading';
import { articlesInitialState, articlesReducer } from '~/reducers/article-reducer';
import { locales } from '~/utils/locales';

const HomePage = lazy(() => import('~/pages/home'));
const AboutPage = lazy(() => import('~/pages/about'));
const NotFoundPage = lazy(() => import('~/pages/not-found'));
const ArticleCreatePage = lazy(() => import('~/pages/article-create'));
const ArticlePage = lazy(() => import('~/pages/article'));

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  if (!locales.includes(lang)) {
    return <Navigate to='/ka' />;
  }

  return <Outlet />;
};

function App() {
  const [articles, dispatch] = useReducer(articlesReducer, articlesInitialState);

  return (
    <Routes>
      <Route path=':lang' element={<LangGuard />}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <HomePage articles={articles} />
              </Suspense>
            }
          />
          <Route
            path='article/:id'
            element={
              <Suspense fallback={<Loading />}>
                <ArticlePage articles={articles} />
              </Suspense>
            }
          />
          <Route
            path='create'
            element={
              <Suspense fallback={<Loading />}>
                <ArticleCreatePage dispatch={dispatch} />
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
      <Route path='*' element={<Navigate to='/ka' />} />
    </Routes>
  );
}

export default App;
