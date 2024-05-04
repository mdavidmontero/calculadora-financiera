import { useState } from "react";

interface FormData {
  monto: string;
  tasaInteres: string;
  periodos: string;
}

interface AmortizacionData {
  numeroCuota: number;
  montoInicial: string;
  montoFinal: string;
  capital: string;
  interes: string;
  cuotaAPagar: string;
  total: string;
}

const SistemaAleman = () => {
  const [formData, setFormData] = useState<FormData>({
    monto: "",
    tasaInteres: "",
    periodos: "",
  });
  const [amortizacionData, setAmortizacionData] = useState<AmortizacionData[]>(
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { monto, tasaInteres, periodos } = formData;
    let montoInicial = parseFloat(monto);
    const tasaInteresDecimal = parseFloat(tasaInteres) / 100;
    const numeroPeriodos = parseInt(periodos);
    const descuento = montoInicial / numeroPeriodos;

    const amortizacion: AmortizacionData[] = [];

    for (let i = 1; i <= numeroPeriodos; i++) {
      const interes = montoInicial * tasaInteresDecimal;
      const cuota = interes + descuento;

      amortizacion.push({
        numeroCuota: i,
        montoInicial: montoInicial.toFixed(2),
        montoFinal: (montoInicial - descuento).toFixed(2),
        capital: (descuento * -1).toFixed(2),
        interes: interes.toFixed(2),
        cuotaAPagar: cuota.toFixed(2),
        total: montoInicial.toFixed(2),
      });

      montoInicial -= descuento;
    }

    setAmortizacionData(amortizacion);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <form
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={handleSubmit}
        >
          <div className="my-2">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="monto"
            >
              Monto Total a pagar
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="monto"
              name="monto"
              type="number"
              min="1"
              value={formData.monto}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-2">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="tasaInteres"
            >
              Tasa de interés
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="tasaInteres"
              name="tasaInteres"
              type="number"
              min="0"
              max="100"
              value={formData.tasaInteres}
              onChange={handleInputChange}
            />
          </div>

          <div className="my-2">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="periodos"
            >
              Número de periodos
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="periodos"
              name="periodos"
              type="number"
              min="1"
              value={formData.periodos}
              onChange={handleInputChange}
            />
          </div>

          <button
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            type="submit"
          >
            Calcular
          </button>
        </form>
      </div>
      {amortizacionData.length > 0 && (
        <div className="my-2 px-5">
          <table className="border-collapse border border-gray-800">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-800 px-4 py-2">
                  Numero de Cuota
                </th>
                <th className="border border-gray-800 px-4 py-2">
                  Monto Inicial
                </th>
                <th className="border border-gray-800 px-4 py-2">
                  Monto Final
                </th>
                <th className="border border-gray-800 px-4 py-2">Capital</th>
                <th className="border border-gray-800 px-4 py-2">Interes</th>
                <th className="border border-gray-800 px-4 py-2">
                  Cuota a Pagar
                </th>
                <th className="border border-gray-800 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {amortizacionData.map((row, index) => (
                <tr key={index} className="bg-gray-100">
                  <td className="border border-gray-800 px-4 py-2">
                    {row.numeroCuota}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.montoInicial}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.montoFinal}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.capital}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.interes}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.cuotaAPagar}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default SistemaAleman;
