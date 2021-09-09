import React, { createContext, useEffect } from "react";
import { useContract } from "web3-hooks";
import { ComEthAbi } from "../contracts/comEth";

export const ComEthContext = createContext(null);

export const ComEthContextProvider = ({ comEthAdr, children }) => {
  const comEth = useContract(comEthAdr, ComEthAbi);

  useEffect(() => {
    console.log("ComEthContextProvider", comEthAdr);
  });

  return (
    <ComEthContext.Provider value={comEth}>{children}</ComEthContext.Provider>
  );
};
