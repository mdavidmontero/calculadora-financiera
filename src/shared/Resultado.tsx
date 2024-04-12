import { ReactNode } from "react";

export const Resultado = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:w-2/6 md:h-1/2 my-10 bg-white shadow p-5 rounded-lg mx-5 lg:mt-52 md:mt-52 mt-0 text-center">
      {children}
    </div>
  );
};
