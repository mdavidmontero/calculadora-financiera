import { useState, ReactElement, useMemo } from "react";
import { NumeroPeriodos } from "../components/interesCompuesto/NumeroPeriodos";
import { MontoCompuesto } from "../components/interesCompuesto/MontoCompuesto";
import { CapitalInicial } from "../components/interesCompuesto/CapitalInicial";
import { Capitalizacion } from "../components/interesCompuesto/Capitalizacion";
import { TasaInteres } from "../components/interesCompuesto/TasaInteres";
import { MontoConPeriodoFraccionario } from "../components/interesCompuesto/MontoConPeriodoFraccionario";
import { MontoConCambioTasaInteres } from "../components/interesCompuesto/MontoConCambioTasaInteres";
import { InteresEstimado } from "../components/interesCompuesto/InteresEstimado";
import { DepositoAdicional } from "../components/interesCompuesto/DepositoAdicional";
import { InteresConvertidoAños } from "../components/interesCompuesto/InteresConvertidoaños";
import { OptionSelect } from "../shared/Options";

export const HomeIntCompuesto = () => {
  const [seleccion, setSeleccion] = useState<string>("monto");
  useMemo(() => seleccion, [seleccion]);

  const listComponents: Record<string, ReactElement> = {
    nroperiodos: <NumeroPeriodos />,
    monto: <MontoCompuesto />,
    valorpresente: <CapitalInicial />,
    capitalizacion: <Capitalizacion />,
    tasainteres: <TasaInteres />,
    montoperiodofraccionario: <MontoConPeriodoFraccionario />,
    montocambiotasainteres: <MontoConCambioTasaInteres />,
    depositoadicional: <DepositoAdicional />,
    montoestimado: <InteresEstimado />,
    interesconvertido: <InteresConvertidoAños />,
  };

  return (
    <>
      <div className="bg-gray-200 p-2 text-center lg:text-start sm:text-center">
        <select
          name="seleccion"
          id="selecccion"
          className="bg-orange-500  text-white border-sky-950 border-2 font-bold rounded "
          onChange={(e) => setSeleccion(e.target.value)}
        >
          <OptionSelect label="Monto Compuesto" value="monto" />
          <OptionSelect label="Valor Presente" value="valorpresente" />
          <OptionSelect
            label="Valor Final (Monto Compuesto)"
            value="capitalizacion"
          />
          <OptionSelect label="Numero Periodos" value="nroperiodos" />
          <OptionSelect label="Tasa Interes" value="tasainteres" />
          <OptionSelect label="Deposito Adicional" value="depositoadicional" />
          <OptionSelect
            label="Monto Periodo Fraccionario"
            value="montoperiodofraccionario"
          />
          <OptionSelect
            label="Monto Cambio con tasa de Interes"
            value="montocambiotasainteres"
          />
          <OptionSelect
            label="Interes Compuesto con Valor Estimado"
            value="montoestimado"
          />
          <OptionSelect
            label=" Interes Compuesto Tiempo Variable"
            value="interesconvertido"
          />
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {listComponents[seleccion]}
      </div>
    </>
  );
};
