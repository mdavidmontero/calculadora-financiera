import React, { useState } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import { Resultado } from "../../shared/Resultado";
import { Spinner } from "../../layouts/Spinner";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

const AnualidadVencidaCapitalizacion = () => {
  const [pagoAnual, setPagoAnual] = useState("");
  const [tasaInteresNominal, setTasaInteresNominal] = useState("");
  const [frecuenciaCapitalizacion, setFrecuenciaCapitalizacion] = useState("1");
  const [montoFinal, setMontoFinal] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "pagoAnual") {
      setPagoAnual(value);
    } else if (name === "tasaInteresNominal") {
      setTasaInteresNominal(value);
    } else if (name === "frecuenciaCapitalizacion") {
      setFrecuenciaCapitalizacion(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pagoAnualValue = parseFloat(pagoAnual);
    const tasaInteresNominalValue = parseFloat(tasaInteresNominal) / 100;
    const frecuenciaCapitalizacionValue = parseInt(frecuenciaCapitalizacion);

    // Calcular la tasa de interés efectiva

    const tasaInteresEfectiva =
      Math.pow(
        1 + tasaInteresNominalValue / frecuenciaCapitalizacionValue,
        frecuenciaCapitalizacionValue
      ) - 1;

    // Calcular el monto final en la cuenta después de 20 años
    const montoFinalCalc =
      pagoAnualValue *
      ((Math.pow(1 + tasaInteresEfectiva, 20 * frecuenciaCapitalizacionValue) -
        1) /
        tasaInteresEfectiva);

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setMontoFinal(montoFinalCalc.toFixed(2));
    }, 2000);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            La fórmula utilizada para calcular el monto final en la cuenta
            después de un período de capitalización es:
          </p>
          <p>MF = P * ((1 + i/m)^n - 1) / (i/m)</p>
          <p>Donde:</p>
          <ul>
            <li>MF = Monto final en la cuenta</li>
            <li>P = Pago anual</li>
            <li>i = Tasa de interés nominal por período (en decimal)</li>
            <li>m = Frecuencia de capitalización por año</li>
            <li>n = Número total de períodos de capitalización</li>
          </ul>
        </ExplicacionFormula>

        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Pago anual ($):
            </label>
            <input
              type="number"
              name="pagoAnual"
              value={pagoAnual}
              placeholder="Ingrese el pago anual"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés nominal (% anual):
            </label>
            <input
              type="number"
              name="tasaInteresNominal"
              value={tasaInteresNominal}
              placeholder="Ingrese la tasa de interés nominal"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Frecuencia de capitalización:
            </label>
            <select
              name="frecuenciaCapitalizacion"
              value={frecuenciaCapitalizacion}
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              defaultValue={"1"}
            >
              <option value="1">Anual</option>
              <option value="2">Semestral</option>
              <option value="4">Cuatrimestral</option>
              <option value="12">Mensual</option>
              <option value="365">Diario</option>
            </select>
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {cargando && (
        <div className="md:w-2/6 md:h-1/2 my-10 mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <Spinner />
        </div>
      )}
      {montoFinal && (
        <Resultado>
          <p>
            El monto final en la cuenta después de 20 años es: ${montoFinal}
          </p>
        </Resultado>
      )}
    </>
  );
};

export default AnualidadVencidaCapitalizacion;
