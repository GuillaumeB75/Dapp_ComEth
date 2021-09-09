import React, { useEffect , useContext} from "react";
import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";
// import { useContract } from "web3-hooks";
// import { ComEthAbi } from "../../contracts/comEth";
//export const ComEthContext = React.createContext(null);
import { ComEthContext } from "../../context/ComEthContext";


const Home = ({ comEthAdr }) => {
  const comEth = useContext(ComEthContext);
  //const comEth = useContract(comEthAdr, ComEthAbi);
  useEffect(() => {
    console.log("ComEth", comEth);
  }, [comEth]);
  return (
    <>
      <Box w="100%" minH="100vh"  bgGradient="linear(to-t,teal.600, teal.400);">
        <HomeTemplate />
        <NavLat />
        
      </Box>
    </>
  );
};
export default Home;
