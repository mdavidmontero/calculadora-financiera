import { useState } from "react";
import ExplicacionFormula from "../../../shared/ExplicacionFormula";

function ValorPresentePerpetuo() {
  const [interes, setInteres] = useState("");
  const [inicial, setInicial] = useState("");
  const [gradiente, setGradiente] = useState("");
  const [resultado, setResultado] = useState("");

  const validar = () => {
    if (interes === "") {
      window.alert("Por favor, digite la tasa de interés...");
    } else if (inicial === "") {
      window.alert("Por favor, digite el valor inicial...");
    } else if (gradiente === "") {
      window.alert("Por favor, digite la gradiente...");
    } else {
      calcularValorPresente();
    }
  };

  const calcularValorPresente = () => {
    let vpp = 0;
    const interesNum = parseFloat(interes) / 100;
    const gradienteNum = parseFloat(gradiente) / 100;

    if (gradienteNum < interesNum) {
      vpp = parseFloat(inicial) / (interesNum - gradienteNum);
    }

    setResultado(vpp.toFixed(2));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            El Valor Presente Geométrico Perpetuo se utiliza para calcular el
            valor presente de una serie de flujos de efectivo que siguen un
            gradiente geométrico de forma perpetua.
          </p>
          <p className="text-lg text-gray-800">
            La fórmula utilizada para calcular el Valor Presente Geométrico
            Perpetuo es:
          </p>
          <p className="text-lg text-gray-800 font-bold">VP = P / (i - g)</p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc pl-8">
            <li className="text-lg text-gray-800">VP es el Valor Presente.</li>
            <li className="text-lg text-gray-800">P es el monto inicial.</li>
            <li className="text-lg text-gray-800">i es la tasa de interés.</li>
            <li className="text-lg text-gray-800">g es el gradiente.</li>
          </ul>
        </ExplicacionFormula>
        <div className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
     
          <form className="container">
            <div>
              <label
                htmlFor=""
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Tasa de interés
              </label>
              <input
                id="interes"
                type="number"
                min="0"
                max="100"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                placeholder="0..100"
                value={interes}
                onChange={(e) => setInteres(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Monto inicial
              </label>
              <input
                id="inicial"
                type="number"
                min="0"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                placeholder="Monto inicial"
                value={inicial}
                onChange={(e) => setInicial(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Gradiente
              </label>
              <input
                id="gradiente"
                type="number"
                min="0"
                max="100"
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                placeholder="0..100"
                value={gradiente}
                onChange={(e) => setGradiente(e.target.value)}
                required
              />
            </div>
          </form>
          <div>
            <button
              className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
              onClick={validar}
            >
              Resultado
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
        <p id="p">
          El Valor Presente perpetuo de este problema es: ${resultado}
        </p>
      </div>
    </>
  );
}

export default ValorPresentePerpetuo;
