import React, { useState } from "react";
import ExplicacionFormula from "../../../../shared/ExplicacionFormula";

const App: React.FC = () => {
  const [tiempo, setTiempo] = useState<string>("");
  const [interes, setInteres] = useState<string>("");
  const [valor, setValor] = useState<string>("");
  const [gradiente, setGradiente] = useState<string>("");
  const [tipoGradiente, setTipoGradiente] = useState<string>("creciente");
  const [resultado, setResultado] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "tiempo":
        setTiempo(value);
        break;
      case "interes":
        setInteres(value);
        break;
      case "valor":
        setValor(value);
        break;
      case "gradiente":
        setGradiente(value);
        break;
      case "tipoGradiente":
        setTipoGradiente(value);
        break;
      default:
        break;
    }
  };

  const handleTipoGradienteChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTipoGradiente(event.target.value);
  };

  const calcularAnualidad = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const interesDecimal = parseFloat(interes) / 100;
    const valorInt = parseInt(valor);
    const tiempoInt = parseInt(tiempo);
    const gradienteInt = parseInt(gradiente);

    const potencia = Math.pow(1 + interesDecimal, tiempoInt);
    const primeraParte = (potencia - 1) / interesDecimal;
    const segundaParte = primeraParte - tiempoInt;
    const terceraParte = primeraParte;

    let anualidad;
    if (tipoGradiente === "creciente") {
      const cuartaParte = (gradienteInt / interesDecimal) * segundaParte;
      const quintaParte = valorInt - cuartaParte;
      anualidad = quintaParte / terceraParte;
    } else {
      const cuartaParte = (gradienteInt / interesDecimal) * segundaParte;
      const quintaParte = valorInt + cuartaParte;
      anualidad = quintaParte / terceraParte;
    }

    setResultado(anualidad.toFixed(2));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            Una anualidad con gradiente aritmético es una serie de pagos que
            aumentan o disminuyen en una cantidad constante en cada período. La
            fórmula para calcular su valor final es:
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-bold">
              FV = P × ((1 + g)^n - 1) / g + P × (1 + g)^n × ((1 + g)^n - 1) / g
              × i
            </span>
          </p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc ml-8 text-lg text-gray-800">
            <li>
              <span className="font-bold">FV</span>: Representa el valor final
              de la anualidad.
            </li>
            <li>
              <span className="font-bold">P</span>: Es el valor del primer pago.
            </li>
            <li>
              <span className="font-bold">g</span>: Es la tasa de crecimiento o
              decrecimiento de los pagos.
            </li>
            <li>
              <span className="font-bold">n</span>: Es el número total de pagos.
            </li>
            <li>
              <span className="font-bold">i</span>: Es la tasa de interés por
              período.
            </li>
          </ul>
        </ExplicacionFormula>
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h1 className="h1">Anualidad Aritmética, En base al valor futuro</h1>
          <div className="my-2">
            <label
              htmlFor="tiempo"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Tiempo
            </label>
            <input
              id="tiempo"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="En meses"
              value={tiempo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="interes"
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
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="valor"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Valor Final
            </label>
            <input
              id="valor"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Valor final"
              value={valor}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="gradiente"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Gradiente
            </label>
            <input
              id="gradiente"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Gradiente"
              value={gradiente}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tipo de gradiente
            </label>
            <div>
              <input
                value="creciente"
                type="radio"
                name="tipoGradiente"
                id="tipoGradiente1"
                checked={tipoGradiente === "creciente"}
                onChange={handleTipoGradienteChange}
                required
              />
              <label
                htmlFor="tipoGradiente1"
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Creciente
              </label>
              <input
                value="decreciente"
                type="radio"
                name="tipoGradiente"
                id="tipoGradiente2"
                checked={tipoGradiente === "decreciente"}
                onChange={handleTipoGradienteChange}
                required
              />
              <label
                htmlFor="tipoGradiente2"
                className="uppercase text-gray-600 block text-xl font-bold"
              >
                Decreciente
              </label>
            </div>
          </div>
          <div style={{ padding: "5px" }}></div>
          <div className="botonResultado">
            <button
              className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
              onClick={calcularAnualidad}
            >
              Resultado
            </button>
          </div>
        </form>
      </div>
      <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
        <p id="p">
          {resultado &&
            `La anualidad en base al valor final de este problema es: $${resultado}`}
        </p>
      </div>
    </>
  );
};

export default App;
