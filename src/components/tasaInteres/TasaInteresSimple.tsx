import { useState } from "react";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

export function InteresSimpleCalculator() {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInteresAnual, setTasaInteresAnual] = useState(0);
  const [tiempo, setTiempo] = useState(0);
  const [frecuenciaTiempo, setFrecuenciaTiempo] = useState("anios");
  const [interesSimple, setInteresSimple] = useState(0);

  const calcularInteresSimple = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let tiempoEnAnios = tiempo;
    if (frecuenciaTiempo === "meses") {
      tiempoEnAnios = tiempo / 12;
    } else if (frecuenciaTiempo === "dias") {
      tiempoEnAnios = tiempo / 365;
    }

    const r = tasaInteresAnual / 100;
    const I = capitalInicial * r * tiempoEnAnios;
    setInteresSimple(I);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
      <ExplicacionFormula>
      <p>
      El interés simple es un método de calcular el interés sobre un capital
      inicial durante un período de tiempo determinado. La fórmula para calcular
      el interés simple es:
      </p>
      <p className="mt-2">
        <span className="font-bold">
        Interés Simple = Capital Inicial * Tasa de Interés Anual * Tiempo
        </span>
      </p>
      <p className="mt-4">
      Esta fórmula se utiliza para calcular el interés simple en función del
      capital inicial, la tasa de interés anual y el tiempo en años, meses o
      días, según la frecuencia especificada.
      </p>
      </ExplicacionFormula>
        <form
          action=""
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calcularInteresSimple}
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital Inicial ($):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de Interés Anual (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInteresAnual}
              onChange={(e) => setTasaInteresAnual(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempo}
              onChange={(e) => setTiempo(parseFloat(e.target.value))}
            />
            <select
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={frecuenciaTiempo}
              onChange={(e) => setFrecuenciaTiempo(e.target.value)}
            >
              <option value="anios">Años</option>
              <option value="meses">Meses</option>
              <option value="dias">Días</option>
            </select>
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {interesSimple !== 0 && (
        <Resultado>
          <h3>Interés Simple: ${interesSimple.toFixed(2)}</h3>
        </Resultado>
      )}
    </>
  );
}
