import React, { createContext, useContext, useState, ReactNode } from "react";
import { servicesArray } from "../devdata/constants";

interface StatesContextType {
  comein: boolean;
  service: string;
  setservice: (val: string) => void;
  setcomein: (val: boolean) => void;
}

const StatesContext = createContext<StatesContextType | undefined>(undefined);

export const StatesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [comein, setcomein] = useState(true);
  const [service, setservice] = useState(servicesArray[0].name);

  return (
    <StatesContext.Provider
      value={{
        comein,
        service,
        setservice,
        setcomein,
      }}
    >
      {children}
    </StatesContext.Provider>
  );
};

export const useStateContext = () => {
  const context = useContext(StatesContext);
  if (context === undefined) {
    throw new Error("useStateContext must be used within a StatesProvider");
  }
  return context;
};
