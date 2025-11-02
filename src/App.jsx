import { Children, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TopHeader from "./components/TopHeader";
import SliderHomepage from "./components/SliderHomepage";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import WhatsApppop from "./components/Whatsapppop";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/Contact";
import Offers from "./pages/Offers";
import Dining from "./pages/Dining";
import Rooms from "./pages/Rooms";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./pages/Layout";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Rooms", element: <Rooms /> },
      { path: "/AboutUs", element: <AboutUs /> },
      { path: "/Dining", element: <Dining /> },
      { path: "/Offers", element: <Offers /> },
      { path: "/Contact", element: <ContactPage /> },
    ],
  },

  ,
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
      {/* <TopHeader/>
     <SliderHomepage/>
     <AboutSection/>
     <WhatsApppop/>
     <Footer/> */}
      {/* <AboutUs/> */}
    </>
  );
}

export default App;
