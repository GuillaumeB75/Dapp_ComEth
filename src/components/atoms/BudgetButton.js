import React from 'react';
import {  Circle} from "@chakra-ui/react";
import {  Link } from "react-router-dom";

const BudgetButton = () => {
    return (
        <>
            <Link to="/budget">
                <Circle as="button" fontWeight="bold" backgroundColor="whiteAlpha.700" w="85%" m="2%" ml="5%" padding="3%">Budget</Circle>
            </Link>
        </>
    );
};

export default BudgetButton;
