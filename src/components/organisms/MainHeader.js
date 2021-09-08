import React from "react";
import {  Box} from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";
import Logo from "../atoms/Logo";

const MainHeader = () => {
    return (
        <>
            <Box  right="0" left="0" w="100%" backgroundColor="teal.400" >
                <Box  pos="sticky" marginRight="113rem">
                <Logo />
                </Box>
                <ToggleModeDark />
            </Box>
        </>
    );
};

export default MainHeader;
