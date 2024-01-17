import { useSelector } from 'react-redux';
import Topic from './Topic';
import Switch from './Switch';

const Header = () => {
  const { quizIcon, quizTitle } = useSelector((state) => state.menu);

  return (
    <header className='flex flex-row justify-between py-4 tablet:py-10 desktop:py-20 desktop:max-w-6xl desktop:my-0 desktop:mx-auto'>
      <Topic isBtn={false} img={quizIcon} text={quizTitle} />
      <Switch />
    </header>
  );
};

export default Header;
