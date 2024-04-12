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
          className="bg-orange-500 w-full text-xl border-4 border-blue-900 text-white p-5 uppercase rounded-full hover:bg-orange-600 cursor-pointer transition-colors font-extrabold"
        />
      </Link>
    </div>
  );
};
