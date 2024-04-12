import { ReactElement, useMemo, useState } from "react";
import { OptionSelect } from "../shared/Options";
import { InteresSimpleCalculator } from "../components/tasaInteres/TasaInteresSimple";
import TasaInteresCompuesto from "../components/tasaInteres/TasaInteresCompuesto";
export const HomeTasaInteres = () => {
  const [seleccion, setSeleccion] = useState("interessimple");
  useMemo(() => seleccion, [seleccion]);
  const listComponents: Record<string, ReactElement> = {
    interessimple: <InteresSimpleCalculator />,
    interescompuesto: <TasaInteresCompuesto />,
  };
  return (
    <>
      <div className="bg-gray-200 p-2 text-center lg:text-start sm:text-center">
        <select
          name="seleccion"
          className="bg-orange-500 text-white border-sky-950 border-2 font-bold rounded"
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <OptionSelect label="Interes Simple" value="interessimple" />
          <OptionSelect label="Interes Compuesto" value="interescompuesto" />
        </select>
      </div>
      <div className="md:flex-row flex-col flex bg-gray-200 min-h-screen">
        {listComponents[seleccion]}
      </div>
    </>
  );
};
