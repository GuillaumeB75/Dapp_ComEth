import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PeopleButton from "../atoms/PeopleButton";
import BudgetButton from "../atoms/BudgetButton";
import StatsButton from "../atoms/StatsButton";

const InformationBody = () => {
<<<<<<< HEAD
    return (
        <>
            <Flex marginLeft="4rem" w="90%" marginTop="4rem">
        <Box
          boxShadow="dark-lg"
          marginLeft="11rem"
          backgroundColor="blackAlpha.200"
          w="25%"
          h="24rem"
        > 
          <Box marginTop="20rem" marginLeft="2rem">
            <StatsButton />
          </Box>
        </Box>
        <Box
          boxShadow="dark-lg"
          marginLeft="6rem"
          backgroundColor="blackAlpha.200"
          w="25%"
          h="24rem"
        >
          <Box marginTop="20rem" marginLeft="2rem">
            <BudgetButton />
          </Box>
        </Box>
        <Box
         boxShadow="dark-lg"
          marginLeft="6rem"
          backgroundColor="blackAlpha.200"
          w="25%"
          h="24rem"
        >
          <Box marginTop="20rem" marginLeft="2rem">
            <PeopleButton />
          </Box>
=======
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
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014
        </Box>
      </SimpleGrid>
      
    </>
  );
};

export default InformationBody;
