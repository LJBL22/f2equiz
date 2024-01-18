import {
  RouterProvider,
  createBrowserRouter,
  useRouteError,
} from 'react-router-dom';
import Menu from './Pages/Menu';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Layout from './Pages/Layout';

const App = () => {
  function ErrorBoundary() {
    let error = useRouteError();
    return (
      <h1 className='text-6xl font-bold text-rose-500 tracking-wider'>
        Oops, something goes wrong, please go back to the index page.
      </h1>
    );
  }

  const router = createBrowserRouter([
    //之前這裡誤刪、沒放進 [] 會跳錯  "You must provide a non-empty routes array to createRouter"；官方文件也是有用 [] 包覆
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
