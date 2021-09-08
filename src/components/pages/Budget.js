import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import BudgetTemplate from "../templates/BudgetTemplate";

const Budget = () => {
  return (
    <>
      <Box minH="91.7vh" maxW="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <BudgetTemplate />
        <NavInfoOnly />
      </Box>
    </>
  );
};
export default Budget;
