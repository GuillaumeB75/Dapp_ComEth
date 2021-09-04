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
};

export default ToggleModeDark;
