import React, { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { formatter } from "../../utils";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";

export const MontoConPeriodoFraccionario = () => {
  const [capital, setCapital] = useState(0);
  const [meses, setMeses] = useState(0);
  const [dias, setDias] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [resultado, setResultado] = useState("");

  const tiempoTotalEnMeses = meses + dias / 30;

  const calcularMontoFinal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tasaMensual = tasaInteres / 100 / 12;
    const montoFinal = capital * Math.pow(1 + tasaMensual, tiempoTotalEnMeses);
    setResultado(formatter.format(montoFinal));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            El "Monto con Período Fraccionario" se refiere al cálculo del monto
            final de un capital cuando el período de tiempo incluye meses
            completos y una fracción de un mes. Esto es común en situaciones
            donde los intereses se capitalizan mensualmente y el tiempo
            transcurrido no es un número entero de años.
          </p>
          <p className="text-lg text-gray-800">**Fórmula:**</p>
          <p className="text-lg text-gray-800 font-bold">
            Monto final = Capital inicial * (1 + Tasa de interés mensual) ^
            (Meses + (Días / 30))
          </p>
          <p className="text-lg text-gray-800">
            Esta fórmula te permite calcular el monto final de un capital
            inicial con un período de tiempo que incluye meses completos y una
            fracción de un mes, utilizando la tasa de interés mensual y el
            tiempo total en meses.
          </p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularMontoFinal}
          action=""
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              type="number"
              value={capital}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              onChange={(e) => setCapital(parseFloat(e.target.value))}
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Meses:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={meses}
              onChange={(e) => setMeses(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Días:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={dias}
              onChange={(e) => setDias(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(parseFloat(e.target.value))}
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {resultado && (
        <Resultado>
          <h3>El monto final es: {resultado}</h3>
        </Resultado>
      )}
    </>
  );
};
