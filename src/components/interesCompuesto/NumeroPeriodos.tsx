import { useState } from "react";
import { formatter } from "../../utils/index";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { Resultado } from "../../shared/Resultado";

export const NumeroPeriodos = () => {
  const [capital, setCapital] = useState(0);
  const [montoCompuesto, setMontoCompuesto] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [periodos, setPeriodos] = useState("");

  const calculatePeriods = (
    e: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    const i = tasaInteres / 100;
    const n = (Math.log(montoCompuesto) - Math.log(capital)) / Math.log(1 + i);
    setPeriodos(formatter.format(n));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto my-10">
        <ExplicacionFormula>
          <p>VF es el monto compuesto final.</p>
          <p>P es el capital inicial.</p>
          <p>r es la tasa de interés por período.</p>
        </ExplicacionFormula>
        <form
          onSubmit={calculatePeriods}
          action=""
          className=" bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={capital}
              onChange={(e) => setCapital(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Monto compuesto final:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={montoCompuesto}
              onChange={(e) => setMontoCompuesto(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(parseInt(e.target.value))}
            />
          </div>
          <button
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          >
            Calcular
          </button>
        </form>
      </div>

      {periodos && (
        <Resultado>
          <p>
            El número de periodos es: {periodos} ={" "}
            <span>{Math.round(parseInt(periodos))}</span>{" "}
          </p>
        </Resultado>
      )}
    </>
  );
};
