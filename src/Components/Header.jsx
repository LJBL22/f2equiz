import Switch from './Switch';
import { useSelector } from 'react-redux';

const Header = () => {
  const { quizIcon, quizTitle } = useSelector((state) => state.menu); //取用 access state

  const bgColors = {
    HTML: '#FFF1E9',
    CSS: '#E0FDEF',
    JavaScript: '#EBF0FF',
    Accessibility: '#F6E7FF',
  };

  const bgStyle = {
    // JIT Tailwind CSS
    backgroundColor: bgColors[quizTitle],
  };

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
          className='w-10 h-10 p-2 rounded-md mr-4'
          style={bgStyle}
        />
        <span className='inline-block text-lg font-medium'>{quizTitle}</span>
      </div>
      <Switch />
    </header>
  );
};

export default Header;
