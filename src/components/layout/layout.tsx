import { Outlet } from 'react-router-dom';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
