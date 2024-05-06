import React, { useState } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import { Resultado } from "../../shared/Resultado";
import { Spinner } from "../../layouts/Spinner";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

const ValorPresentePrestamo = () => {
  const [valorPrestamo, setValorPrestamo] = useState("");
  const [pagoAnual, setPagoAnual] = useState("");
  const [tasaInteres, setTasaInteres] = useState("");
  const [plazoAnios, setPlazoAnios] = useState("");
  const [valorPresente, setValorPresente] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "valorPrestamo") {
      setValorPrestamo(value);
    } else if (name === "pagoAnual") {
      setPagoAnual(value);
    } else if (name === "tasaInteres") {
      setTasaInteres(value);
    } else if (name === "plazoAnios") {
      setPlazoAnios(value);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const pagoAnualValue = parseFloat(pagoAnual);
    const tasaInteresDecimal = parseFloat(tasaInteres) / 100;
    const plazoAniosValue = parseInt(plazoAnios) / 12;

    // Calcular el valor presente del préstamo
    const valorPresenteCalc =
      pagoAnualValue *
      ((1 - Math.pow(1 + tasaInteresDecimal, -plazoAniosValue)) /
        tasaInteresDecimal);

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setValorPresente(valorPresenteCalc.toFixed(2));
    }, 2000);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            La fórmula utilizada para calcular el valor presente del préstamo
            es:
          </p>
          <p>VP = P * ((1 - (1 + i)^-n) / i)</p>
          <p>Donde:</p>
          <ul>
            <li>VP = Valor Presente</li>
            <li>P = Pago anual</li>
            <li>i = Tasa de interés por período (en decimal)</li>
            <li>n = Plazo en períodos</li>
          </ul>
        </ExplicacionFormula>

        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Valor del préstamo ($):
            </label>
            <input
              type="number"
              name="valorPrestamo"
              value={valorPrestamo}
              placeholder="Ingrese el valor del préstamo"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
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
              Tasa de interés (% anual):
            </label>
            <input
              type="number"
              name="tasaInteres"
              value={tasaInteres}
              placeholder="Ingrese la tasa de interés"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Plazo en Meses:
            </label>
            <input
              type="number"
              name="plazoAnios"
              value={plazoAnios}
              placeholder="Ingrese el plazo en Meses (Años->Meses)"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {cargando && (
        <div className="md:w-2/6 md:h-1/2 my-10 mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
          <Spinner />
        </div>
      )}
      {valorPresente && (
        <Resultado>
          <p>Valor del Prestamo: {valorPrestamo}</p>
          <p>El valor presente del préstamo es: ${valorPresente}</p>
        </Resultado>
      )}
    </>
  );
};

export default ValorPresentePrestamo;
