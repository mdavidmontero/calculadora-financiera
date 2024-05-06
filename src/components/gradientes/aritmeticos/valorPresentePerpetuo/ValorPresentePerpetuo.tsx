import React, { useState } from "react";

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
    <div>
      <h1>Valor Presente Aritmético Perpetuo</h1>
      <div>
        <p>Digita los datos que tengas</p>
      </div>
      <form className="container">
        <div>
          <label>Tasa de interes</label>
          <input
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
          <label>Monto inicial</label>
          <input
            type="number"
            min="0"
            value={inicial}
            onChange={(e) => setInicial(e.target.value)}
            placeholder="Monto inicial"
            required
          />
        </div>
        <div>
          <label>Gradiente</label>
          <input
            type="number"
            min="0"
            value={gradiente}
            onChange={(e) => setGradiente(e.target.value)}
            placeholder="Gradiente"
            required
          />
        </div>
      </form>
      <div style={{ padding: "5px" }}></div>
      <div className="botonResultado">
        <button className="botonResultado" onClick={validar}>
          Resultado
        </button>
      </div>
      <div style={{ padding: "5px" }}></div>
      <div
        className="resultado"
        dangerouslySetInnerHTML={{ __html: resultadoHTML }}
        style={{
          color: "white",
          textShadow: "2px 1px 4px rgba(0, 0, 0, 0.5)",
          fontSize: "larger",
        }}
      ></div>
    </div>
  );
};

export default ValorPresentePerpetuoAritmetico;
