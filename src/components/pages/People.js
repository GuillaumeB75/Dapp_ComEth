import React from "react";
import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import PeopleTemplate from "../templates/PeopleTemplate";

const People = () => {

  return (
    <>
      <Box
        minH="100vh"
        maxW="100%"
        w="100%"
        bgGradient="linear(to-t,teal.600, teal.400);"
      >
        <NavInfoOnly />
        <PeopleTemplate />
      </Box>
    </>
  );
};
export default People;
