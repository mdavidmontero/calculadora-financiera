import React, { useState } from "react";
import ExplicacionFormula from "../../../shared/ExplicacionFormula";

interface State {
  tiempo: string;
  interes: string;
  inicial: string;
  gradiente: string;
  tipoGradiente: "creciente" | "decreciente";
  resultado: string;
}

const ValorPresenteGeometrico: React.FC = () => {
  const [state, setState] = useState<State>({
    tiempo: "",
    interes: "",
    inicial: "",
    gradiente: "",
    tipoGradiente: "creciente",
    resultado: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const validar = () => {
    const { tiempo, interes, inicial, gradiente } = state;
    if (!tiempo) {
      window.alert("Por favor, digite el tiempo...");
    } else if (!interes) {
      window.alert("Por favor, digite la tasa de interés...");
    } else if (!inicial) {
      window.alert("Por favor, digite el valor inicial...");
    } else if (!gradiente) {
      window.alert("Por favor, digite la gradiente...");
    } else {
      calcularValorPresente();
    }
  };

  const calcularValorPresente = () => {
    const { tiempo, interes, inicial, gradiente, tipoGradiente } = state;
    const interesNum = parseFloat(interes) / 100;
    const gradienteNum = parseFloat(gradiente) / 100;
    let valorPresente;

    if (tipoGradiente === "creciente") {
      if (interesNum !== gradienteNum) {
        const parteIzquierda =
          parseFloat(inicial) / (interesNum - gradienteNum);
        const primeraParte = (1 + gradienteNum) / (1 + interesNum);
        const segundaParte = Math.pow(primeraParte, parseFloat(tiempo));
        const parteDerecha = 1 - segundaParte;
        valorPresente = parteIzquierda * parteDerecha;
      } else {
        const parteIzquierda = parseFloat(tiempo) * parseFloat(inicial);
        const parteDerecha = 1 + interesNum;
        valorPresente = parteIzquierda / parteDerecha;
      }
    } else {
      if (interesNum !== gradienteNum) {
        const parteIzquierda =
          parseFloat(inicial) / (interesNum + gradienteNum);
        const primeraParte = (1 - gradienteNum) / (1 + interesNum);
        const segundaParte = Math.pow(primeraParte, parseFloat(tiempo));
        const parteDerecha = 1 - segundaParte;
        valorPresente = parteIzquierda * parteDerecha;
      } else {
        const parteIzquierda = parseFloat(inicial) / (interesNum + interesNum);
        const primeraParte = (1 - interesNum) / (1 + interesNum);
        const segundaParte = Math.pow(primeraParte, parseFloat(tiempo));
        const parteDerecha = 1 - segundaParte;
        valorPresente = parteIzquierda * parteDerecha;
      }
    }

    setState((prevState) => ({
      ...prevState,
      resultado: valorPresente.toFixed(2),
    }));
    // Limpiar los campos después de mostrar el resultado
    setState((prevState) => ({
      ...prevState,
      tiempo: "",
      interes: "",
      inicial: "",
      gradiente: "",
    }));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            El Valor Presente Geométrico se utiliza para calcular el valor
            presente de una serie de flujos de efectivo que siguen un gradiente
            geométrico.
          </p>
          <p className="text-lg text-gray-800">
            La fórmula utilizada para calcular el Valor Presente Geométrico es:
          </p>
          <p className="text-lg text-gray-800 font-bold">
            VP = P / (i - g) * ((1 + g) / (1 + i))^n - 1
          </p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc pl-8">
            <li className="text-lg text-gray-800">VP es el Valor Presente.</li>
            <li className="text-lg text-gray-800">P es el monto inicial.</li>
            <li className="text-lg text-gray-800">i es la tasa de interés.</li>
            <li className="text-lg text-gray-800">g es el gradiente.</li>
            <li className="text-lg text-gray-800">
              n es el número de periodos.
            </li>
          </ul>
        </ExplicacionFormula>
        <div className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">

          <div>
            <div className="my-2">
              
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Tiempo
              </label>
              <input
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="number"
                name="tiempo"
                value={state.tiempo}
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Tasa de Interés
              </label>
              <input
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="number"
                name="interes"
                value={state.interes}
                onChange={handleChange}
              />
            </div>
            <div className="my-2">
              <label className="uppercase text-gray-600 block text-xl font-bold">
                Valor Inicial
              </label>
              <input
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                type="number"
                name="inicial"
                value={state.inicial}
                onChange={handleChange}
              />
            </div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Gradiente
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              name="gradiente"
              value={state.gradiente}
              onChange={handleChange}
            />
            <div className="my-2 ">
              <input
                type="radio"
                id="creciente"
                name="tipoGradiente"
                value="creciente"
                checked={state.tipoGradiente === "creciente"}
                onChange={() =>
                  setState((prevState) => ({
                    ...prevState,
                    tipoGradiente: "creciente",
                  }))
                }
              />
              <label htmlFor="creciente">Creciente</label>
              <input
                type="radio"
                id="decreciente"
                name="tipoGradiente"
                value="decreciente"
                checked={state.tipoGradiente === "decreciente"}
                onChange={() =>
                  setState((prevState) => ({
                    ...prevState,
                    tipoGradiente: "decreciente",
                  }))
                }
              />
              <label htmlFor="decreciente">Decreciente</label>
            </div>
            <button
              className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
              onClick={validar}
            >
              Calcular
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
        {state.resultado && (
          <div>El Valor Presente de este problema es: ${state.resultado}</div>
        )}
      </div>
    </>
  );
};

export default ValorPresenteGeometrico;
