import Display from './components/display/Display'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Cart from './components/cart/Cart'
import Placeaorder from './components/placeaorder/Placeaorder'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
function App({children}) {
  const browserRouter = createBrowserRouter([
    {
      path:'',
      element:<Display />,
    },
         {
          path:'cart',
          element:<Cart />
         },
         {
           path:'placeaorder',
           element:<Placeaorder />
         },
         {
           path:'register',
           element:<Register />
         },
         {
           path:'login',
           element:<Login />
         }
  ]);

  return <RouterProvider router={browserRouter}>
        {children}
    </RouterProvider>;
}
export default App
