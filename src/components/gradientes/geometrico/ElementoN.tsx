import React, { useState } from "react";
import ExplicacionFormula from "../../../shared/ExplicacionFormula";

const ElementoNGeometrica: React.FC = () => {
  const [tiempo, setTiempo] = useState<string>("");
  const [inicial, setInicial] = useState<string>("");
  const [gradiente, setGradiente] = useState<string>("");
  const [resultadoHTML, setResultadoHTML] = useState<string>("");

  const validar = () => {
    if (!tiempo) {
      window.alert("Por favor, digite el número de cuotas...");
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

    let resultado;

    if (opcion === "creciente") {
      resultado = calcularElementoNCreciente(
        parseFloat(inicial),
        parseFloat(tiempo),
        parseFloat(gradiente)
      );
    } else {
      resultado = calcularElementoNDecreciente(
        parseFloat(inicial),
        parseFloat(tiempo),
        parseFloat(gradiente)
      );
    }

    const mensaje =
      `Cuota(n): ${tiempo} | Monto inicial(P): $${inicial} | Gradiente(g): ${gradiente}% | ${opcion.charAt(0).toUpperCase() + opcion.slice(1)
      }<br><br>` + `El Valor a pagar en la Cuota ${tiempo} es: $${resultado}`;

    setResultadoHTML(mensaje);

    // Limpiar los campos de entrada después de realizar el cálculo
    setTiempo("");
    setInicial("");
    setGradiente("");
  };

  const calcularElementoNCreciente = (
    inicial: number,
    tiempo: number,
    gradiente: number
  ): number => {
    gradiente = gradiente / 100;
    const valorElementoN = inicial * Math.pow(1 + gradiente, tiempo - 1);
    return valorElementoN;
  };

  const calcularElementoNDecreciente = (
    inicial: number,
    tiempo: number,
    gradiente: number
  ): number => {
    gradiente = gradiente / 100;
    const valorElementoN = inicial * Math.pow(1 - gradiente, tiempo - 1);
    return valorElementoN;
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <div className="p-4 bg-gray-100">
            <p className="text-lg text-gray-800">El ejercicio de Elemento N Geométrico en React permite calcular el valor de un elemento específico en una serie de pagos que siguen un crecimiento geométrico, considerando un monto inicial, el número de cuotas y el porcentaje de crecimiento. El usuario debe ingresar el número de la cuota, el monto inicial y el porcentaje de crecimiento. Luego de ingresar estos datos, al hacer clic en el botón "Resultado", se calcula el valor del elemento específico en la cuota indicada y se muestra el resultado. Este cálculo se realiza utilizando la fórmula adecuada para un crecimiento geométrico, teniendo en cuenta el porcentaje de crecimiento y el número de cuotas.</p>
          </div>

        </ExplicacionFormula>
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h1>Elemento N Geométrico</h1>
          <p>Digita los datos que tengas</p>
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Cuota
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              min="0"
              value={tiempo}
              onChange={(e) => setTiempo(e.target.value)}
              placeholder="Número de la cuota"
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
      <div
        className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center"
        dangerouslySetInnerHTML={{ __html: resultadoHTML }}
      ></div>
    </>
  );
};

export default ElementoNGeometrica;
