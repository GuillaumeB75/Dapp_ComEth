import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const BudgetButton = () => {
  return (
    <>
      <Link to="/budget">
        <Button boxShadow="dark-lg" margin="0.5rem">
          Budget
        </Button>
      </Link>
    </>
  );
};

export default BudgetButton;
