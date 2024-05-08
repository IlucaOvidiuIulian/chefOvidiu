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
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="meniu" element={<Meniu />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
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
    <AuthProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </AuthProvider>
  );
}
