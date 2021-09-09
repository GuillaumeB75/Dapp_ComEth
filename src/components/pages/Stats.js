import React, { useContext } from "react";
import { Box } from "@chakra-ui/react";
import StatsTemplate from "../templates/StatsTemplate";
import { ComEthContext } from "../../context/ComEthContext";

const Stats = () => {
  const comEth = useContext(ComEthContext);
  return (
    <>
    <Box minH="100vh" maxH="100%" w="100%"  bgGradient="linear(to-t,teal.600, teal.400);">
      <StatsTemplate />
      </Box>
    </>
  );
};
export default Stats;
