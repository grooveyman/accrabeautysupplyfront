import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PageComponents } from "./routes";
import { useEffect, useContext } from "react";
import { ModalToggleProvider, ModalContext } from "./context";
import Header from "./layouts/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./layouts/Footer/Footer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./App.css";
import "animate.css";
import Sidemenu from "./layouts/Sidemenu/Sidemenu";
import Cartmodal from "./layouts/Cartmodal/Cartmodal";

function AppWrapper() {
  const location = useLocation();
  const { menuOpen, cartOpen } = useContext(ModalContext);

  useEffect(() => {
    // Configure nprogress to disable the spinner
    NProgress.configure({ showSpinner: false });
    // Start the progress bar when the location changes
    NProgress.start();

    // Complete the progress bar after a short delay (to simulate loading)
    const timer = setTimeout(() => {
      NProgress.done();
    }, 300);

    window.scrollTo(0, 0);

    return () => {
      clearTimeout(timer); // Cleanup timer
      NProgress.done(); // Ensure progress stops on unmount
    };
  }, [location]);

  useEffect(() => {
    if (menuOpen || cartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, cartOpen]);

  return (
    <>
      <Header />
      {menuOpen && <Sidemenu />}
      {cartOpen && <Cartmodal />}
      <Routes>
        {PageComponents.map((page) => (
          <Route key={page.id} path={page.path} element={page.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ModalToggleProvider>
      <BrowserRouter basename="/accrabeautysupplyfront">
        <AppWrapper />
      </BrowserRouter>
    </ModalToggleProvider>
  );
}

export default App;
