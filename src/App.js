import React, { createContext, useEffect, useState } from "react";
import Dapp from "./Dapp";
import { useContract } from "web3-hooks";
import {
  ComEthFactoryAdress,
  ComEthFactoryAbi,
} from "./contracts/comEthFactory";
import { ComEthAbi } from "./contracts/comEth";
export const ComEthAddressContext = React.createContext(null);
export const ComEthFactoryContext = React.createContext(null);
export const ComEthContext = React.createContext(null);

// const ComethAddress = "0xf2632965C20F5F4BaAbb6C37AC9bF6f58BCe188E";

function App() {
  const [comEthAddress, setComEthAddress] = useState(
    "0xf2632965C20F5F4BaAbb6C37AC9bF6f58BCe188E"
  );
  const comEthFactory = useContract(ComEthFactoryAdress, ComEthFactoryAbi);
  const comEth = useContract(comEthAddress, ComEthAbi);
  useEffect(()=>{
    console.log('app context comEthAddress', comEthAddress)
  },[comEthAddress])
  return (
    <>
      <ComEthFactoryContext.Provider value={comEthFactory}>
        <ComEthAddressContext.Provider value={{comEthAddress,setComEthAddress}}>
           <ComEthContext.Provider value={comEth}>
          <Dapp />
          </ComEthContext.Provider>
        </ComEthAddressContext.Provider>
      </ComEthFactoryContext.Provider>
    </>
  );
}

export default App;
