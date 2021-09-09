import React, {useContext} from "react"
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import InfoTemplate from "../templates/InfoTemplate";
import { ComEthContext } from "../../context/ComEthContext";
const Info = () => {
  const comEth = useContext(ComEthContext);
  
  return (
    <>
      <Box minH="100vh" maxH="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <InfoTemplate />
        <NavInfoOnly />
      </Box>
    </>
  );
};
export default Info;
