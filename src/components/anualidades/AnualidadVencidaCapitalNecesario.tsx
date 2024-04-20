import React, { useState } from "react";
import { ButttonSubmitCalcular } from "../../shared/Botones";
import { Resultado } from "../../shared/Resultado";
import { Spinner } from "../../layouts/Spinner";

const AnualidadVencidaCapitalNecesario = () => {
  const [datos, setDatos] = useState({
    renta: "",
    tasaInteres: "",
    plazo: "",
  });
  const [capital, setCapital] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const renta = parseFloat(datos.renta);
    const tasaInteresDecimal = parseFloat(datos.tasaInteres) / 100; // Convertir la tasa de interés a decimal
    const plazo = parseInt(datos.plazo) / 12;

    const capitalNecesario =
      renta *
      ((1 - Math.pow(1 + tasaInteresDecimal, -plazo)) / tasaInteresDecimal);

    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setCapital(capitalNecesario.toFixed(2));
    }, 2000);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Renta deseada anual ($):
            </label>
            <input
              type="number"
              name="renta"
              value={datos.renta}
              placeholder="Ingrese la renta deseada"
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
              value={datos.tasaInteres}
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
              name="plazo"
              value={datos.plazo}
              placeholder="Ingrese el plazo en Meses"
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
      {capital && (
        <Resultado>
          <p>El capital necesario es: ${capital}</p>
        </Resultado>
      )}
    </>
  );
};

export default AnualidadVencidaCapitalNecesario;
