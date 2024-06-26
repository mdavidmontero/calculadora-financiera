import imagen from "../img/LogoHome.png";
import Botones from "./Botones";
export const Home = () => {
  return (
    <>
      <div className="container ">
        <div className="md:flex m-auto align-middle">
          <div className="md:w-1/2 lg:w-2/5 mx-auto mr-8 mt-14">
            <img src={imagen} alt="Imagen home" />
          </div>
          <Botones />
        </div>
      </div>
    </>
  );
};
