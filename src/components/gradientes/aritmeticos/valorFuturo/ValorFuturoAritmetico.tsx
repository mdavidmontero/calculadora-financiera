import React, { useState } from "react";

const ValorFuturoAritmetico: React.FC = () => {
  const [tiempo, setTiempo] = useState<number>(0);
  const [interes, setInteres] = useState<number>(0);
  const [inicial, setInicial] = useState<number>(0);
  const [gradiente, setGradiente] = useState<number>(0);
  const [tipoGradiente, setTipoGradiente] = useState<string>("creciente");
  const [resultado, setResultado] = useState<string>("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    switch (id) {
      case "tiempo":
        setTiempo(parseFloat(value));
        break;
      case "interes":
        setInteres(parseFloat(value));
        break;
      case "inicial":
        setInicial(parseFloat(value));
        break;
      case "gradiente":
        setGradiente(parseFloat(value));
        break;
      case "tipoGradiente":
        setTipoGradiente(value);
        break;
      default:
        break;
    }
  };

  const validar = () => {
    if (!tiempo || !interes || !inicial || !gradiente) {
      window.alert("Por favor complete todos los campos.");
    } else {
      calcularValorFuturo();
    }
  };

  const calcularValorFuturo = () => {
    const primeraParte =
      (Math.pow(1 + interes / 100, tiempo) - 1) / (interes / 100);
    const segundaParte = gradiente / (interes / 100);
    const terceraParte =
      (Math.pow(1 + interes / 100, tiempo) - 1) / (interes / 100) - tiempo;

    let valorFuturo = 0;
    if (tipoGradiente === "creciente") {
      valorFuturo = inicial * primeraParte + segundaParte * terceraParte;
    } else {
      valorFuturo = inicial * primeraParte - segundaParte * terceraParte;
    }
    setResultado(
      `El Valor futuro de este problema es: $${valorFuturo.toFixed(2)}`
    );
    // Limpiar los campos
    setTiempo(0);
    setInteres(0);
    setInicial(0);
    setGradiente(0);
  };

  return (
    <div className="App">
      <h1 className="h1">Valor Futuro Aritmético</h1>
      <div>
        <p className="h3">Digita los datos que tengas</p>
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
          <label htmlFor="inicial" className="label">
            Monto inicial
          </label>
          <input
            id="inicial"
            type="number"
            min="0"
            className="texto"
            placeholder="Monto inicial"
            value={inicial}
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
            <select
              id="tipoGradiente"
              value={tipoGradiente}
              onChange={handleChange}
            >
              <option value="creciente">Creciente</option>
              <option value="decreciente">Decreciente</option>
            </select>
          </div>
        </div>
      </form>
      <div style={{ padding: "5px" }}></div>
      <div className="botonResultado">
        <button className="botonResultado" onClick={validar}>
          Resultado Final
        </button>
      </div>
      <div
        className="resultado"
        style={{
          color: "white",
          textShadow: "2px 1px 4px rgba(0, 0, 0, 0.5)",
          fontSize: "larger",
        }}
        dangerouslySetInnerHTML={{ __html: resultado }}
      ></div>
    </div>
  );
};

export default ValorFuturoAritmetico;
