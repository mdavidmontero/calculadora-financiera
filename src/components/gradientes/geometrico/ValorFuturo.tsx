import React, { useState } from "react";
import ExplicacionFormula from "../../../shared/ExplicacionFormula";

const ValorFuturoGeometrico: React.FC = () => {
  const [tiempo, setTiempo] = useState<string>("");
  const [interes, setInteres] = useState<string>("");
  const [inicial, setInicial] = useState<string>("");
  const [gradiente, setGradiente] = useState<string>("");
  const [resultado, setResultado] = useState<string>("");

  const validar = () => {
    if (!tiempo) {
      window.alert("Por favor, digite el tiempo...");
    } else if (!interes) {
      window.alert("Por favor, digite la tasa de interes...");
    } else if (!inicial) {
      window.alert("Por favor, digite el valor inicial...");
    } else if (!gradiente) {
      window.alert("Por favor, digite la gradiente...");
    } else {
      realizarCalculo();
    }
  };

  const realizarCalculo = () => {
    const opcion = (
      document.querySelector(
        'input[name="tipoGradiente"]:checked'
      ) as HTMLInputElement
    )?.value;

    let resultadoCalculado;
    if (opcion === "creciente") {
      resultadoCalculado = calcularValorFuturoCreciente(
        parseFloat(inicial),
        parseFloat(interes),
        parseFloat(tiempo),
        parseFloat(gradiente)
      );
    } else {
      resultadoCalculado = calcularValorFuturoDecreciente(
        parseFloat(inicial),
        parseFloat(interes),
        parseFloat(tiempo),
        parseFloat(gradiente)
      );
    }

    setResultado(resultadoCalculado.toFixed(2));

    // Limpiar los campos de entrada después de realizar el cálculo
    setTiempo("");
    setInteres("");
    setInicial("");
    setGradiente("");
  };

  const calcularValorFuturoCreciente = (
    inicial: number,
    interes: number,
    tiempo: number,
    gradiente: number
  ): number => {
    interes /= 100;
    gradiente /= 100;

    let valorFuturo;

    if (interes !== gradiente) {
      const parteIzquierda = inicial / (interes - gradiente);
      const primeraParte = Math.pow(1 + interes, tiempo);
      const segundaParte = Math.pow(1 + gradiente, tiempo);
      const parteDerecha = primeraParte - segundaParte;
      valorFuturo = parteIzquierda * parteDerecha;
    } else {
      const parteIzquierda = tiempo * inicial;
      const parteDerecha = Math.pow(1 + interes, tiempo - 1);
      valorFuturo = parteIzquierda * parteDerecha;
    }

    return valorFuturo;
  };

  const calcularValorFuturoDecreciente = (
    inicial: number,
    interes: number,
    tiempo: number,
    gradiente: number
  ): number => {
    interes /= 100;
    gradiente /= 100;

    let valorFuturo;

    if (interes !== gradiente) {
      const parteIzquierda = inicial / (interes + gradiente);
      const primeraParte = Math.pow(1 + interes, tiempo);
      const segundaParte = Math.pow(1 - gradiente, tiempo);
      const parteDerecha = primeraParte - segundaParte;
      valorFuturo = parteIzquierda * parteDerecha;
    } else {
      const parteIzquierda = inicial / (interes + interes);
      const primeraParte = Math.pow(1 + interes, tiempo);
      const segundaParte = Math.pow(1 - interes, tiempo);
      const parteDerecha = primeraParte - segundaParte;
      valorFuturo = parteIzquierda * parteDerecha;
    }

    return valorFuturo;
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            El valor futuro en un gradiente geométrico se calcula utilizando la
            siguiente fórmula:
          </p>
          <p className="text-lg text-gray-800 font-bold">
            VF = P / (i - g) * ((1 + i)<sup>n</sup> - (1 + g)<sup>n</sup>)
          </p>
        </ExplicacionFormula>
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              min="0"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              placeholder="En meses"
              required
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interes
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              min="0"
              max="100"
              value={interes}
              onChange={(e) => setInteres(e.target.value)}
              placeholder="0..100"
              required
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Monto inicial
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              min="0"
              value={inicial}
              onChange={(e) => setInicial(e.target.value)}
              placeholder="Monto inicial"
              required
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Gradiente
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              min="0"
              max="100"
              value={gradiente}
              onChange={(e) => setGradiente(e.target.value)}
              placeholder="0..100"
              required
            />
          </div>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tipo de gradiente
            </label>
            <div>
              <input
                type="radio"
                name="tipoGradiente"
                id="tipoGradiente1"
                value="creciente"
                checked
                required
              />
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="tipoGradiente1"
              >
                Creciente
              </label>
              <input
                type="radio"
                name="tipoGradiente"
                id="tipoGradiente2"
                value="decreciente"
                required
              />
              <label
                className="uppercase text-gray-600 block text-xl font-bold"
                htmlFor="tipoGradiente2"
              >
                Decreciente
              </label>
            </div>
          </div>
          <button
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            onClick={validar}
          >
            Resultado
          </button>
        </form>
      </div>
      <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
        <p id="p" dangerouslySetInnerHTML={{ __html: resultado }}></p>
      </div>
    </>
  );
};

export default ValorFuturoGeometrico;
