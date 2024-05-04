import { ReactElement, useMemo, useState } from "react";
import { OptionSelect } from "../shared/Options";
import SistemaAleman from "../components/amortizacion/SistemaAleman";
import SistemaAmericano from "../components/amortizacion/SistemaAmericano";
import SistemaFrances from "../components/amortizacion/SistemaFrances";

export default function HomeAmortizacion() {
  const [seleccion, setSeleccion] = useState<string>("sistemaAleman");
  useMemo(() => seleccion, [seleccion]);

  const listComponents: Record<string, ReactElement> = {
    sistemaAleman: <SistemaAleman />,
    sistemaAmericano: <SistemaAmericano />,
    sistemaFrances: <SistemaFrances />,
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
          <OptionSelect label="Sistema Aleman" value="sistemaAleman" />
          <OptionSelect label="Sistema Americano" value="sistemaAmericano" />
          <OptionSelect label="Sistema Frances" value="sistemaFrances" />
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {listComponents[seleccion]}
      </div>
    </>
  );
}
