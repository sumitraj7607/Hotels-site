import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Whatsapppop from "../components/Whatsapppop";
import TopHeader from "../components/TopHeader";
import RotatingMarquee from "../components/RotatingMarquee";
import { Outlet, ScrollRestoration } from "react-router";
const Layout = function () {
  return (
    <>
      <ScrollRestoration />
      <TopHeader />
      <Navbar />
      <Outlet />
      <Whatsapppop />
      <RotatingMarquee />
      <Footer />
    </>
  );
};

export default Layout;
