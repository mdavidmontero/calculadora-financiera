import { BotonesNav } from "../shared/Botones";

const Botones = () => {
  return (
    <div className="md:w-1/2 lg:w-1/4 md:h-screen items-center  justify-center mx-auto ml-8 ">
      <div className="flex mt-52">
        <div className="mr-4 ">
          <BotonesNav value="Interes Simple" link="simple" />
          <BotonesNav value="Interes Compuesto" link="compuesto" />
          <BotonesNav value="Tasa de Interes" link="tasainteres" />
        </div>

        <div>
          <BotonesNav value="Anualidades" link="anualidades" />
          <BotonesNav value="Amortización" link="amortizacion" />
          <BotonesNav value="Gradientes" link="gradientes" />

        </div>
      </div>

    </div>
  );
};
export default Botones;
