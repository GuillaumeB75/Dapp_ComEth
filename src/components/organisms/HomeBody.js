import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";
import AddUserAndPay from "../atoms/AddUserAndPay";

const HomeBody = () => {

  return (
    <>
    <AddUserAndPay />
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" mr={{base:"1rem",sm:"3rem"}} mt="4rem" ml={{base:"1rem", sm:"3rem", md:"10rem", lg:"12rem"}}>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"28rem"}}>
          <Box fontWeight="bold" boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Venez voter les propositions déjà suggérer par votre groupe ComEth
           </Box>
          <VoteButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height={{ sm: "20rem", md: "22rem", lg: "28rem" }}
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ sm: "9rem", md: "9rem", lg: "17rem" }}
          >
            Soumettez vos propres propositions à faire voter à votre groupe
          </Box>{" "}
          <ProposButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height={{ sm: "20rem", md: "22rem", lg: "28rem" }}
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ sm: "9rem", md: "9rem", lg: "17rem" }}
          >
            Retrouvez vos informations, statistique, proposition déjà voter ici
          </Box>
          <InfoButton />
        </Box>
      </SimpleGrid>
    </>
  )
};
export default HomeBody;
