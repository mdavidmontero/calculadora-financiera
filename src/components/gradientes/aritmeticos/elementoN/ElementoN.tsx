import React, { useState } from "react";
import ExplicacionFormula from "../../../../shared/ExplicacionFormula";

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
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <div className="p-4 bg-gray-100">
            <p className="text-lg text-gray-800">El ejercicio del Elemento N Aritmético permite calcular el valor de una cuota en una serie de pagos que siguen un gradiente aritmético. En este ejercicio, se solicita al usuario ingresar el número de la cuota, el monto inicial y la cantidad del gradiente, además de seleccionar si el gradiente es creciente o decreciente. Luego de ingresar estos datos, al hacer clic en el botón "Resultado", se calcula el valor de la cuota correspondiente y se muestra el resultado. Este cálculo se realiza utilizando las fórmulas adecuadas para cada tipo de gradiente, ya sea creciente o decreciente.</p>
          </div>


        </ExplicacionFormula>
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h1 className="h1">Elemento N Aritmético</h1>
          <div>
            <p className="h3">Digite los datos que tenga</p>
          </div>
          <div className="my-2">
            <label
              htmlFor="tiempo"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Cuota
            </label>
            <input
              id="tiempo"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Número de la cuota"
              value={tiempo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="my-2">
            <label
              htmlFor="inicial"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Monto inicial
            </label>
            <input
              id="inicial"
              type="number"
              min="0"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              placeholder="Monto inicial"
              value={inicial}
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

export default ElementoN;
