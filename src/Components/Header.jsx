import { useSelector } from 'react-redux';
import Topic from './Topic';
import Switch from './Switch';

const Header = () => {
  const { quizIcon, quizTitle } = useSelector((state) => state.menu);

  return (
    <header className='flex flex-row justify-between py-4 '>
      <Topic isBtn={false} img={quizIcon} text={quizTitle} />
      <Switch />
    </header>
  );
};

export default Header;
