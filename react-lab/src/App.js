import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import RootRoute from "./pages/RootRout";
import BadRoutPage from "./pages/BadRoutPage";
import BookPage from "./components/book-page/BookPage";
import {HOME, CATALOG, CART, BOOK} from './constants/routes'

const routes = createBrowserRouter([
  {
      path: '/',
      element: <RootRoute/>,
      errorElement: <BadRoutPage/>,
      children: [
          {path: HOME, element: <Home/>},
          {path: CART, element: <Cart/>},
          {path: BOOK + '/*', element: <BookPage/>}
      ]
  },
  {path: CATALOG, element: <Catalog/> , errorElement: <BadRoutPage/>}
]);

function App() {
  return (
      <RouterProvider router={routes}/>
  );
}

export default App;