import React from "react";
import { Center, Box, Heading } from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";

const MainHeader = () => {
    return (
        <>
            <Box ml="3rem" right="0" left="0" w="100%" backgroundColor="teal.400" >
                <Center>
                    <Heading marginBottom="2rem">Main ComEth Header</Heading>
                </Center>
                <ToggleModeDark />
            </Box>
        </>
    );
};

export default MainHeader;
