import React from 'react';
import {  Circle} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const ProposButton = () => {
    return (
        <>
            <Link to="/proposition">
            <Circle as="button" fontWeight="bold" backgroundColor="whiteAlpha.700" w="85%" m="5%" padding="3%">Propositions</Circle>
            </Link>
        </>
    );
};

export default ProposButton;