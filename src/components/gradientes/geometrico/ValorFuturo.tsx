import React, { useState } from "react";

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
    <div>
      <h1>Valor Futuro Geométrico</h1>
      <div>
        <p>Digita los datos que tengas</p>
      </div>
      <form className="container">
        <div>
          <label>Tiempo</label>
          <input
            type="number"
            min="0"
            value={tiempo}
            onChange={(e) => setTiempo(e.target.value)}
            placeholder="En meses"
            required
          />
        </div>
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
        style={{
          color: "white",
          textShadow: "2px 1px 4px rgba(0, 0, 0, 0.5)",
          fontSize: "larger",
        }}
      >
        <p id="p" dangerouslySetInnerHTML={{ __html: resultado }}></p>
      </div>
    </div>
  );
};

export default ValorFuturoGeometrico;
