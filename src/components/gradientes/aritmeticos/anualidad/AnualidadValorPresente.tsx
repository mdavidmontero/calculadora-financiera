import React, { useState } from "react";
import ExplicacionFormula from "../../../../shared/ExplicacionFormula";

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
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            El valor presente de una anualidad con gradiente aritmético es la
            suma de todos los pagos presentes más el valor presente del
            gradiente aritmético. La fórmula para calcularlo es:
          </p>
          <p className="text-lg text-gray-800">
            <span className="font-bold">
              PV = P × [(1 - (1 + g)^-n) / i] + P × (1 + g) × [(1 - (1 + g)^-n)
              / i] × (1 + i)
            </span>
          </p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc ml-8 text-lg text-gray-800">
            <li>
              <span className="font-bold">PV</span>: Representa el valor
              presente de la anualidad.
            </li>
            <li>
              <span className="font-bold">P</span>: Es el valor del primer pago.
            </li>
            <li>
              <span className="font-bold">g</span>: Es la tasa de crecimiento o
              decrecimiento de los pagos.
            </li>
            <li>
              <span className="font-bold">n</span>: Es el número total de pagos.
            </li>
            <li>
              <span className="font-bold">i</span>: Es la tasa de interés por
              período.
            </li>
          </ul>
        </ExplicacionFormula>
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h2 className="h2"></h2>
          <div className="my-2">
            <label
              htmlFor="tiempo"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Tiempo
            </label>
            <input
              id="tiempo"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="En meses"
              value={tiempo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="interes"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Tasa de interés
            </label>
            <input
              id="interes"
              type="number"
              min="0"
              max="100"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="0..100"
              value={interes}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="valor"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Valor Presente
            </label>
            <input
              id="valor"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Valor presente"
              value={valor}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="gradiente"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Gradiente
            </label>
            <input
              id="gradiente"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Gradiente"
              value={gradiente}
              onChange={handleChange}
              required
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tipo de gradiente
            </label>
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
              <label
                htmlFor="tipoGradiente1"
                className="uppercase text-gray-600 block text-xl font-bold"
              >
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
              <label
                htmlFor="tipoGradiente2"
                className="uppercase text-gray-600 block text-xl font-bold"
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
        dangerouslySetInnerHTML={{ __html: resultado }}
      ></div>
    </>
  );
};

export default AnualidadValorPresente;
