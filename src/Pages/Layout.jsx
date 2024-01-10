import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { darkMode } = useSelector((state) => state.menu);
  const bgImg = darkMode //!!! ///tablet bgImg does not work
    ? 'bg-[url(./pattern-background-mobile-dark.svg)] bg-navy-dark tablet:bg-[url(./pattern-background-tablet-dark.svg) '
    : 'bg-[url(./pattern-background-mobile-light.svg)] bg-light-grey tablet:bg-[url(./pattern-background-tablet-light.svg)';
  return (
    <div className={`h-screen font-rubik ${bgImg}  px-5`}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
