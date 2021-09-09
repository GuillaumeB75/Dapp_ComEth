import { Box } from "@chakra-ui/react";
import React from "react";
import VoteButton from "../atoms/VoteButton";
import ProposButton from "../atoms/ProposButton";
import InfoButton from "../atoms/InfoButton";

const MainNav = () => {
  return (
    <>
      <Box marginLeft="9rem">
        <VoteButton />
        <ProposButton />
        <InfoButton />
      </Box>
    </>
  );
};

export default MainNav;
