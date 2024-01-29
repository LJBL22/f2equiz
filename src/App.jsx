import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './Pages/Menu';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Layout from './Pages/Layout';
import ErrorBoundary from './Components/ErrorBoundary';
import { setTheme } from './store';

const App = () => {
  const dispatch = useDispatch();

  // 有來訪紀錄？採用：參考偏好顏色模式
  useEffect(() => {
    // const storedTheme = localStorage.getItem('theme');
    // if (storedTheme) {
    //   document.documentElement.setAttribute('data-theme', storedTheme);
    //   // console.log('1st useEffect: stored-theme', storedTheme);
    // } else {
    const prefersDarkTheme = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    const initialTheme = prefersDarkTheme ? 'dark' : 'light';
    // 若無偏好則設定 light ，接著設定 data-theme & localStorage
    document.documentElement.setAttribute('data-theme', initialTheme);
    localStorage.setItem('theme', initialTheme);
    // console.log('1st useEffect:prefers-color-theme', initialTheme);
    // }
  }, []);

  // 從 localStorage 取值，設定 state 值
  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    dispatch(setTheme(currentTheme));
    // console.log('2nd useEffect：currentTheme', currentTheme);
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        //outlet
        {
          path: '',
          element: <Menu />,
        },
        {
          path: ':topic', //依據帶入的參數而變動 //可自由命名變數
          element: <Quiz />,
        },
        {
          path: 'result',
          element: <Result />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
