import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Catalog from "./pages/Catalog";
import RootRoute from "./pages/RootRout";
import BadRoutPage from "./pages/BadRoutPage";
import BookPage from "./components/book-page/BookPage";
import { BOOK, CART, CATALOG, HOME } from './constants/routes';
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <RootRoute />,
        errorElement: <BadRoutPage />,
        children: [
            { path: HOME, element: <Home /> },
            { path: CART, element: <Cart /> },
            { path: BOOK + '/*', element: <BookPage /> }
        ]
    },
    { path: CATALOG + '/*', element: <Catalog />, errorElement: <BadRoutPage /> }
]);

function App() {
    document.title = "Books shelf";
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={routes}/>
            </PersistGate>
        </Provider>
    );
}

export default App;
