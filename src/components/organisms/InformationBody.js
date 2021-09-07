import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import PeopleButton from '../atoms/PeopleButton';
import BudgetButton from '../atoms/BudgetButton';
import StatsButton from '../atoms/StatsButton';

const InformationBody = () => {
    return (
        <>
            <Flex marginLeft="4rem" w="90%" marginTop="4rem">
        <Box
          boxShadow="lg"
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
          boxShadow="lg"
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
          boxShadow="lg"
          marginLeft="6rem"
          backgroundColor="blackAlpha.200"
          w="25%"
          h="24rem"
        >
          <Box marginTop="20rem" marginLeft="2rem">
            <PeopleButton />
          </Box>
        </Box>
      </Flex>
        </>
    );
};

export default InformationBody;