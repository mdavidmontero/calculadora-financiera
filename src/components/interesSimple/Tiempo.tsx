import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

export const Tiempo = () => {
  const [ValorFuturo, setValorFuturo] = useState("");
  const [ValorPresente, setValorPresente] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [tiempo, setTiempo] = useState("");

  const calcularTiempo = (
    e: React.FormEvent<HTMLFormElement> | React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(ValorPresente);
    const futuro = parseFloat(ValorFuturo);
    const C = (futuro / n - 1) / i;
    setTiempo(C.toFixed(2));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          el tiempo (t) se refiere al período de tiempo durante el cual se
          aplica la tasa de interés al capital inicial para calcular los
          intereses ganados o pagados
          <p>* VF es el valor futuro.</p>
          <p>* VP es el valor presente.</p>
          <p>
            * i es la tasa de interés (o tasa de descuento) formato decimal.
          </p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularTiempo}
          className="md:w-1/2 md:h-auto my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Valor Futuro (VF):
            </label>
            <input
              type="number"
              value={ValorFuturo}
              onChange={(e) => setValorFuturo(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Valor Presente (VP):
            </label>
            <input
              type="number"
              value={ValorPresente}
              onChange={(e) => setValorPresente(e.target.value)}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de Interes (i):
            </label>
            <input
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(e.target.value)}
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
      {tiempo && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>El tiempo fue de: {tiempo}</p>
        </div>
      )}
    </>
  );
};
