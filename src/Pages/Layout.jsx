import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { darkMode } = useSelector((state) => state.menu);
  const bgImg = darkMode ? 'dark-bg' : 'light-bg';

  const bgTextColor = darkMode ? 'text-pure-white' : 'text-navy-dark';
  return (
    <div
      className={`h-screen font-rubik px-6 tablet:px-12 transition-all duration-300 ${bgImg} ${bgTextColor}`}
    >
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
