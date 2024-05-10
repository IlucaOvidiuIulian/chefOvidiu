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
import Despre from "./pages/Despre/Despre";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// layouts

import RootLayout from "./Layouts/RootLayout/RootLayout";
import AuthLayout from "./Layouts/AuthLayout/AuthLayout";

// contexts

import { ProductProvider } from "./contexts/ProductContext";
import { AuthProvider } from "./contexts/AuthContext";
import Basket from "./pages/Basket/Basket";
import { BasketProvider } from "./contexts/BasketContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="meniu" element={<Meniu />} />
      <Route path="contact" element={<Contact />} />
      <Route path="despre" element={<Despre />} />
      <Route path="auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="basket" element={<Basket />} />
    </Route>
  )
);

export default function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <BasketProvider>
          <RouterProvider router={router} />
        </BasketProvider>
      </ProductProvider>
    </AuthProvider>
  );
}
