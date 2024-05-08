import React, { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";

interface FormData {
  monto: string;
  tasaInteres: string;
  periodos: string;
}

interface AmortizacionData {
  numeroCuota: number;
  interes: string;
  cuotaAPagar: string;
  capitalResidual: string;
}

const SistemaAmericano = () => {
  const [formData, setFormData] = useState<FormData>({
    monto: "",
    tasaInteres: "",
    periodos: "",
  });
  const [amortizacionData, setAmortizacionData] = useState<AmortizacionData[]>(
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { monto, tasaInteres, periodos } = formData;
    let montoInicial = parseFloat(monto);
    const tasaInteresDecimal = parseFloat(tasaInteres) / 100;
    const numeroPeriodos = parseInt(periodos);

    const amortizacion: AmortizacionData[] = [];

    for (let i = 1; i <= numeroPeriodos; i++) {
      const interes = montoInicial * tasaInteresDecimal;
      let cuotaPagar = interes;

      if (i === numeroPeriodos) {
        cuotaPagar += montoInicial;
        montoInicial = 0;
      }

      amortizacion.push({
        numeroCuota: i,
        interes: interes.toFixed(2),
        cuotaAPagar: cuotaPagar.toFixed(2),
        capitalResidual: montoInicial.toFixed(2),
      });
    }

    setAmortizacionData(amortizacion);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
      <ExplicacionFormula>
  <p>
    El sistema de amortización americano, también conocido como "interés sobre interés", es un método de pago de préstamos en el que el capital se amortiza al final del período de pago. En este sistema, cada cuota consta de dos componentes: el interés, calculado sobre el saldo pendiente del préstamo, y la cuota de capital, que es la misma en cada período.
  </p>
  <p className="mt-4">
    La fórmula para calcular el interés en el sistema americano es: <br />
    <span className="font-bold">Interés = Monto Inicial * Tasa de Interés</span>
  </p>
</ExplicacionFormula>


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
              placeholder="A pagar"
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
              placeholder="0-100"
              value={formData.tasaInteres}
              onChange={handleInputChange}
            />
          </div>
          <div className="my-2">
            <label
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="periodos"
            >
              Numero de periodos
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="periodos"
              name="periodos"
              type="number"
              min="1"
              placeholder="Cuotas"
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

      <div className="my-8 px-5">
        <div className="tabla">
          <table className="border-collapse border border-gray-800">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-800 px-4 py-2">
                  Numero de Cuota
                </th>
                <th className="border border-gray-800 px-4 py-2">Interes</th>
                <th className="border border-gray-800 px-4 py-2">
                  Cuota a pagar
                </th>
                <th className="border border-gray-800 px-4 py-2">
                  Capital Residual
                </th>
              </tr>
            </thead>
            <tbody className="text-center">
              {amortizacionData.map((row, index) => (
                <tr className="bg-gray-100" key={index}>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.numeroCuota}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.interes}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.cuotaAPagar}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.capitalResidual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SistemaAmericano;
