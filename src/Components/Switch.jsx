import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../store';
import { useEffect } from 'react';

const Switch = () => {
  const { theme } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  // 已經在 app 執行 1) 在 root 放 light 2)在localS 放 light
  // 這裡關注 2) 的東西要再 set => 後續可能會影響 toggle 的位置 （dark 就在右、light就在左）

  const handleChange = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(newTheme));
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', theme);
    } else if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);
  return (
    <div className='flex flex-row w-auto items-center gap-2'>
      <div className='w-4 h-4 tablet:w-6 tablet:h-6'>
        {theme === 'dark' ? (
          <img src='./icon-sun-light.svg' alt='icon-sun' />
        ) : (
          <img src='./icon-sun-dark.svg' alt='icon-sun' />
        )}
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
        {theme === 'dark' ? (
          <img src='./icon-moon-light.svg' alt='icon-moon' />
        ) : (
          <img src='./icon-moon-dark.svg' alt='icon-moon' />
        )}
      </div>
    </div>
  );
};

// 先用現在寫寫看 xx
// button onClick
// radio onChange => 觸發事件 1）更改 state 2)滑動（也就是增加一個 classname)

export default Switch;
