import { useState } from "react";
import { formatter } from "../../utils/index";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";

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
          <p className="text-lg text-gray-800">
            El número de períodos en el contexto del interés compuesto se
            refiere al tiempo necesario para que una inversión o deuda alcance
            un cierto valor futuro, dados un capital inicial, una tasa de
            interés y el monto compuesto final.
          </p>
          <p className="text-lg text-gray-800">
            Se calcula utilizando la fórmula del interés compuesto:
          </p>
          <p className="text-lg text-gray-800 font-bold">
            n = (ln(VF) - ln(P)) / ln(1 + r)
          </p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc pl-8">
            <li>n = Número de períodos</li>
            <li>VF = Monto compuesto final</li>
            <li>P = Capital inicial</li>
            <li>r = Tasa de interés por período (en decimal)</li>
          </ul>
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
          <ButttonSubmitCalcular type="submit" label="Calcular" />
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
