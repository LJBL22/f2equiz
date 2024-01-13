import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import { useSelector } from 'react-redux';

const Layout = () => {
  const { darkMode } = useSelector((state) => state.menu);
  const bgImg = darkMode
    ? { backgroundImage: `url('/pattern-background-mobile-dark.svg')` }
    : { backgroundImage: `url('/pattern-background-mobile-light.svg')` };

  const bgTextColor = darkMode
    ? 'text-pure-white bg-navy-grey'
    : 'text-navy-dark bg-light-grey';

  return (
    <div className={`h-screen font-rubik px-6 ${bgTextColor}`} style={bgImg}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
