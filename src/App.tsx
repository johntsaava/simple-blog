import { Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "~/components/layout";
import { Loading } from "~/components/loading";
import { locales } from "~/utils/locales";

const Home = lazy(() => import("~/pages/home"));
const About = lazy(() => import("~/pages/about"));
const NotFound = lazy(() => import("~/pages/not-found"));

const LangGuard: React.FC = () => {
  const params = useParams();
  const lang = params.lang as string;

  if (!locales.includes(lang)) {
    return <Navigate to="/ka" />;
  }

  return <Outlet />;
};

function App() {
  return (
    <Routes>
      <Route path=":lang" element={<LangGuard />}>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<Loading />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<Loading />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/ka" />} />
    </Routes>
  );
}

export default App;
