import React, { useState } from "react";

const ElementoN = () => {
  const [tiempo, setTiempo] = useState<string>("");
  const [inicial, setInicial] = useState<string>("");
  const [gradiente, setGradiente] = useState<string>("");
  const [tipoGradiente, setTipoGradiente] = useState<string>("creciente");
  const [resultado, setResultado] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    switch (id) {
      case "tiempo":
        setTiempo(value);
        break;
      case "inicial":
        setInicial(value);
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
      window.alert("Por favor digite el número de cuotas...");
    } else if (inicial === "") {
      window.alert("Por favor digite el valor inicial...");
    } else if (gradiente === "") {
      window.alert("Por favor digite la gradiente...");
    } else {
      validacion();
    }
  };

  const validacion = () => {
    if (tipoGradiente === "creciente") {
      setResultado(
        `Cuota(n): ${tiempo} | Monto inicial(P): $${inicial} | Gradiente(g): $${gradiente} | Creciente<br><br>El valor a pagar en la cuota ${tiempo} es: $${calcularElementoNCreciente(
          inicial,
          tiempo,
          gradiente
        )}`
      );
    } else {
      setResultado(
        `Cuota(n): ${tiempo} | Monto inicial(P): $${inicial} | Gradiente(g): $${gradiente} | Decreciente<br><br>El valor a pagar en la cuota ${tiempo} es: $${calcularElementoNDecreciente(
          inicial,
          tiempo,
          gradiente
        )}`
      );
    }
    // Limpiar los campos
    setTiempo("");
    setInicial("");
    setGradiente("");
  };

  const calcularElementoNCreciente = (
    inicial: string,
    tiempo: string,
    gradiente: string
  ): number => {
    const valorInicial = parseInt(inicial);
    const numCuota = parseInt(tiempo);
    const valorGradiente = parseInt(gradiente);

    const valorElementoN = valorInicial + (numCuota - 1) * valorGradiente;

    return valorElementoN;
  };

  const calcularElementoNDecreciente = (
    inicial: string,
    tiempo: string,
    gradiente: string
  ): number => {
    const valorInicial = parseInt(inicial);
    const numCuota = parseInt(tiempo);
    const valorGradiente = parseInt(gradiente);

    const valorElementoN = valorInicial + (numCuota - 1) * -valorGradiente;

    return valorElementoN;
  };

  return (
    <div className="App">
      <h1 className="h1">Elemento N Aritmético</h1>
      <div>
        <p className="h3">Digite los datos que tenga</p>
      </div>
      <form className="container">
        <div>
          <label htmlFor="tiempo" className="label">
            Cuota
          </label>
          <input
            id="tiempo"
            type="number"
            min="0"
            className="texto"
            placeholder="Número de la cuota"
            value={tiempo}
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

export default ElementoN;
