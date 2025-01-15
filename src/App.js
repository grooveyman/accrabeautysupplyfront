import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PageComponents } from "./routes";
import { useEffect, useContext } from "react";
import {
  ModalToggleProvider,
  ModalContext,
  AuthContextProvider,
  CategoriesCtxProvider,
  Authcontext,
} from "./context";
import Header from "./layouts/Header/Header";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "./layouts/Footer/Footer";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "./App.css";
import "animate.css";
import Sidemenu from "./layouts/Sidemenu/Sidemenu";
import Cartmodal from "./layouts/Cartmodal/Cartmodal";
import { AuthModal } from "./layouts/AuthModal";
import CustomToastConfig from "./components/CustomToastConfig";
import { getAuthToken, getTokenDuration } from "./helpers/Auth";
import { useNavigate } from "react-router-dom";
import Notice from "./components/Notice/Notice";

function AppWrapper() {
  const location = useLocation();
  const { menuOpen, cartOpen, authOpen } = useContext(ModalContext);
  const token = getAuthToken();
  const { logoutHandler, loginHandler } = useContext(Authcontext);
    const navigate = useNavigate();

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
    if (!token) return;
  
    if (token === "EXPIRED") {
      // console.warn("Token is expired, logging out");
      logoutHandler();
      return navigate('/');
    }
  
    const tokenDuration = getTokenDuration();
    // console.log(`Token duration: ${tokenDuration}ms`);
  
    if (typeof tokenDuration !== "number" || tokenDuration <= 0) {
      // console.error(`Invalid token duration (${tokenDuration}), logging out`);
      logoutHandler();
      return navigate('/');
    }
  
    // If valid, log the user in
    loginHandler(); // Sets `isLoggedIn` to true
  
    // Set a timer to log out when the token expires
    const timeoutId = setTimeout(() => {
      // console.log("Token expired, logging out");
      logoutHandler();
      return navigate('/');
    }, tokenDuration);
  
    return () => clearTimeout(timeoutId);
  }, [token, logoutHandler, loginHandler, navigate]);
  
  

  return (
    <>
      <CustomToastConfig />
      <Notice />
      <Header />
      {menuOpen && <Sidemenu />}
      {cartOpen && <Cartmodal />}
      {authOpen && <AuthModal />}
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
    <AuthContextProvider>
      <CategoriesCtxProvider>
        <ModalToggleProvider>
          <BrowserRouter>
            <AppWrapper />
          </BrowserRouter>
        </ModalToggleProvider>
      </CategoriesCtxProvider>
    </AuthContextProvider>
  );
}

export default App;
