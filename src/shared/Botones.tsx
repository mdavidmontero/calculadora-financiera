import { Link, To } from "react-router-dom";

type BotonesNavProps = {
  value: string;
  link: To;
};

export const BotonesNav = ({ value, link }: BotonesNavProps) => {
  return (
    <div
      className="mb-5"
      style={{
        fontFamily: "Verdana",
      }}
    >
      <Link to={link}>
        <input
          type="button"
          value={value}
          className="bg-orange-500 w-72 text-xl border-4 border-blue-900 text-white p-2 uppercase rounded-full hover:bg-orange-600 cursor-pointer transition-colors font-extrabold"
        />
      </Link>
    </div>
  );
};

type ButtonSubmit = {
  type: string;
  label: string;
};

export const ButttonSubmitCalcular = ({ type, label }: ButtonSubmit) => {
  return (
    <input
      type={type}
      className="bg-orange-600 w-full text-white p-3 uppercase font-bold rounded-md hover:bg-orange-700 cursor-pointer transition-colors mt-2"
      value={label}
    />
  );
};
