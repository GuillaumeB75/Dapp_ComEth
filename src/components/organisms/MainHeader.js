import React from "react";
import {  Box, Stack,Spacer} from "@chakra-ui/react";
import Logo from "../atoms/Logo";
import MobilNav from "../atoms/MobilNav";

const MainHeader = () => {
    return (
        <>
            <Box pos="sticky" w="100%" backgroundColor="teal.400" >
                <Stack direction="row">
                <Logo />
                <Spacer/>
                <Box display={{base:"flex", sm:"flex", md:"none"}}>
                <MobilNav/>
                
                </Box>
                </Stack>
            </Box>
        </>
    );
};

export default MainHeader;
