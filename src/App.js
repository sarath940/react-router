// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
//   Route,
// } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Prodcuts from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

// Another way of doing the routes
// const routeDefintions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home />}></Route>
//     <Route path="/products" element={<Prodcuts />}></Route>
//   </Route>
// );
// const router = createBrowserRouter(routeDefintions);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Prodcuts /> },
      { path: "/products/:productId", element: <ProductDetail /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
