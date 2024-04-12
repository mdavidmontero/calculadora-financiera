import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { formatter } from "../../utils";
import { Resultado } from "../../shared/Resultado";
import { CapitalizacionType } from "../../types";

const initialState: CapitalizacionType = {
  capital: 0,
  interesRate: 0,
  compoundingPeriod: "trimestral",
  timeperiodo: 0,
};

export const Capitalizacion = () => {
  const [datos, setDatos] = useState<CapitalizacionType>(initialState);
  const [resultado, setResultado] = useState<string | number>(0);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const periodsPerYear: Record<string, number> = {
      diario: 365,
      mensual: 12,
      trimestral: 4,
      cuatrimestral: 3,
      semestral: 2,
      anual: 1,
    };
    const numberOfPeriods = periodsPerYear[datos.compoundingPeriod];
    const accumulatedAmount =
      datos.capital *
      Math.pow(
        1 + datos.interesRate / 100 / numberOfPeriods,
        numberOfPeriods * (datos.timeperiodo / 12)
      );
    setResultado(formatter.format(accumulatedAmount));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            El capitalización es el proceso de acumular el capital en un
            determinado tiempo, en función de la tasa de interés y el periodo de
            capitalización.
          </p>
          <p>
            El cálculo del capital acumulado se realiza utilizando la fórmula:
          </p>
          <p>
            <strong>
              <em>
                Capital acumulado = Capital inicial * (1 + Tasa de interés / 100
                / Periodos de capitalización) ^ (Periodos de capitalización *
                Tiempo)
              </em>
            </strong>
          </p>
        </ExplicacionFormula>
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              name="capital"
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={datos.capital}
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés anual (%):
            </label>
            <input
              name="interesRate"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={datos.interesRate}
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capitalización:
            </label>
            <select
              name="compoundingPeriod"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={datos.compoundingPeriod}
              onChange={handleChange}
            >
              <option value="diario">Diario</option>
              <option value="mensual">Mensual</option>
              <option value="trimestral">Trimestral</option>
              <option value="cuatrimestral">Cuatrimestral</option>
              <option value="semestral">Semestral</option>
              <option value="anual">Anual</option>
            </select>
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo (meses):
            </label>
            <input
              name="timeperiodo"
              type="number"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={datos.timeperiodo}
              onChange={handleChange}
            />
          </div>
          <input
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value={"Calcular"}
            type="submit"
          />
        </form>
      </div>
      {resultado !== 0 && (
        <Resultado>
          <h3>El monto final es: {resultado}</h3>
        </Resultado>
      )}
    </>
  );
};
