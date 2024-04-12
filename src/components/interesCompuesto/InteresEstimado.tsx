import React, { useState } from "react";
import ExplicacionFormula from "../../shared/ExplicacionFormula";
import { formatter } from "../../utils";
import { Resultado } from "../../shared/Resultado";
type CompoundInterestParams = {
  deposit: number;
  contribution: number;
  years: number;
  rate: number;
};

export const InteresEstimado = () => {
  const [values, setValues] = useState({
    deposit: "",
    contribution: "",
    years: "",
    rate: "",
  });
  const [balance, setBalance] = useState("");
  const [errors, setErrors] = useState({
    deposit: "",
    contribution: "",
    years: "",
    rate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { deposit, contribution, years, rate } = values;

    const val = compoundInterest({
      deposit: parseFloat(deposit),
      contribution: parseFloat(contribution),
      years: parseFloat(years),
      rate: parseFloat(rate) / 100,
    });

    setBalance(formatter.format(val));
  };

  const compoundInterest = ({
    deposit,
    contribution,
    years,
    rate,
  }: CompoundInterestParams) => {
    let total = deposit;
    for (let i = 0; i < years; i++) {
      total = (total + contribution) * (rate + 1);
    }
    return Math.round(total);
  };

  return (
    <>
      <div className="md:w-1/2 md:h-auto">
        <ExplicacionFormula>
          <p>
            *Depósito inicial: La cantidad de dinero que se deposita
            inicialmente.
          </p>
          <p>
            *Contribución anual: La cantidad de dinero que se agrega a la cuenta
            cada año.
          </p>
          <p>*Años: El número de años que se van a ahorrar.</p>
          <p>*Tasa de interés: La tasa de interés anual proporcionada.</p>
        </ExplicacionFormula>
        <form
          onSubmit={handleSubmit}
          className="my-10 bg-white shadow rounded-lg p-10 mx-5 text-start"
        >
          <div>
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Depósito Inicial ($)
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="deposit"
              value={values.deposit}
              onChange={handleChange}
              placeholder="Ingrese el monto del depósito"
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Contribución Anual
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="contribution"
              value={values.contribution}
              placeholder="Ingrese la contribución anual"
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Años
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="years"
              value={values.years}
              placeholder="Ingrese los años"
              onChange={handleChange}
            />
          </div>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Interes estimado
            </label>
            <input
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              name="rate"
              value={values.rate}
              placeholder="Ingrese el interes estimado"
              onChange={handleChange}
            />
          </div>
          <input
            type="submit"
            className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
            value="Calcular"
          />
        </form>
      </div>
      {balance && (
        <Resultado>
          <p>Balance Final: {balance}</p>
        </Resultado>
      )}
    </>
  );
};
