<<<<<<< HEAD
import { Button, useColorMode } from "@chakra-ui/react";
import React from "react";

const ToggleModeDark = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button
        boxShadow="dark-lg"
        onClick={toggleColorMode}
        pos="absolute"
        top="2"
        right="2"
      >
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </>
  );
=======
import { Circle, useColorMode } from '@chakra-ui/react';
import React from 'react';

const ToggleModeDark = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
        <>
            <Circle as="button" fontWeight="black" p="0.5rem" backgroundColor="blackAlpha.400" boxShadow="lg" onClick={toggleColorMode} pos="absolute" top="2" right="2">{colorMode === "light" ? "Dark" : "Light"}</Circle>
        </>
    );
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014
};

export default ToggleModeDark;
