import { ReactElement, useMemo, useState } from "react";
import { DepositoAdicional } from "../components/interesCompuesto/DepositoAdicional";
import { CapitalInicial } from "../components/interesSimple/CapitalInicial";
import { Monto } from "../components/interesSimple/Monto";
import { Simple } from "../components/interesSimple/Simple";
import { TasaInteres } from "../components/interesSimple/TasaInteres";
import { Tiempo } from "../components/interesSimple/Tiempo";
import { ValorPresente } from "../components/interesSimple/ValorPresente";
import { OptionSelect } from "../shared/Options";

export const HomeIntSimple = () => {
  const [seleccion, setSeleccion] = useState<string>("interessimple");
  useMemo(() => seleccion, [seleccion]);

  const listComponents: Record<string, ReactElement> = {
    interessimple: <Monto />,
    capitalInicial: <Simple />,
    tasainteres: <CapitalInicial />,
    capitalizacion: <Tiempo />,
    valorpresente: <TasaInteres />,
    tiempo: <ValorPresente />,
    monto: <DepositoAdicional />,
  };

  return (
    <>
      <div className="bg-gray-200 p-2 text-center lg:text-start sm:text-center">
        <select
          name="seleccion"
          id="selecccion"
          className="bg-orange-500  text-white border-sky-950 border-2 font-bold rounded "
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <OptionSelect label="Interes Simple" value="interessimple" />
          <OptionSelect label="Capital" value="capitalInicial" />
          <OptionSelect label="Tasa de Interes" value="tasainteres" />
          <OptionSelect label="Valor Presente" value="valorpresente" />
          <OptionSelect label="Tiempo" value="tiempo" />
          <OptionSelect label="Monto" value="monto" />
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {listComponents[seleccion]}
      </div>
    </>
  );
};
