
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,

} from "react-router-dom";
import Home from './components/pages/home';
import CheckoutPage from './components/pages/CheckoutPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/checkout/:id",
      element:<CheckoutPage/>
    }
    
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App