import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

export const Simple = () => {
  const [capital, setCapital] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempo, setTiempo] = useState("");
  const [interessimple, setInteresSimple] = useState("");

  const calcularInteresSimple = (
    e: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(tiempo);
    const C = parseInt(capital) * i * n;
    setInteresSimple(C.toFixed(2));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          El interés simple (I) es una forma básica de calcular el interés sobre
          un préstamo o inversión, donde los intereses se calculan únicamente
          sobre el capital inicial durante un período de tiempo determinado.
          <p>* C es el capital inicial.</p>
          <p>
            * % es la tasa de interés (o tasa de descuento) formato decimal.
          </p>
          <p>* t es el tiempo.</p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularInteresSimple}
          className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital (C):
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
              Tasa de interés (%):
            </label>
            <input
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
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
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          />
        </form>
      </div>
      {interessimple && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>El Interes Simple es : ${interessimple}</p>
        </div>
      )}
    </>
  );
};
