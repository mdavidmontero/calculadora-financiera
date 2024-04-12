import { useState } from "react";
import { formatter } from "../../utils";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { Resultado } from "../../shared/Resultado";

export const MontoConCambioTasaInteres = () => {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInicial, setTasaInicial] = useState(0);
  const [tasaNueva, setTasaNueva] = useState(0);
  const [tiempoInicialEnMeses, setTiempoInicialEnMeses] = useState(0);
  const [tiempoCambioEnMeses, setTiempoCambioEnMeses] = useState(0);
  const [resultado, setResultado] = useState("");

  const calcularMontoFinal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const tasaMensualInicial = tasaInicial / 12 / 100;
    const tasaMensualNueva = tasaNueva / 12 / 100;

    const montoTiempoInicial =
      capitalInicial * Math.pow(1 + tasaMensualInicial, tiempoInicialEnMeses);

    const montoFinal =
      montoTiempoInicial * Math.pow(1 + tasaMensualNueva, tiempoCambioEnMeses);

    setResultado(formatter.format(parseFloat(montoFinal.toFixed(2))));
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <h2 className="text-2xl font-bold">
            Monto con cambio de tasa de interés
          </h2>
          <p className="mt-4">
            El monto final de un capital inicial es calculado a partir de la
            fórmula:
          </p>
          <p className="mt-4">
            <strong>
              Monto final = Capital inicial * (1 + Tasa de interés inicial) ^
              Tiempo inicial
            </strong>
          </p>
          <p className="mt-4">
            El capital final es calculado a partir de la fórmula:
          </p>
          <p className="mt-4">
            <strong>
              Monto final = Monto inicial * (1 + Tasa de interés nueva) ^ Tiempo
              cambio
            </strong>
          </p>
        </ExplicacionFormula>
        <form
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calcularMontoFinal}
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Ingrese capital inicial"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés inicial (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Ingrese tasa de interés inicial"
              value={tasaInicial}
              onChange={(e) => setTasaInicial(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés nueva (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Ingrese tasa de interés nueva"
              value={tasaNueva}
              onChange={(e) => setTasaNueva(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo inicial en meses:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Ingrese tiempo inicial en meses"
              value={tiempoInicialEnMeses}
              onChange={(e) =>
                setTiempoInicialEnMeses(parseInt(e.target.value))
              }
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo cambio en meses:
            </label>
            <input
              placeholder="Ingrese tiempo cambio en meses"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempoCambioEnMeses}
              onChange={(e) => setTiempoCambioEnMeses(parseInt(e.target.value))}
            />
          </div>
          <input
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            type="submit"
            value={"Calcular"}
          />
        </form>
      </div>
      {resultado && (
        <Resultado>
          <h3>El monto final es: {resultado}</h3>
        </Resultado>
      )}
    </>
  );
};
