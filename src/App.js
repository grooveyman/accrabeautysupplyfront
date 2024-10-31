import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageComponents } from "./routes";
import Header from "./layouts/Header/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {PageComponents.map((page) => (
          <Route key={page.id} path={page.path} element={page.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
