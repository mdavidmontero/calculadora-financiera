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
          <p>
            {" "}
            Capital inicial: Es la cantidad de dinero inicialmente invertida o
            depositada.
          </p>
          <p>Tasa de interés: capitalizable mensualmente. </p>
          <p>
            Periodo de tiempo: Este período incluye meses completos y una
            fracción de un mes.
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
