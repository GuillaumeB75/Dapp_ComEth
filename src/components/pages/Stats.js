import React from "react";
import { Box } from "@chakra-ui/react";
import StatsTemplate from "../templates/StatsTemplate";
import NavInfoOnly from "../organisms/NavInfoOnly";


const Stats = () => {
  return (
    <>
    <Box minH="100vh" maxH="100%" w="100%"  bgGradient="linear(to-t,teal.600, teal.400);">
    <NavInfoOnly />
      <StatsTemplate />
      </Box>
    </>
  );
};
export default Stats;
