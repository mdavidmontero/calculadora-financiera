import { BotonesNav } from "../shared/Botones";

const Botones = () => {
  return (
    <div className="md:w-1/2 lg:w-1/4 md:h-screen items-center m-32 justify-center mx-auto ml-8 ">
      <BotonesNav value="Interes Simple" link="simple" />
      <BotonesNav value="Interes Compuesto" link="simple" />
      <BotonesNav value="Tasa de Interes" link="anualidades" />
    </div>
  );
};
export default Botones;
