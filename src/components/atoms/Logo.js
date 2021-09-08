import { Circle, Center } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Center>
        <Circle  fontWeight="bold" backgroundColor="whiteAlpha.200" w="5rem" h="5rem" textColor="whiteAlpha.400">
          <Link to="/home">Logo</Link>
        </Circle>
      </Center>
    </>
  );
};

export default Logo;
