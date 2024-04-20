import "./RootLayout.css";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
