import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { formatter } from "../../utils/index";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";

export const MontoCompuesto = () => {
  const [deposito, setDeposito] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [periodoInversion, setPeriodoInversion] = useState(0);
  const [balance, setBalance] = useState("");
  const [intereses, setIntereses] = useState("");

  const calcularMontoCompuesto = () => {
    const capitalInicial = deposito;
    const tasaInteresMensual = tasaInteres / 100;
    const meses = periodoInversion;
    const montoCompuesto =
      capitalInicial * Math.pow(1 + tasaInteresMensual, meses);
    const intereses = montoCompuesto - capitalInicial;

    setBalance(formatter.format(montoCompuesto));
    setIntereses(formatter.format(intereses));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    calcularMontoCompuesto();
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            El cálculo del monto compuesto es una forma de determinar el valor
            futuro de una inversión inicial, teniendo en cuenta tanto el capital
            inicial como los intereses generados durante cierto período de
            tiempo.
          </p>
          <p>* P es el depósito inicial o capital inicial.</p>
          <p>* r es la tasa de interés anual (en formato decimal).</p>
          <p>* n es el número de veces que se capitaliza el interés por año.</p>
          <div className="bg-white p-4 rounded-lg shadow mt-4">
            <p className="text-lg font-semibold mb-2">Fórmula:</p>
            <p className="text-sm">Monto Compuesto = P * (1 + r/n)^(n*t)</p>
            <p className="text-sm">Intereses = Monto Compuesto - P</p>
          </div>
        </ExplicacionFormula>
        <form
          action=""
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={handleSubmit}
        >
          <div className="my-2">
            <label
              htmlFor="deposito"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Depósito Inicial ($)
            </label>
            <input
              id="deposito"
              type="text"
              placeholder="Depósito Inicial"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={deposito}
              onChange={(e) => setDeposito(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="tasaInteres"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Tasa de Interés Mensual (%)
            </label>
            <input
              id="tasaInteres"
              type="text"
              placeholder="Tasa de Interés Mensual"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(parseInt(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label
              htmlFor="periodoInversion"
              className="uppercase text-gray-600 block text-xl font-bold"
            >
              Período de Inversión (meses)
            </label>
            <input
              id="periodoInversion"
              type="text"
              placeholder="Período de Inversión"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={periodoInversion}
              onChange={(e) => setPeriodoInversion(parseInt(e.target.value))}
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {balance && (
        <Resultado>
          <p>Monto Compuesto: {balance}</p>
          <p>Intereses: {intereses}</p>
        </Resultado>
      )}
    </>
  );
};
