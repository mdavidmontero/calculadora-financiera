import { ReactNode } from "react";

const ExplicacionFormula = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-gray-300 ml-4 font-bold rounded mb-3 p-3">
      {children}
    </div>
  );
};
export default ExplicacionFormula;
