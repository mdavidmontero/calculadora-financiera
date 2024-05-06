import React, { useState } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import { Resultado } from "../../shared/Resultado";
import { Spinner } from "../../layouts/Spinner";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

const AnualidadVencida = () => {
  const [datos, setDatos] = useState({
    montoDeseado: "",
    tasaInteres: "",
    plazoSemestres: "",
  });
  const [renta, setRenta] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const montoDeseado = parseFloat(datos.montoDeseado);
    const tasaInteresDecimal = parseFloat(datos.tasaInteres) / 100; // Convertir la tasa de interés a decimal
    const plazoSemestres = parseInt(datos.plazoSemestres);

    // Calcular la renta necesaria
    const rentaNecesaria =
      montoDeseado /
      ((Math.pow(1 + tasaInteresDecimal, plazoSemestres) - 1) /
        tasaInteresDecimal);

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setRenta(rentaNecesaria.toFixed(2));
    }, 2000);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>La fórmula utilizada para calcular la renta necesaria es:</p>
          <p>R = M / ((1 + i)^n - 1) / i</p>
          <p>Donde:</p>
          <ul>
            <li>R = Renta necesaria</li>
            <li>M = Monto deseado al final del período</li>
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
              Monto deseado al final del período ($):
            </label>
            <input
              type="number"
              name="montoDeseado"
              value={datos.montoDeseado}
              placeholder="Ingrese el monto deseado"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (% semestral):
            </label>
            <input
              type="number"
              name="tasaInteres"
              value={datos.tasaInteres}
              placeholder="Ingrese la tasa de interés"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Plazo en semestres:
            </label>
            <input
              type="number"
              name="plazoSemestres"
              value={datos.plazoSemestres}
              placeholder="Ingrese el plazo en semestres"
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
      {renta && (
        <Resultado>
          <p>La renta necesaria es: ${renta}</p>
        </Resultado>
      )}
    </>
  );
};

export default AnualidadVencida;
