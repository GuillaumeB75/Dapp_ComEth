import { Box, SimpleGrid} from "@chakra-ui/react";
import React from "react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";

const HomeBody = () => {
  return (
    <>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" mr="2rem" mt="4rem" ml={{sm:"9rem", md:"10rem", lg:"12rem"}}>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
          <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Participez ici aux votes soumis par les membres de votre communauté.
           </Box>
          <VoteButton />
        </Box>
        <Box rounded="md"  textAlign="center" p="2rem"  backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
        <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
          Soumettez ici vos propositions de votes aux membres de votre communauté.
          </Box> <ProposButton />
        </Box>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"29rem"}}>
        <Box boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
          Retrouvez ici vos informations, statistiques et propositions de votes passées.
          </Box>
          <InfoButton />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default HomeBody;
