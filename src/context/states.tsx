"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface StatesContextType {
  comein: boolean;
  setcomein: (val: boolean) => void;
}

const StatesContext = createContext<StatesContextType | undefined>(undefined);

export const StatesProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [comein, setcomein] = useState(false);

  return (
    <StatesContext.Provider
      value={{
        comein,
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
