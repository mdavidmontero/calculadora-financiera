import { Link, useLocation } from "react-router-dom";
import back from "../img/back.svg";
export const Header = () => {
  const location = useLocation();
  return (
    <div className="bg-blue-950 p-6">
      {location.pathname !== "/" && (
        <Link to={"/"}>
          <img
            src={back}
            className="bg-orange-600 p-2 rounded-md  hover:bg-orange-700 text-white font-bold transition-colors absolute top-0 mt-10"
          />
        </Link>
      )}

      <h1 className="md:text-6xl font-black text-5xl text-center md:w-2/3 mx-auto text-white uppercase">
        Calcufácil {""}
        <span className="text-orange-600">Financiero</span>
      </h1>
    </div>
  );
};
