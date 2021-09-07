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
          boxShadow="dark-lg"
          marginLeft="11rem"
          rounded="md"
          w="25%"
          h="25rem"
        > 
          <Box marginTop="20rem" marginLeft="10rem">
            <StatsButton />
          </Box>
        </Box>
        <Box
          boxShadow="dark-lg"
          marginLeft="6rem"
          rounded="md"
          w="25%"
          h="25rem"
        >
          <Box marginTop="20rem" marginLeft="8rem">
            <BudgetButton />
          </Box>
        </Box>
        <Box
          boxShadow="dark-lg"
          marginLeft="6rem"
          rounded="md"
          w="25%"
          h="25rem"
        >
          <Box marginTop="20rem" marginLeft="10rem">
            <PeopleButton />
          </Box>
        </Box>
      </Flex>
        </>
    );
};

export default InformationBody;