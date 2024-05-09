import React, { useState } from "react";
import ExplicacionFormula from "../../../../shared/ExplicacionFormula";

const ValorPresentePerpetuoAritmetico: React.FC = () => {
  const [interes, setInteres] = useState<string>("");
  const [inicial, setInicial] = useState<string>("");
  const [gradiente, setGradiente] = useState<string>("");
  const [resultadoHTML, setResultadoHTML] = useState<string>("");

  const validar = () => {
    if (!interes) {
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
    const resultado = calcularValorPresetePerpetuoAritmetico(
      parseFloat(inicial),
      parseFloat(interes),
      parseFloat(gradiente)
    );

    const mensaje =
      `Intereses(i): ${interes}% | Monto inicial(P): $${inicial} | Gradiente(g): $${gradiente}<br><br>` +
      `El Valor Presente perpetuo de este problema es: $${resultado.toFixed(
        2
      )}`;

    setResultadoHTML(mensaje);

    // Limpiar los campos de entrada después de realizar el cálculo
    setInteres("");
    setInicial("");
    setGradiente("");
  };

  const calcularValorPresetePerpetuoAritmetico = (
    valor: number,
    interes: number,
    gradiente: number
  ): number => {
    interes = interes / 100;
    const vpp = valor / interes + gradiente / Math.pow(interes, 2);
    return vpp;
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-gray-800">
            El Valor Presente Perpetuo Aritmético se utiliza para calcular el
            valor presente de una serie infinita de pagos que crecen o
            disminuyen aritméticamente en el tiempo. Este concepto es útil en
            situaciones en las que se espera que los pagos sigan un patrón de
            crecimiento o decrecimiento constante en el tiempo, como por
            ejemplo, en algunos tipos de pensiones o rentas vitalicias.
          </p>
          <p className="text-gray-800">
            La fórmula para calcular el Valor Presente Perpetuo Aritmético es la
            siguiente:
          </p>
          <p className="text-gray-800 font-bold">
            Valor Presente = P / i + g / i^2
          </p>
          <p className="text-gray-800">
            Donde:
            <br />
            P = Monto inicial o primer pago
            <br />
            i = Tasa de interés por período, expresada en decimales
            <br />g = Gradiente o cambio en los pagos por período
          </p>
        </ExplicacionFormula>
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h1>Valor Presente Aritmético Perpetuo</h1>
          <p>Digita los datos que tengas</p>
          <div className="my-2">
            <label>Tasa de interes</label>
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
          <div className="my-2">
            <label>Monto inicial</label>
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
          <div className="my-2">
            <label>Gradiente</label>
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

export default ValorPresentePerpetuoAritmetico;
