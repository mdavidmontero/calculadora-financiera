import React, { useState } from "react";

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
      `Cuota(n): ${tiempo} | Monto inicial(P): $${inicial} | Gradiente(g): ${gradiente}% | ${
        opcion.charAt(0).toUpperCase() + opcion.slice(1)
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
    <div>
      <h1>Elemento N Geométrico</h1>
      <div>
        <p>Digita los datos que tengas</p>
      </div>
      <form className="container">
        <div>
          <label>Cuota</label>
          <input
            type="number"
            min="0"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
            placeholder="Número de la cuota"
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
            max="100"
            value={gradiente}
            onChange={(e) => setGradiente(e.target.value)}
            placeholder="0..100"
            required
          />
        </div>
        <div>
          <label>Tipo de gradiente</label>
          <div>
            <input
              type="radio"
              name="tipoGradiente"
              id="tipoGradiente1"
              value="creciente"
              checked
              required
            />
            <label htmlFor="tipoGradiente1">Creciente</label>
            <input
              type="radio"
              name="tipoGradiente"
              id="tipoGradiente2"
              value="decreciente"
              required
            />
            <label htmlFor="tipoGradiente2">Decreciente</label>
          </div>
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

export default ElementoNGeometrica;
