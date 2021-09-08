import React from "react";
import { Box, Center} from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";
import Logo from "../atoms/Logo";

const LandingHeader = () => {
    return (
        <>
        <Box right="0" left="0" w="100%" backgroundColor="blue.400"  boxShadow="dark-lg">
            <Box  pos="absolute" left="2" top="2">
            <Logo />
            </Box>
            <Center>
            </Center>
            <ToggleModeDark/>
            </Box>
        </>
    );
};

export default LandingHeader;
