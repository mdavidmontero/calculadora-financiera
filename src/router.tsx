import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layouts/Header";
import { Home } from "./layouts/Home";
import { HomeIntCompuesto } from "./views/HomeIntCompuesto";
import { HomeIntSimple } from "./views/HomeIntSimple";
import { HomeAnualidades } from "./views/HomeAnualidades";
import { Footer } from "./layouts/Footer";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compuesto" element={<HomeIntCompuesto />} />
        <Route path="simple" element={<HomeIntSimple />} />
        <Route path="anualidades" element={<HomeAnualidades />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default AppRouter;
