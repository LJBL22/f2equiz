import Switch from './Switch';
import Topic from './Topic';
import { useSelector } from 'react-redux';

const Header = () => {
  const { quizIcon, quizTitle } = useSelector((state) => state.menu); //取用 access state
  const bgColors = {
    HTML: '#FFF1E9',
    CSS: '#E0FDEF',
    JavaScript: '#EBF0FF',
    Accessibility: '#F6E7FF',
  };

  const bgStyle = `bg-[${bgColors[quizTitle]}]`;
  return (
    <header className='flex flex-row justify-between py-4 '>
      <div
        className={`flex flex-row p-3 items-center ${
          !quizTitle && 'invisible'
        }`}
      >
        <img
          src={quizIcon}
          alt={quizTitle}
          className={`w-10 h-10 p-2 rounded-md ${bgStyle} mr-4`}
        />
        <span className='inline-block text-lg'>{quizTitle}</span>
      </div>
      <Switch />
    </header>
  );
};

export default Header;
