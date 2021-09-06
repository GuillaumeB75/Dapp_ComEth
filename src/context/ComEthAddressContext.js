import React, { createContext, useState, useContext } from "react";

export const ComEthAddressContext = createContext(null);

export const useComEthAddress = () => {
  const comEthAddressContext = useContext(ComEthAddressContext);
  if (comEthAddressContext === undefined) {
    throw new Error(
      `It seems that you are trying to use ComEthAddressContext outside of its provider`
    );
  }
  return ComEthAddressContext;
};

export const ComEthAddressContextProvider = ({ children }) => {
  const [comEthAddress, setComEthAddress] = useState("Default value");
  return (
    <ComEthAddressContext.Provider value={{ comEthAddress, setComEthAddress }}>
      {children}
    </ComEthAddressContext.Provider>
  );
};
