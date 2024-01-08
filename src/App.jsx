import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Menu from './Pages/Menu';
import Quiz from './Pages/Quiz';
import Result from './Pages/Result';
import Layout from './Pages/Layout';

const App = () => {
  const router = createBrowserRouter([
    //之前這裡誤刪、沒放進 [] 會跳錯  "You must provide a non-empty routes array to createRouter"；官方文件也是有用 [] 包覆
    {
      path: '/',
      element: <Layout />,
      children: [
        //outlet
        {
          path: '',
          element: <Menu />,
        },
        {
          path: 'quiz',
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
