import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Layout } from "./components/layout";
import { Loading } from "./components/loading";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const NotFound = lazy(() => import("./pages/not-found"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/about"
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
    </Routes>
  );
}

export default App;
