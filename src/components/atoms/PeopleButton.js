import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const PeopleButton = () => {
  return (
    <>
      <Link to="/people">
        <Button boxShadow="dark-lg" margin="0.5rem">
          People
        </Button>
      </Link>
    </>
  );
};

export default PeopleButton;
