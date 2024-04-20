import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// pages
import Home from "./pages/Home/Home";
import Meniu from "./pages/Meniu/Meniu";

// layouts
import RootLayout from "./Layouts/RootLayout/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="meniu" element={<Meniu />} />
    </Route>
  )
);
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
