import Topic from './Topic';
import { useSelector } from 'react-redux';

const Header = () => {
  const { quizIcon, quizTitle } = useSelector((state) => state.menu); //取用 access state

  return (
    <div className='container flex flex-row justify-between'>
      <Topic key={quizTitle} img={quizIcon} text={quizTitle} />
      <div>dark mode</div>
    </div>
  );
};

export default Header;
