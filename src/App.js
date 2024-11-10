import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PageComponents } from "./routes";
import { useEffect } from "react";
import { ModalToggleProvider } from "./context";
import Header from "./layouts/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./layouts/Footer/Footer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./App.css";
import 'animate.css';
import Sidemenu from "./layouts/Sidemenu/Sidemenu";

function AppWrapper() {
  const location = useLocation();

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

  return (
    <>
      <Header />
      <Sidemenu />
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
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </ModalToggleProvider>
  );
}

export default App;
