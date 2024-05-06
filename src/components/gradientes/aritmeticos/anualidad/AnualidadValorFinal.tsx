import React, { useState } from "react";

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

  const calcularAnualidad = () => {
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
    <div className="App">
      <h1 className="h1">Anualidad Aritmética</h1>
      <h2 className="h2">En base al valor futuro</h2>
      <div>
        <p className="h3">Digite los datos que tenga</p>
      </div>
      <form className="container">
        <div>
          <label htmlFor="tiempo" className="label">
            Tiempo
          </label>
          <input
            id="tiempo"
            type="number"
            min="0"
            className="texto"
            placeholder="En meses"
            value={tiempo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="interes" className="label">
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
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="valor" className="label">
            Valor Final
          </label>
          <input
            id="valor"
            type="number"
            min="0"
            className="texto"
            placeholder="Valor final"
            value={valor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gradiente" className="label">
            Gradiente
          </label>
          <input
            id="gradiente"
            type="number"
            min="0"
            className="texto"
            placeholder="Gradiente"
            value={gradiente}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Tipo de gradiente</label>
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
            <label htmlFor="tipoGradiente1" className="label">
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
            <label htmlFor="tipoGradiente2" className="label">
              Decreciente
            </label>
          </div>
        </div>
      </form>
      <div style={{ padding: "5px" }}></div>
      <div className="botonResultado">
        <button className="botonResultado" onClick={calcularAnualidad}>
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
          {resultado &&
            `La anualidad en base al valor final de este problema es: $${resultado}`}
        </p>
      </div>
    </div>
  );
};

export default App;
