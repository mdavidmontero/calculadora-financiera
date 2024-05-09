import { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { formatter } from "../../utils";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";
export const DepositoAdicional = () => {
  const [capitalInicial, setCapitalInicial] = useState(0);
  const [tasaInteres, setTasaInteres] = useState(0);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState(0);
  const [depositoAdicional, setDepositoAdicional] = useState(0);
  const [retiroRealizado, setRetiroRealizado] = useState(0);
  const [resultado, setResultado] = useState(0);

  const calcularImporteBancario = (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const tasaInteresMensual = tasaInteres / 12 / 100;
    const tiempoAnio = 12 - tiempoTranscurrido;
    let importe = capitalInicial;
    importe += depositoAdicional;
    for (let i = 0; i < tiempoTranscurrido; i++) {
      importe *= 1 + tasaInteresMensual;
    }
    importe -= retiroRealizado;
    for (let i = 0; i < tiempoAnio; i++) {
      importe *= 1 + tasaInteresMensual;
    }
    setResultado(parseFloat(importe.toFixed(2)));
  };
  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p className="text-lg text-gray-800">
            En el ámbito bancario, un depósito adicional se refiere a una
            cantidad de dinero que se agrega a una cuenta bancaria después del
            depósito inicial. Esta adición puede realizarse en cualquier momento
            durante la vida útil de la cuenta. Los depósitos adicionales pueden
            provenir de fuentes como ingresos regulares, bonificaciones,
            herencias u otros ingresos adicionales.
          </p>
          <p className="text-lg text-gray-800">**Fórmula:**</p>
          <p className="text-lg text-gray-800 font-bold">
            Importe final = (Capital inicial + Depósito adicional) * (1 + Tasa
            de interés / 12 / 100)^(Tiempo transcurrido) - Retiro realizado
          </p>
        </ExplicacionFormula>
        <form
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
          onSubmit={calcularImporteBancario}
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={capitalInicial}
              onChange={(e) => setCapitalInicial(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (%):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tasaInteres}
              onChange={(e) => setTasaInteres(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo Transcurrido
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={tiempoTranscurrido}
              onChange={(e) => setTiempoTranscurrido(parseInt(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Depósito adicional:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={depositoAdicional}
              onChange={(e) => setDepositoAdicional(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Retiro realizado:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={retiroRealizado}
              onChange={(e) => setRetiroRealizado(parseFloat(e.target.value))}
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {resultado !== 0 && (
        <Resultado>
          <h3>El importe final es: {formatter.format(resultado)}</h3>
        </Resultado>
      )}
    </>
  );
};
