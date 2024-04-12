import { Link } from "react-router-dom";
const Botones = () => {
  return (
    <div className="md:w-1/2 lg:w-1/4 md:h-screen items-center m-32 justify-center mx-auto ml-8 ">
      <div
        style={{
          fontFamily: "Verdana",
        }}
      >
        <div className="mb-5">
          <Link to={"simple"}>
            <input
              type="button"
              value={"Interes Simple"}
              className="bg-orange-500 w-full text-xl border-4 border-blue-900 text-white p-5 uppercase rounded-full hover:bg-orange-600 cursor-pointer transition-colors font-extrabold"
            />
          </Link>
        </div>
        <Link to={"compuesto"}>
          <div className="mb-5">
            <input
              type="button"
              value={"Interes Compuesto"}
              className="bg-orange-500 w-full text-xl border-4 border-blue-900 text-white p-5 uppercase font-extrabold rounded-full hover:bg-orange-600 cursor-pointer transition-colors"
            />
          </div>
        </Link>
        <Link to={"anualidades"}>
          <div className="mb-5">
            <input
              type="button"
              value={"Tasa de Interes"}
              className="bg-orange-500 w-full text-xl p-5  border-4 border-blue-900 text-white uppercase font-extrabold rounded-full hover:bg-orange-600 cursor-pointer transition-colors"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Botones;
