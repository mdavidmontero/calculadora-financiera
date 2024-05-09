import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";

export const TasaInteres = () => {
  const [capital, setCapital] = useState(0);
  const [montoCompuesto, setMontoCompuesto] = useState(0);
  const [periodos, setPeriodos] = useState(0);
  const [tasaInteres, setTasaInteres] = useState("");

  const calcularTasaInteres = (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const i = Math.pow(montoCompuesto / capital, 1 / periodos) - 1;
    setTasaInteres(i.toFixed(3));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            La "Tasa de Interés" se refiere al porcentaje aplicado a un capital
            inicial para determinar el crecimiento de dicho capital en un
            período determinado.
          </p>
          <p className="text-lg text-gray-800">
            La tasa de interés se puede calcular utilizando la fórmula del
            interés compuesto:
          </p>
          <p className="text-lg text-gray-800 font-bold">
            r = (VF / P) ^ (1 / n) - 1
          </p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularTasaInteres}
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Capital Inicial"
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
              placeholder="Monto Compuesto Final"
              value={montoCompuesto}
              onChange={(e) => setMontoCompuesto(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Periodos:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={periodos}
              placeholder="Nro periodos"
              onChange={(e) => setPeriodos(parseInt(e.target.value))}
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {tasaInteres && (
        <Resultado>
          <p>La tasa de interés es: {tasaInteres}%</p>
          <p>
            La tasa de interés es: {(parseInt(tasaInteres) * 100).toFixed(2)}%
          </p>
        </Resultado>
      )}
    </>
  );
};

export default TasaInteres;
