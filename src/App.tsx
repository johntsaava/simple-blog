import { Suspense, lazy, useReducer } from 'react';
import { Navigate, Outlet, Route, Routes, useParams } from 'react-router-dom';

import { Layout } from '~/components/layout';
import { Loading } from '~/components/loading';
import { articlesInitialState, articlesReducer } from '~/reducers/article-reducer';
import { locales } from '~/utils/locales';

const Home = lazy(() => import('~/pages/home'));
const About = lazy(() => import('~/pages/about'));
const NotFound = lazy(() => import('~/pages/not-found'));
const ArticleCreate = lazy(() => import('~/pages/article-create'));

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
                <Home articles={articles} />
              </Suspense>
            }
          />
          <Route
            path='create'
            element={
              <Suspense fallback={<Loading />}>
                <ArticleCreate dispatch={dispatch} />
              </Suspense>
            }
          />
          <Route
            path='about'
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
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
