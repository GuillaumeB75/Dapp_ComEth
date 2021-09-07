import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PeopleButton from "../atoms/PeopleButton";
import BudgetButton from "../atoms/BudgetButton";
import StatsButton from "../atoms/StatsButton";

const InformationBody = () => {
  return (
    <>
    
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" mr="2rem" mt="4rem" ml={{sm:"9rem", md:"10rem", lg:"12rem"}}>
    <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
    <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Ici sont les proposition déjà voter avec leurs paramettres
           </Box>
          <StatsButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
        <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Ici c'est pour voir les budgets utilisé et totaux
           </Box> <BudgetButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
        <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Ici c'est pour voir qui est actif, qui est banni, qui fait partie de ta ComEth
           </Box>
          <PeopleButton />
        </Box>
      </SimpleGrid>
      
    </>
  );
};

export default InformationBody;
