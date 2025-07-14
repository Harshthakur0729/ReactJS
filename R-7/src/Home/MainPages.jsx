import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

const MainPages = () => {
  const location = useLocation();
  const hiddenRoutes = ['/login', '/register'];
  const shouldHideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <Outlet />
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default MainPages;
