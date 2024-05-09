import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { Spinner } from "../../layouts/Spinner";
import { capitalInicial } from "../../types/index";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";

const initialState: capitalInicial = {
  montoCompuesto: 0,
  interes: 0,
  periodos: 0,
};

export const CapitalInicial = () => {
  const [datos, setDatos] = useState<capitalInicial>(initialState);
  const [capitalInicial, setCapitalInicial] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const i = datos.interes / 100;
    const n = datos.periodos;
    const c = datos.montoCompuesto / Math.pow(1 + i, n);
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      setCapitalInicial(c.toFixed(2));
    }, 2000);
  };
  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="mb-2">
            El valor presente (VP) representa el valor actual de una cantidad
            futura de dinero, teniendo en cuenta una tasa de descuento o
            interés. La fórmula utilizada para calcular el valor presente en
            este contexto es:
          </p>
          <p className="mb-2">
            VF es el valor futuro o cantidad futura de dinero.
          </p>
          <p className="mb-2">
            i es la tasa de interés por período en formato decimal.
          </p>
          <p className="mb-2">n es el número de períodos.</p>
          <div className="bg-white p-4 rounded-lg shadow mt-4">
            <p className="text-lg font-semibold mb-2">Fórmula:</p>
            <p className="text-sm">
              VP = VF / (1 + i)<sup>n</sup>
            </p>
          </div>
        </ExplicacionFormula>
        <form
          onSubmit={handleSubmit}
          className=" my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Monto compuesto final ($):
            </label>
            <input
              type="number"
              name="montoCompuesto"
              value={datos.montoCompuesto}
              placeholder="Ingrese Monto Compuesto"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (%):
            </label>
            <input
              type="number"
              name="interes"
              value={datos.interes}
              placeholder="Ingrese tasa de Interes"
              onChange={handleChange}
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Periodos:
            </label>
            <input
              type="number"
              name="periodos"
              value={datos.periodos}
              placeholder="Ingrese número de periodos"
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
      {capitalInicial && (
        <Resultado>
          <p>El capital inicial fue: ${capitalInicial}</p>
        </Resultado>
      )}
    </>
  );
};
