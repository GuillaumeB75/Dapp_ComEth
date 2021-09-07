import { Link } from "react-router-dom";
import React from "react";
import { Box, Center, Heading } from "@chakra-ui/react";
import ToggleModeDark from "./ToggleModeDark";

const LandingHeader = () => {
    return (
        <>
        <Box right="0" left="0" w="100%" backgroundColor="blue.400"  boxShadow="dark-lg">
            <Box marginLeft="9rem">
            <Link to="/home">Logos</Link>
            </Box>
            <Center>
            <Heading marginBottom="2rem">Landing ComEth Header</Heading>
            </Center>
            <ToggleModeDark/>
            </Box>
        </>
    );
};

export default LandingHeader;
