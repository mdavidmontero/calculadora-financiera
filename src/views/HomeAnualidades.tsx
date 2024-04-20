import { ReactElement, useMemo, useState } from "react";
import { OptionSelect } from "../shared/Options";
import AnualidadVencida from "../components/anualidades/AnualidadVencida";
import AnualidadSemestres from "../components/anualidades/AnualidadSemestres";
import AnualidadVencidaCapitalNecesario from "../components/anualidades/AnualidadVencidaCapitalNecesario";
import AnualidadVencidaImportePagado from "../components/anualidades/AnualidadVencidaImportePagado";
import ValorPresentePrestamo from "../components/anualidades/AnualidadValorPresente";
import AnualidadVencidaCapitalizacion from "../components/anualidades/AnualidadVencidaCapitalizacion";

export default function HomeAnualidades() {
  const [seleccion, setSeleccion] = useState<string>("anualidadVencida");
  useMemo(() => seleccion, [seleccion]);

  const listComponents: Record<string, ReactElement> = {
    anualidadVencida: <AnualidadVencida />,
    anualidadSemestres: <AnualidadSemestres />,
    anualidadvencidacapitalNecesario: <AnualidadVencidaCapitalNecesario />,
    anualidadVencidaImportePagado: <AnualidadVencidaImportePagado />,
    anualidadvenciaValorPresente: <ValorPresentePrestamo />,
    anualidadVencidaCapitalizacion: <AnualidadVencidaCapitalizacion />,
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
          <OptionSelect label="Anualidad Vencida" value="anualidadVencida" />
          <OptionSelect
            label="Anualidad Semestres"
            value="anualidadSemestres"
          />
          <OptionSelect
            label="Analidad vencida - Capital Necesario"
            value="anualidadvencidacapitalNecesario"
          />
          <OptionSelect
            label="Anualidad Vencida - Importe Pagado"
            value="anualidadVencidaImportePagado"
          />
          <OptionSelect
            label="Anualidad Vencida - Valor Presente"
            value="anualidadvenciaValorPresente"
          />
          <OptionSelect
            label="Anualidad Vencida - Capitalización"
            value="anualidadVencidaCapitalizacion"
          />
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {listComponents[seleccion]}
      </div>
    </>
  );
}
