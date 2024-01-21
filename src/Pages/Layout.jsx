import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store';
import { useEffect } from 'react';

const Layout = () => {
  const { theme } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    dispatch(setTheme(currentTheme));
  }, [dispatch, theme]);

  const bgImg = theme === 'dark' ? 'dark-bg' : 'light-bg';

  return (
    <div
      className={`min-h-dvh font-rubik px-6 tablet:px-12 ${bgImg} text-title-main bg-bkg transition-all duration-300`}
    >
      <Header />
      <main className='desktop:grid desktop:grid-cols-2 desktop:gap-24 screen:gap-28 desktop:max-w-6xl desktop:my-0 desktop:mx-auto'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
