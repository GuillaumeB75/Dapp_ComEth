import { Box, SimpleGrid, Spacer} from "@chakra-ui/react";
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
    
    <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" m="2rem" ml="10rem">
    <Box backgroundColor="blackAlpha.200" height="9rem">
          blablablablabla
          <StatsButton />
        </Box>
        <Box backgroundColor="blackAlpha.200" height="9rem">
          Hello <BudgetButton />
        </Box>
        <Box backgroundColor="blackAlpha.200" height="9rem">
          hey
          <PeopleButton />
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014
        </Box>
      </SimpleGrid>
      
    </>
  );
};

export default InformationBody;
