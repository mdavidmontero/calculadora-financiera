import React, { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { formatter } from "../../utils";
import { ButttonSubmitCalcular } from "../../shared/Botones";

export const TasaInteres = () => {
  const [InteresSimple, setInteresSimple] = useState("");
  const [capital, setCapital] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");

  const calcularTasaInteres = (
    e: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const i = parseInt(capital);
    const n = parseInt(tiempo);
    const C = (parseInt(InteresSimple) / i) * n;
    setTasaInteres(formatter.format(C * 100));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          La tasa de interés (i) en el contexto de los intereses simples se
          refiere al porcentaje del capital inicial que se acumula como
          intereses durante un período de tiempo determinado
          <p>* I es el interes simple.</p>
          <p>* C es el capital inicial.</p>
          <p>* t es el tiempo.</p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularTasaInteres}
          className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Interes Simple (I):
            </label>
            <input
              type="number"
              value={InteresSimple}
              onChange={(e) => setInteresSimple(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital Inicial (C):
            </label>
            <input
              type="number"
              value={capital}
              onChange={(e) => setCapital(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo (t):
            </label>
            <input
              type="number"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {tasaInteres && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>La tasa de interes fue: ${tasaInteres}</p>
        </div>
      )}
    </>
  );
};
