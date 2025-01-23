import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";

const usePageLoading = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    setLoading(true);
    NProgress.start();

    const timer = setTimeout(() => {
      setLoading(false);
      NProgress.done();
    }, 300); // Simulated load time

    return () => {
      clearTimeout(timer);
      NProgress.done();
    };
  }, [location.pathname]);

  return loading;
};

export default usePageLoading;
