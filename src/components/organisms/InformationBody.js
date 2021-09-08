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
           Vous trouverez ici les renseignements sur les précédentes propositions votées.
           </Box>
          <StatsButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
        <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Vous trouverez ici toutes les informations budgétaires de votre communauté.
           </Box> <BudgetButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
        <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Vous trouverez ici toutes les informations relatives au statut des membres de votre communauté.
           </Box>
          <PeopleButton />
        </Box>
      </SimpleGrid>
      
    </>
  );
};

export default InformationBody;
