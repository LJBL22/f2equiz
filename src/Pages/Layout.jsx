import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { darkMode } = useSelector((state) => state.menu);
  const bgImg = darkMode ? 'dark-bg' : 'light-bg';

  const bgTextColor = darkMode ? 'text-pure-white' : 'text-navy-dark';
  return (
    <div
      className={`h-screen font-rubik px-6 tablet:px-12 ${bgImg} ${bgTextColor} transition-all duration-300`}
    >
      <Header />
      <main className='desktop:grid desktop:grid-cols-2 desktop:gap-24 screen:gap-28 desktop:max-w-6xl desktop:my-0 desktop:mx-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
