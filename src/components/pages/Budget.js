import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import BudgetTemplate from "../templates/BudgetTemplate";
import { ComEthContext } from "../../context/ComEthContext";

const Budget = () => {
  const comEth = useContext(ComEthContext);
  return (
    <>
      <Box minH="100vh" maxW="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <NavInfoOnly />
        <BudgetTemplate />
      </Box>
    </>
  );
};
export default Budget;
