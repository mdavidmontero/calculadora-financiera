import { useState } from "react";

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
    <div className="body">
      <h1 className="h1">Valor Presente Geométrico Perpetuo</h1>
      <div>
        <p className="h3"> Digita los datos que tengas</p>
      </div>
      <form className="container">
        <div>
          <label htmlFor="" className="label">
            Tasa de interés
          </label>
          <input
            id="interes"
            type="number"
            min="0"
            max="100"
            className="texto"
            placeholder="0..100"
            value={interes}
            onChange={(e) => setInteres(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Monto inicial
          </label>
          <input
            id="inicial"
            type="number"
            min="0"
            className="texto"
            placeholder="Monto inicial"
            value={inicial}
            onChange={(e) => setInicial(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="" className="label">
            Gradiente
          </label>
          <input
            id="gradiente"
            type="number"
            min="0"
            max="100"
            className="texto"
            placeholder="0..100"
            value={gradiente}
            onChange={(e) => setGradiente(e.target.value)}
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
      <div className="resultado">
        <p
          id="p"
          style={{
            color: "white",
            textShadow: "2px 1px 4px rgba(0, 0, 0, 0.5)",
            fontSize: "larger",
          }}
        >
          El Valor Presente perpetuo de este problema es: ${resultado}
        </p>
      </div>
    </div>
  );
}

export default ValorPresentePerpetuo;
