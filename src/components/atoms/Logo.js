import { Circle, Center } from "@chakra-ui/layout";
import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Center>
        <Circle  fontWeight="bold" backgroundColor="whiteAlpha.200" m="1rem" w="5rem" h="5rem" textColor="whiteAlpha.400" _selected={{bg:"#17d4c7"}} >
          <Link to="/home">Logo</Link>
        </Circle>
      </Center>
    </>
  );
};

export default Logo;
