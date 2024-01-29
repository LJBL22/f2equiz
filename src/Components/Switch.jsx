import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store';

const Switch = () => {
  const { theme } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className='flex flex-row w-auto items-center gap-2'>
      <div className='w-4 h-4 tablet:w-6 tablet:h-6'>
        <img
          src={
            theme === 'dark' ? './icon-sun-light.svg' : './icon-sun-dark.svg'
          }
          alt='icon-sun'
        />
      </div>
      <div className='w-8 h-5 bg-purple rounded-full relative tablet:w-12 tablet:h-7'>
        <input
          type='checkbox'
          onChange={handleChange}
          className={`appearance-none w-3 h-3 tablet:w-5 tablet:h-5 bg-pure-white rounded-full absolute inset-y-1 left-1 transition-transform cursor-pointer ${
            theme === 'dark'
              ? 'translate-x-3 tablet:translate-x-5'
              : 'translate-x-0'
          }`}
        />
      </div>
      <div className='w-4 h-4 tablet:w-6 tablet:h-6'>
        <img
          src={
            theme === 'dark' ? './icon-moon-light.svg' : './icon-moon-dark.svg'
          }
          alt='icon-moon'
        />
      </div>
    </div>
  );
};

export default Switch;
