import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Meniu from "./pages/Meniu/Meniu";
import Contact from "./pages/Contact/Contact";

// layouts
import RootLayout from "./Layouts/RootLayout/RootLayout";
// import useFetch from "./hooks/useFetch";
import { ProductProvider } from "./contexts/ProductContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="meniu" element={<Meniu />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
export default function App() {
  // const {
  //   data: products,
  //   error,
  //   isPending,
  // } = useFetch("http://localhost:4000/products");

  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  );
}
