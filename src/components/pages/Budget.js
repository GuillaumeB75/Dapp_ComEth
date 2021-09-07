import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavInfoOnly from "../organisms/NavInfoOnly";
import BudgetTemplate from "../templates/BudgetTemplate";

const Budget = () => {
  return (
    <>
      <Box h="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <BudgetTemplate />
        <NavInfoOnly />
        <Footer />
      </Box>
    </>
  );
};
export default Budget;
