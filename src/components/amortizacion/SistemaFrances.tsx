import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
interface FormData {
  monto: string;
  tasaInteres: string;
  periodos: string;
}

interface AmortizationRow {
  numeroCuota: number;
  capital: string;
  interes: string;
  cuotaPagar: string;
  capitalResidual: string;
}
function SistemaFrances() {
  const [formData, setFormData] = useState<FormData>({
    monto: "",
    tasaInteres: "",
    periodos: "",
  });

  const [amortizationTable, setAmortizationTable] = useState<AmortizationRow[]>(
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const { monto, tasaInteres, periodos } = formData;
    const newAmortizationTable: AmortizationRow[] = [];

    const montoInicial = parseFloat(monto);
    const tasaInteresDecimal = parseFloat(tasaInteres) / 100;
    const numeroPeriodos = parseInt(periodos);
    const cuotaPagar =
      (montoInicial * tasaInteresDecimal) /
      (1 - Math.pow(1 + tasaInteresDecimal, -numeroPeriodos));
    let montoRestante = montoInicial;

    for (let i = 1; i <= numeroPeriodos; i++) {
      const interes = montoRestante * tasaInteresDecimal;
      const capital = cuotaPagar - interes;
      montoRestante -= capital;
      newAmortizationTable.push({
        numeroCuota: i,
        capital: capital.toFixed(2),
        interes: interes.toFixed(2),
        cuotaPagar: cuotaPagar.toFixed(2),
        capitalResidual: montoRestante.toFixed(2),
      });
    }

    setAmortizationTable(newAmortizationTable);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
      <ExplicacionFormula>
  <p>
    En el sistema de amortización francés, el prestatario paga la misma
    cantidad en cada período. Sin embargo, la proporción de intereses y
    capital en cada cuota varía a lo largo del tiempo.
  </p>
  <p className="mt-4">
    La fórmula utilizada para calcular la cuota a pagar en el sistema de
    amortización francés es:
  </p>
  <p className="mt-2">
    <span className="font-bold">
      Cuota a pagar = (Monto Inicial * Tasa de Interés) / (1 - (1 + Tasa de Interés)^-Numero de Periodos)
    </span>
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
              onChange={handleChange}
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
              onChange={handleChange}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="periodos"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Número de periodos
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              id="periodos"
              name="periodos"
              type="number"
              min="1"
              placeholder="Cuotas"
              value={formData.periodos}
              onChange={handleChange}
            />
          </div>
          <div style={{ padding: "5px" }}></div>
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
          <table
            id="calculoAmortizacionTable"
            className="border-collapse border border-gray-800"
          >
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-800 px-4 py-2">
                  Numero de Cuota
                </th>
                <th className="border border-gray-800 px-4 py-2">Capital</th>
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
              {amortizationTable.map((row, index) => (
                <tr className="bg-gray-100" key={index}>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.numeroCuota}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.capital}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.interes}
                  </td>
                  <td className="border border-gray-800 px-4 py-2">
                    {row.cuotaPagar}
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
}

export default SistemaFrances;
