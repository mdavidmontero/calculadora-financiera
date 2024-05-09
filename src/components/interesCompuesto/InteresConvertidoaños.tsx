import React, { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { Resultado } from "../../shared/Resultado";
import { ButttonSubmitCalcular } from "../../shared/Botones";

export const InteresConvertidoAños = () => {
  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [months, setMonths] = useState(0);
  const [days, setDays] = useState(0);
  const [compoundInterest, setCompoundInterest] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<boolean | string>("");

  const calculateCompoundInterest = (
    e: React.ChangeEvent<HTMLInputElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!validateInput()) return;

    const totalYears = years + (months + days / 30) / 12;
    const interestRate = interest / 100;
    const compoundInterest =
      principal * (1 + interestRate) ** totalYears - principal;
    setCompoundInterest(compoundInterest.toFixed(2));
    setErrorMessage("");
  };

  const validateInput = () => {
    if (
      principal <= 0 ||
      interest <= 0 ||
      years < 0 ||
      months < 0 ||
      days < 0
    ) {
      setErrorMessage("Valores incorrectos. Revisa la información.");
      return false;
    }
    return true;
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <ExplicacionFormula>
          <p>
            El interés compuesto es una técnica financiera que permite calcular
            el valor futuro de una inversión teniendo en cuenta tanto el capital
            inicial como los intereses generados a lo largo del tiempo.
          </p>
          <div className="bg-white p-4 rounded-lg shadow mt-4">
            <p className="text-lg font-semibold mb-2">Fórmula:</p>
            <p className="text-sm">C = P(1 + r)^t - P</p>
            <p>
              Donde:
              <ul>
                <li>
                  <strong>C = Valor futuro</strong>
                </li>
                <li>
                  <strong>P = Valor inicial</strong>
                </li>
                <li>
                  <strong>r = Tasa de interés anual</strong>
                </li>
              </ul>
            </p>
          </div>
        </ExplicacionFormula>
        <form
          onSubmit={calculateCompoundInterest}
          action=""
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Capital inicial:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={principal}
              onChange={(e) => setPrincipal(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tasa de interés (% anual):
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              value={interest}
              onChange={(e) => setInterest(parseFloat(e.target.value))}
            />
          </div>
          <div className="my-2">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Tiempo:
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Años"
              value={years}
              onChange={(e) => setYears(parseFloat(e.target.value))}
            />
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Meses"
              value={months}
              onChange={(e) => setMonths(parseFloat(e.target.value))}
            />
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              type="number"
              placeholder="Días"
              value={days}
              onChange={(e) => setDays(parseFloat(e.target.value))}
            />
          </div>
          <ButttonSubmitCalcular type="submit" label="Calcular" />
        </form>
      </div>
      {parseFloat(compoundInterest) > 0 && (
        <Resultado>
          <h3>Interés Compuesto: {compoundInterest}</h3>
        </Resultado>
      )}
    </>
  );
};
