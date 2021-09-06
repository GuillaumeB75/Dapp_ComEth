import React, { createContext, useContext } from "react";
import { useContract } from "web3-hooks";
import { ComEthAddressContext } from "./ComEthAddressContext";
import { ComEthAbi } from "../contracts/comEth";

export const ComEthContext = createContext(null);

export const useComEth = () => {
  const comEthContext = useContext(ComEthContext);
  if (comEthContext === undefined) {
    throw new Error(
      `It seems that you are trying to use ComEthContext outside of its provider`
    );
  }
  return comEthContext;
};

export const ComEthContextProvider = ({ children }) => {
  const { comEthAddress } = useContext(ComEthAddressContext);
  const comEth = useContract(comEthAddress, ComEthAbi);
  return (
    <ComEthContext.Provider value={comEth}>
      {children}
    </ComEthContext.Provider>
  );
};
