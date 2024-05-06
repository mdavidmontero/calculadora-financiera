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
    <>
      <div className="md:w-1/2 md:h-auto">
        <form className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start">
          <h1 className="h1">Valor Futuro Aritmético</h1>
          <div>
            <p className="h3">Digita los datos que tengas</p>
          </div>
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
              <select
                className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                id="tipoGradiente"
                value={tipoGradiente}
                onChange={handleChange}
              >
                <option value="creciente">Creciente</option>
                <option value="decreciente">Decreciente</option>
              </select>
            </div>
          </div>
          <button
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            onClick={validar}
          >
            Resultado Final
          </button>
        </form>
      </div>
      <div dangerouslySetInnerHTML={{ __html: resultado }}></div>
    </>
  );
};

export default ValorFuturoAritmetico;
