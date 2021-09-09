import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";
import { useContract } from "web3-hooks";
import { ComEthAbi } from "../../contracts/comEth";
export const ComEthContext = React.createContext(null);

const Home = ({ comEthAdr }) => {
  const comEth = useContract(comEthAdr, ComEthAbi);
  useEffect(() => {
    console.log("ComEth", comEth);
  }, [comEth]);
  return (
    <>
      <ComEthContext.Provider value={comEth}>
        <Box
          h={{ sm: "100%", md: "91.7vh", lg: "91.7vh" }}
          w="100%"
          bgGradient="linear(to-t,teal.600, teal.400);"
        >
          <HomeTemplate />
          <NavLat />
        </Box>
      </ComEthContext.Provider>
    </>
  );
};
export default Home;
