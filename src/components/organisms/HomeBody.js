import { Box,  Flex } from "@chakra-ui/react";
import React from "react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";

const HomeBody = () => {
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
            <VoteButton />
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
            <ProposButton />
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
            <InfoButton />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default HomeBody;
