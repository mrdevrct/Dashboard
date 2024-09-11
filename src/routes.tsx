import { RoutesType } from "./utils/Route.types";
import Home from "./pages/home/Home";
import UserList from "./pages/users/UserList";
import NewUser from "./pages/new-user/NewUser";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import NotFound from "./pages/not-found/NotFound";

const routes:RoutesType = [ 
    { path: '/' , element: <Home/> },
    { path: '/users' , element: <UserList/> },
    { path: '/new-user' , element: <NewUser/> },
    { path: '/products' , element: <Products/> },
    { path: '/product/:id' , element: <Product/> },
    { path: '*' , element: <NotFound/> },
]

export default routes