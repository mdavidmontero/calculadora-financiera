import React, { useState, ChangeEvent, FormEvent } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

interface TiempoProps {}

export const Tiempo: React.FC<TiempoProps> = () => {
  const [ValorFuturo, setValorFuturo] = useState<string>("");
  const [ValorPresente, setValorPresente] = useState<string>("");
  const [tasaInteres, setTasaInteres] = useState<string>("");
  const [tiempoEnDias, setTiempoEnDias] = useState<string>("");
  const [tiempoAnios, setTiempoAnios] = useState<number>(0);
  const [tiempoMeses, setTiempoMeses] = useState<number>(0);
  const [tiempoDias, setTiempoDias] = useState<number>(0);

  const calcularTiempo = (
    e: FormEvent<HTMLFormElement> | ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    const i = parseFloat(tasaInteres) / 100;
    const n = parseInt(ValorPresente);
    const futuro = parseFloat(ValorFuturo);
    // Fórmula para calcular el tiempo en días
    const C = (futuro / n - 1) / i;
    const dias = C.toFixed(2);
    setTiempoEnDias(dias);

    // Convertir los días a años, meses y días
    const years = Math.floor(parseFloat(dias) / 365);
    const months = Math.floor((parseFloat(dias) % 365) / 30);
    const days = Math.floor((parseFloat(dias) % 365) % 30);

    setTiempoAnios(years);
    setTiempoMeses(months);
    setTiempoDias(days);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          El tiempo (t) se refiere al período de tiempo durante el cual se
          aplica la tasa de interés al capital inicial para calcular los
          intereses ganados o pagados
          <p>* VF es el valor futuro.</p>
          <p>* VP es el valor presente.</p>
          <p>
            * i es la tasa de interés (o tasa de descuento) formato decimal.
          </p>
          <p>
            Fórmula: {"C = (VF/VP - 1) / i"}
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
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {tiempoEnDias && (
        <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <p>
            El tiempo fue de: {tiempoAnios} años, {tiempoMeses} meses y{" "}
            {tiempoDias} días.
          </p>
        </div>
      )}
    </>
  );
};
