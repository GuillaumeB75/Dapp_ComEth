import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import PeopleButton from "../atoms/PeopleButton";
import BudgetButton from "../atoms/BudgetButton";
import StatsButton from "../atoms/StatsButton";

const InformationBody = () => {
  return (
    <>
      <SimpleGrid
        columns={[1, 1, 2, 3]}
        spacing="40px"
        mr={{ base: "1rem", sm: "3rem" }}
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        ml={{ base: "1rem", sm: "3rem", md: "10rem", lg: "12rem" }}
      >
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height="90%"
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="#2ac9c7"
            mb={{ base: "25%", sm: "25%" }}
          >
            Ici se trouvent les propositions déjà votées ainsi que leurs paramètres.
          </Box>
          <StatsButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height="90%"
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="#2ac9c7"
            mb={{ base: "25%", sm: "25%" }}
          >
            Vous trouverez ici les budgets en cours dans votre communauté.
          </Box>{" "}
          <BudgetButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height="90%"
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="#2ac9c7"
            mb={{ base: "25%", sm: "25%" }}
          >
            Vous verrez ici qui est actif, qui est banni et qui fait partie de
            votre ComEth.
          </Box>
          <PeopleButton />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default InformationBody;
