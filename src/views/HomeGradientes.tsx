import { ReactElement, useMemo, useState } from "react";
import { OptionSelect } from "../shared/Options";
import AnualidadValorFinal from "../components/gradientes/aritmeticos/anualidad/AnualidadValorFinal";
import AnualidadValorPresente from "../components/gradientes/aritmeticos/anualidad/AnualidadValorPresente";
import ElementoN from "../components/gradientes/aritmeticos/elementoN/ElementoN";
import ValorFuturoAritmetico from "../components/gradientes/aritmeticos/valorFuturo/ValorFuturoAritmetico";
import ValorPresenteAritmetico from "../components/gradientes/aritmeticos/valorPresente/ValorPresenteAritmetico";
import ValorPresentePerpetuoAritmetico from "../components/gradientes/aritmeticos/valorPresentePerpetuo/ValorPresentePerpetuo";
import ElementoNGeometrica from "../components/gradientes/geometrico/ElementoN";
import ValorFuturoGeometrico from "../components/gradientes/geometrico/ValorFuturo";
import ValorPresenteGeometrico from "../components/gradientes/geometrico/ValorPresente";
import ValorPresentePerpetuoGeometrico from "../components/gradientes/geometrico/ValorPresentePerpetuo";

export default function HomeGradientes() {
  const [seleccion, setSeleccion] = useState<string>("gradienteValorFinal");
  useMemo(() => seleccion, [seleccion]);

  const listComponents: Record<string, ReactElement> = {
    // Anualidad -Gradientes
    gradienteValorFinal: <AnualidadValorFinal />,
    gradienteValorPresente: <AnualidadValorPresente />,
    // Elemento N
    gradientenElementoN: <ElementoN />,
    // Valor futuro
    valorFururoAritmetico: <ValorFuturoAritmetico />,
    // Valor presente
    valorPresenteAritmetico: <ValorPresenteAritmetico />,
    // Valor presente Perpetuo
    valorPresentePerpetuo: <ValorPresentePerpetuoAritmetico />,

    // -- Geometricos--
    elementoNGeometrica: <ElementoNGeometrica />,
    ValorFuturoGeometrico: <ValorFuturoGeometrico />,
    ValorPresenteGeometrico: <ValorPresenteGeometrico />,
    ValorPresentePerpetuoGeometrico: <ValorPresentePerpetuoGeometrico />,
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
          <OptionSelect label="======Gradientes Aritmeticos=======" value="" />
          <OptionSelect
            label="Anualidad Valor final"
            value="gradienteValorFinal"
          />
          <OptionSelect
            label="Anualidad Valor Presente"
            value="gradienteValorPresente"
          />
          <OptionSelect label="Elemento N" value="gradientenElementoN" />
          <OptionSelect
            label="Valor Fututo Aritmetico"
            value="valorFururoAritmetico"
          />
          <OptionSelect
            label="Valor Presente Aritmetico"
            value="valorPresenteAritmetico"
          />
          <OptionSelect
            label="Valor Presente Perpetuo"
            value="valorPresentePerpetuo"
          />
          {/* Geometricos */}
          <OptionSelect label="=====Gradientes Geometricos=======" value="" />
          <OptionSelect label="Elemento N" value="elementoNGeometrica" />
          <OptionSelect
            label="Valor Futuro Geometrico"
            value="ValorFuturoGeometrico"
          />
          <OptionSelect
            label="Valor Presente Geometrico"
            value="ValorPresenteGeometrico"
          />
          <OptionSelect
            label="Valor Presente Perpetuo Aritmetico"
            value="ValorPresentePerpetuoGeometrico"
          />
        </select>
      </div>

      <div className="contenedor md:flex-row flex-col flex bg-gray-200 min-h-screen ">
        {listComponents[seleccion]}
      </div>
    </>
  );
}
