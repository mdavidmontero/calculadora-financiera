import React, { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { ButttonSubmitCalcular } from "../../shared/Botones";

export const ValorPresente = () => {
  const [ValorFuturo, setValorFuturo] = useState<string>("");
  const [tasaInteres, setTasaInteres] = useState<string>("");
  const [tiempo, setTiempo] = useState<string>("");
  const [ValorPresente, setValorPresente] = useState<string>("");

  const calcularValorPresente = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(tiempo);
    // Fórmula para calcular el valor presente
    const C = parseFloat(ValorFuturo) / (1 + i * n);
    setValorPresente(C.toFixed(2));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          El "valor presente" en el contexto de los intereses simples se refiere
          al valor actual de una suma de dinero que se recibirá o pagará en el
          futuro, después de tomar en cuenta los intereses que se acumularán o
          se pagarán durante un período de tiempo determinado.
          <p>* VF es el valor futuro.</p>
          <p>
            * i es la tasa de interés (o tasa de descuento) formato decimal.
          </p>
          <p>* t es el tiempo.</p>
          <p>Fórmula: VP = VF / (1 + i * t)</p>
        </ExplicacionFormula>
        <form
          onSubmit={calcularValorPresente}
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
              Tasa de interés (i):
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
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {ValorPresente && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>El Valor Presente es: ${ValorPresente}</p>
        </div>
      )}
    </>
  );
};
