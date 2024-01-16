import { useSelector } from 'react-redux';

const Switch = () => {
  const { darkMode } = useSelector((state) => state.menu);

  return (
    <div className='flex flex-row w-auto items-center gap-2'>
      <div className='w-4 h-4 tablet:w-6 tablet:h-6'>
        <img src='./icon-sun-dark.svg' alt='light' />
      </div>
      <div className='w-8 h-5 bg-purple rounded-full relative tablet:w-12 tablet:h-7'>
        <div className='w-3 h-3 tablet:w-5 tablet:h-5 bg-pure-white rounded-full absolute inset-y-1 left-1'></div>
      </div>
      <div className='w-4 h-4 tablet:w-6 tablet:h-6'>
        <img src='./icon-moon-dark.svg' alt='dark' />
      </div>
    </div>
  );
};

export default Switch;
