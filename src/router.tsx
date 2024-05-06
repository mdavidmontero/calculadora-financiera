import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./layouts/Header";
import { Home } from "./layouts/Home";
import { HomeIntCompuesto } from "./views/HomeIntCompuesto";
import { HomeIntSimple } from "./views/HomeIntSimple";
import { HomeTasaInteres } from "./views/HomeTasaInteres";
import { Footer } from "./layouts/Footer";
import HomeAnualidades from "./views/HomeAnualidades";
import HomeAmortizacion from "./views/HomeAmortizacion";
import HomeGradientes from "./views/HomeGradientes";

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compuesto" element={<HomeIntCompuesto />} />
        <Route path="simple" element={<HomeIntSimple />} />
        <Route path="tasainteres" element={<HomeTasaInteres />} />
        <Route path="anualidades" element={<HomeAnualidades />} />
        <Route path="amortizacion" element={<HomeAmortizacion />} />
        <Route path="gradientes" element={<HomeGradientes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default AppRouter;
