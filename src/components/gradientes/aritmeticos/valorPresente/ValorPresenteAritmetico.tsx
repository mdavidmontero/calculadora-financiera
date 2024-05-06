import React, { useState } from "react";

const ValorPresenteAritmetico: React.FC = () => {
  const [tiempo, setTiempo] = useState<string>("");
  const [interes, setInteres] = useState<string>("");
  const [inicial, setInicial] = useState<string>("");
  const [gradiente, setGradiente] = useState<string>("");
  const [tipo, setTipo] = useState<"creciente" | "decreciente">("creciente");
  const [resultadoHTML, setResultadoHTML] = useState<string>("");

  const validar = () => {
    if (!tiempo) {
      window.alert("Por favor, digite el tiempo...");
    } else if (!interes) {
      window.alert("Por favor, digite la tasa de interés...");
    } else if (!inicial) {
      window.alert("Por favor, digite el valor inicial...");
    } else if (!gradiente) {
      window.alert("Por favor, digite la gradiente...");
    } else {
      realizarCalculo();
    }
  };

  const realizarCalculo = () => {
    const opcion = tipo;
    const interesDecimal = parseFloat(interes) / 100;

    let resultado: number;

    if (opcion === "creciente") {
      resultado = calcularValorPresenteCreciente(
        parseFloat(inicial),
        interesDecimal,
        parseFloat(tiempo),
        parseFloat(gradiente)
      );
    } else {
      resultado = calcularValorPresenteDecreciente(
        parseFloat(inicial),
        interesDecimal,
        parseFloat(tiempo),
        parseFloat(gradiente)
      );
    }

    const resultadoFormateado = resultado.toFixed(2);

    const mensaje =
      `Tiempo(n): ${tiempo} cuotas | Intereses(i): ${interes}% | ` +
      `Monto inicial(P): $${inicial} | Gradiente(g): $${gradiente} | ` +
      `${opcion === "creciente" ? "Creciente" : "Decreciente"}<br><br>` +
      `El Valor Presente de este problema es: $${resultadoFormateado}`;

    setResultadoHTML(mensaje);

    // Limpiar los campos de entrada después de realizar el cálculo
    setTiempo("");
    setInteres("");
    setInicial("");
    setGradiente("");
  };

  const calcularValorPresenteCreciente = (
    inicial: number,
    interes: number,
    tiempo: number,
    gradiente: number
  ): number => {
    const primeraParte = tiempo / Math.pow(1 + interes, tiempo);
    const segundaParte = (1 - Math.pow(1 + interes, -tiempo)) / interes;
    const terceraParte = gradiente / interes;
    const cuartaParte = (1 - Math.pow(1 + interes, -tiempo)) / interes - tiempo;
    const quintaParte = segundaParte - primeraParte;
    const sestaParte = terceraParte * quintaParte;
    const septimaParte = inicial * cuartaParte;

    return septimaParte + sestaParte;
  };

  const calcularValorPresenteDecreciente = (
    inicial: number,
    interes: number,
    tiempo: number,
    gradiente: number
  ): number => {
    const primeraParte = tiempo / Math.pow(1 + interes, tiempo);
    const segundaParte = (1 - Math.pow(1 + interes, -tiempo)) / interes;
    const terceraParte = gradiente / interes;
    const cuartaParte = (1 - Math.pow(1 + interes, -tiempo)) / interes - tiempo;
    const quintaParte = segundaParte - primeraParte;
    const sestaParte = terceraParte * quintaParte;
    const septimaParte = inicial * cuartaParte;

    return septimaParte - sestaParte;
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h1>Valor Presente Aritmético</h1>
          <p>Digita los datos que tengas</p>
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
              Tasa de interés
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
              value={gradiente}
              onChange={(e) => setGradiente(e.target.value)}
              placeholder="Gradiente"
              required
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tipo de gradiente
            </label>
            <div className="my-2">
              <input
                type="radio"
                name="tipoGradiente"
                id="tipoGradiente1"
                checked={tipo === "creciente"}
                onChange={() => setTipo("creciente")}
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
                checked={tipo === "decreciente"}
                onChange={() => setTipo("decreciente")}
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
      <div
        className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center"
        dangerouslySetInnerHTML={{ __html: resultadoHTML }}
      ></div>
    </>
  );
};

export default ValorPresenteAritmetico;
