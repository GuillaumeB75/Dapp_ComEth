import React from "react";
import { Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const BudgetButton = () => {
  return (
    <>
      <Link to="/budget">
        <Button
          
          backgroundColor="whiteAlpha.700"
          w="85%"
          m="3%"
          ml="7%"
          padding="3%"
          _hover={{ bg: "#21bdbf" }}
          _selected={{ bg: "#17d4c7" }}
        >
        <SearchIcon />
        </Button>
      </Link>
    </>
  );
};

export default BudgetButton;
