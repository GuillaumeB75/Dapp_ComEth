import { Box } from "@chakra-ui/react";
import React from "react";
import StatsButton from "../atoms/StatsButton";
import BudgetButton from "../atoms/BudgetButton";
import PeopleButton from "../atoms/PeopleButton";
import VoteButton from "../atoms/VoteButton";
import ProposButton from "../atoms/ProposButton";
import InfoButton from "../atoms/InfoButton";

const NavInfoOnly = () => {
  return (
    <>

      <Box
        pos="absolute"
        top="0"
        boxShadow="dark-lg"
        backgroundColor="gray.900"
        h="100%"
        w="11%"
      >
        <Box marginTop="10rem">
          <VoteButton />
          <ProposButton />
          <InfoButton />
          <StatsButton />
          <BudgetButton />
          <PeopleButton />
        </Box>
      </Box>

    </>
  );
};

export default NavInfoOnly;
