import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { PageComponents } from "./routes";
import { useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import "nprogress/nprogress.css";
import "./App.css";
import Sidemenu from "./layouts/Sidemenu/Sidemenu";
import Cartmodal from "./layouts/Cartmodal/Cartmodal";
import { AuthModal } from "./layouts/AuthModal";
import CustomToastConfig from "./components/CustomToastConfig";
import { getAuthToken, getTokenDuration } from "./helpers/Auth";
import { useNavigate } from "react-router-dom";
import Notice from "./components/Notice/Notice";
import { useDispatch } from "react-redux";
import { cartActions } from "./store/cartSlice";
import ProgressBar from "./components/Progressbar";

function AppWrapper() {
  const { menuOpen, cartOpen, authOpen } = useContext(ModalContext);
  const token = getAuthToken();
  const firstname = localStorage.getItem("firstname");
  const usercode = localStorage.getItem("user");
  const { logoutHandler, loginHandler } = useContext(Authcontext);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const hideHeaderFooterRoutes = ["/reset-password"];
  const hideHeaderFooter = hideHeaderFooterRoutes.includes(location.pathname);

  useEffect(() => {
    if (!token) return;

    if (token === "EXPIRED") {
      // console.warn("Token is expired, logging out");
      logoutHandler();
      return navigate("/");
    }

    const tokenDuration = getTokenDuration();
    // console.log(`Token duration: ${tokenDuration}ms`);

    if (typeof tokenDuration !== "number" || tokenDuration <= 0) {
      // console.error(`Invalid token duration (${tokenDuration}), logging out`);
      logoutHandler();
      return navigate("/");
    }

    // If valid, log the user in
    loginHandler(token, firstname, usercode); // Sets `isLoggedIn` to true

    // Set a timer to log out when the token expires
    const timeoutId = setTimeout(() => {
      // console.log("Token expired, logging out");
      logoutHandler();
      return navigate("/");
    }, tokenDuration);

    return () => clearTimeout(timeoutId);
  }, [token, firstname, usercode, logoutHandler, loginHandler, navigate]);

  useEffect(() => {
    try {
      const localStorageData = JSON.parse(localStorage.getItem("cartSupply"));

      if (localStorageData) {
        dispatch(cartActions.replaceCart(localStorageData));
      } else {
        localStorage.setItem(
          "cartSupply",
          JSON.stringify({
            items: [],
            totalQuantity: 0,
          })
        );
      }
    } catch (error) {
      console.error("Error parsing cart data from localStorage:", error);
      localStorage.setItem(
        "cartSupply",
        JSON.stringify({
          items: [],
          totalQuantity: 0,
        })
      );
    }
  }, [dispatch]);

  return (
    <>
      <ProgressBar />
      <CustomToastConfig />
      <Notice />
      {!hideHeaderFooter && <Header />}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <Sidemenu />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 1, x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <Cartmodal />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {authOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AuthModal />
          </motion.div>
        )}
      </AnimatePresence>
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
