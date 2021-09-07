// import React, { createContext, useState, useContext, useEffect } from "react";

// export const ComEthAddressContext = createContext(null);

// export const useComEthAddress = () => {
//   const comEthAddressContext = useContext(ComEthAddressContext);
//   const [comEthAddress, setComEthAddress] = useState("");
//   if (comEthAddressContext === undefined) {
//     throw new Error(
//       `It seems that you are trying to use ComEthAddressContext outside of its provider`
//       );
//     }
//     useEffect(() => {
//       console.log("comEthAddressProvider", comEthAddress);
//     }, [comEthAddress]);

//   return { ComEthAddressContext, comEthAddress, setComEthAddress };
// };

// export const ComEthAddressContextProvider = ({ children }) => {


//   return (
//     <ComEthAddressContext.Provider value={{ comEthAddress, setComEthAddress }}>
//       {children}
//     </ComEthAddressContext.Provider>
//   );
// };
