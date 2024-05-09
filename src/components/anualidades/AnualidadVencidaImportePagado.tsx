import React, { useState } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import { Resultado } from "../../shared/Resultado";
import { Spinner } from "../../layouts/Spinner";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

const AnualidadVencidaImportePagado = () => {
  const [enganche, setEnganche] = useState("");
  const [pagoMensual, setPagoMensual] = useState("");
  const [plazoMeses, setPlazoMeses] = useState("");
  const [importePagado, setImportePagado] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "enganche") {
      setEnganche(value);
    } else if (name === "pagoMensual") {
      setPagoMensual(value);
    } else if (name === "plazoMeses") {
      setPlazoMeses(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const engancheValue = parseFloat(enganche);
    const pagoMensualValue = parseFloat(pagoMensual);
    const plazoMesesValue = parseFloat(plazoMeses);

    // Calcular el importe pagado
    const tasaInteres = 0.3 / 12; // Tasa de interés mensual
    const importePagadoCalc =
      pagoMensualValue *
      ((1 - Math.pow(1 + tasaInteres, -plazoMesesValue)) / tasaInteres);

    const importeTotal = engancheValue + importePagadoCalc;

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setImportePagado(importeTotal.toFixed(2));
    }, 2000);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            En el contexto de las finanzas personales y la adquisición de bienes
            de consumo duraderos, como automóviles o viviendas, a menudo se
            utiliza la anualidad vencida con importe pagado para calcular el
            importe total que se habrá pagado al finalizar el período de
            financiamiento, teniendo en cuenta un enganche inicial, pagos
            mensuales y una tasa de interés fija.
          </p>
          <p className="text-lg text-gray-800">
            La fórmula utilizada para calcular el importe pagado es:
          </p>
          <p className="text-lg text-gray-800 font-bold">
            IP = A * ((1 - (1 + i)^-n) / i) + E
          </p>
          <p className="text-lg text-gray-800">Donde:</p>
          <ul className="list-disc pl-8">
            <li>IP = Importe Pagado</li>
            <li>A = Pago mensual</li>
            <li>i = Tasa de interés por período (en decimal)</li>
            <li>n = Plazo en períodos</li>
            <li>E = Enganche</li>
          </ul>
        </ExplicacionFormula>

        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Enganche ($):
            </label>
            <input
              type="number"
              name="enganche"
              value={enganche}
              placeholder="Ingrese el enganche"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Pago mensual ($):
            </label>
            <input
              type="number"
              name="pagoMensual"
              value={pagoMensual}
              placeholder="Ingrese el pago mensual"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Plazo en meses:
            </label>
            <input
              type="number"
              name="plazoMeses"
              value={plazoMeses}
              placeholder="Ingrese el plazo en meses"
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
      {importePagado && (
        <Resultado>
          <p>El importe pagado es: ${importePagado}</p>
        </Resultado>
      )}
    </>
  );
};

export default AnualidadVencidaImportePagado;
