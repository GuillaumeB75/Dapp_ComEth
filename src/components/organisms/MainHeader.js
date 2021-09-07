import React from "react";
import { Center, Box, Heading } from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";
import Logo from "../atoms/Logo";

const MainHeader = () => {
    return (
        <>
            <Box  right="0" left="0" w="100%" backgroundColor="teal.400" >
                <Box marginRight="113rem">
                <Logo />
                </Box>
                <Center>
                    <Heading marginBottom="2rem">Main ComEth Header</Heading>
                </Center>
                <ToggleModeDark />
            </Box>
        </>
    );
};

export default MainHeader;
