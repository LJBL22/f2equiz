import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import Menu from './Pages/Menu';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Layout from './Pages/Layout';
import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

const App = () => {
  const { theme: stateTheme } = useSelector((state) => state.menu);

  function ErrorBoundary() {
    let error = useRouteError();
    return (
      <h1 className='text-6xl font-bold text-red tracking-wider'>
        Oops, something went wrong. Please return to the index page.
      </h1>
    );
  }

  useLayoutEffect(() => {
    // check value to set data-theme
    if (stateTheme) {
      document.documentElement.setAttribute('data-theme', stateTheme);
    } else {
      document.documentElement.setAttribute('data-theme', '');
    }

    // if user has a preference, prefers-color-scheme detected
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [stateTheme]);

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
