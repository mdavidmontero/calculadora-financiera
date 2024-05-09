import React, { useState } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import { Resultado } from "../../shared/Resultado";
import { Spinner } from "../../layouts/Spinner";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

const AnualidadVencida = () => {
  const [datos, setDatos] = useState({
    tasaInteres: "",
    numPeriodos: "",
    valorPresente: "",
  });
  const [resultado, setResultado] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tasaInteresDecimal = parseFloat(datos.tasaInteres) / 100; // Convertir la tasa de interés a decimal
    const numPeriodos = parseInt(datos.numPeriodos) / 12;
    const valorPresente = parseFloat(datos.valorPresente);

    // Calcular el monto de la anualidad vencida
    const montoAnualidad =
      valorPresente *
      ((Math.pow(1 + tasaInteresDecimal, numPeriodos) - 1) /
        tasaInteresDecimal);

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setResultado(montoAnualidad.toFixed(2));
    }, 2000);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            La anualidad vencida es un concepto financiero que se refiere a una
            serie de pagos iguales realizados al final de cada período.
            Matemáticamente, se calcula utilizando la fórmula del valor presente
            de una anualidad.
          </p>
          <p className="text-lg text-gray-800">
            La fórmula utilizada para calcular el monto de la anualidad vencida
            es:
          </p>
          <p className="text-lg text-gray-800 font-bold">
            M = VP * ((1 + i)^n - 1) / i
          </p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc pl-8">
            <li>M = Monto de la anualidad vencida</li>
            <li>VP = Valor presente</li>
            <li>i = Tasa de interés por período (en decimal)</li>
            <li>n = Número de períodos</li>
          </ul>
        </ExplicacionFormula>
        <form
          onSubmit={handleSubmit}
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (% mensual):
            </label>
            <input
              type="number"
              name="tasaInteres"
              value={datos.tasaInteres}
              placeholder="Ingrese Tasa de Interes"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Número de períodos:
            </label>
            <input
              type="number"
              name="numPeriodos"
              value={datos.numPeriodos}
              placeholder="Ingrese Numero de Periodos en Meses Años -> Meses"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Valor Presente ($):
            </label>
            <input
              type="number"
              name="valorPresente"
              value={datos.valorPresente}
              placeholder="Ingrese Valor Presente"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {cargando && (
        <div className="md:w-2/6 md:h-1/2 my-10  mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <Spinner />
        </div>
      )}
      {resultado && (
        <Resultado>
          <p>El monto de la anualidad es: ${resultado}</p>
        </Resultado>
      )}
    </>
  );
};

export default AnualidadVencida;
