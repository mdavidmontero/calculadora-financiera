import React, { useState } from "react";

const AnualidadValorPresente = () => {
  const [tiempo, setTiempo] = useState("");
  const [interes, setInteres] = useState("");
  const [valor, setValor] = useState("");
  const [gradiente, setGradiente] = useState("");
  const [tipoGradiente, setTipoGradiente] = useState("creciente");
  const [resultado, setResultado] = useState("");

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
      case "tipoGradiente1":
      case "tipoGradiente2":
        setTipoGradiente(value);
        break;
      default:
        break;
    }
  };

  const validar = () => {
    if (tiempo === "") {
      window.alert("Por favor digite el tiempo...");
    } else if (interes === "") {
      window.alert("Por favor digite la tasa de interés...");
    } else if (valor === "") {
      window.alert("Por favor digite el valor presente...");
    } else if (gradiente === "") {
      window.alert("Por favor digite la gradiente...");
    } else {
      validacion();
    }
  };

  const validacion = () => {
    if (tipoGradiente === "creciente") {
      setResultado(
        `Tiempo(n): ${tiempo} cuotas | Intereses(i): ${interes}% | Valor presente(P): $${valor} | Gradiente(g): $${gradiente} | Creciente<br><br>La anualidad en base al valor presente de este problema es: $${calcularAnualidadCreciente(
          valor,
          interes,
          tiempo,
          gradiente
        )}`
      );
    } else {
      setResultado(
        `Tiempo(n): ${tiempo} cuotas | Intereses(i): ${interes}% | Valor presente(P): $${valor} | Gradiente(g): $${gradiente} | Decreciente<br><br>La anualidad en base al valor presente de este problema es: $${calcularAnualidadDecreciente(
          valor,
          interes,
          tiempo,
          gradiente
        )}`
      );
    }
    // Limpiar los campos
    setTiempo("");
    setInteres("");
    setValor("");
    setGradiente("");
  };

  const calcularAnualidadCreciente = (
    valor: string,
    interes: string,
    tiempo: string,
    gradiente: string
  ) => {
    const interesDecimal = parseFloat(interes) / 100;
    const valorInt = parseInt(valor);
    const potencia = Math.pow(1 + interesDecimal, -parseInt(tiempo));
    const potencia2 = Math.pow(1 + interesDecimal, parseInt(tiempo));
    const primeraParte = (1 - potencia) / interesDecimal;
    const segundaParte = primeraParte - parseInt(tiempo) / potencia2;
    const terceraParte = primeraParte;
    const cuartaParte = (parseInt(gradiente) / interesDecimal) * segundaParte;
    const quintaParte = valorInt - cuartaParte;
    const sestaParte = quintaParte / terceraParte;
    return sestaParte.toFixed(2);
  };

  const calcularAnualidadDecreciente = (
    valor: string,
    interes: string,
    tiempo: string,
    gradiente: string
  ) => {
    const interesDecimal = parseFloat(interes) / 100;
    const valorInt = parseInt(valor);
    const potencia = Math.pow(1 + interesDecimal, -parseInt(tiempo));
    const potencia2 = Math.pow(1 + interesDecimal, parseInt(tiempo));
    const primeraParte = (1 - potencia) / interesDecimal;
    const segundaParte = primeraParte - parseInt(tiempo) / potencia2;
    const terceraParte = primeraParte;
    const cuartaParte = (parseInt(gradiente) / interesDecimal) * segundaParte;
    const quintaParte = valorInt + cuartaParte;
    const sestaParte = quintaParte / terceraParte;
    return sestaParte.toFixed(2);
  };

  return (
    <div className="App">
      <h1 className="h1">Anualidad Aritmética</h1>
      <h2 className="h2">En base al valor presente</h2>
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
            Valor Presente
          </label>
          <input
            id="valor"
            type="number"
            min="0"
            className="texto"
            placeholder="Valor presente"
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
              onChange={handleChange}
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
              onChange={handleChange}
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
        <button className="botonResultado" onClick={validar}>
          Resultado
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

export default AnualidadValorPresente;
