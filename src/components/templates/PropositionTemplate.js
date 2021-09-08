import {  Center, Heading } from "@chakra-ui/react";

import SubmitProposalForm from "../organisms/SubmitProposalForm";

const PropositionTemplate = () => {

  return (
    <>

      <Center>
      <Heading ml={{ sm: "8rem" }} textAlign="center" fontSize="4xl" fontFamily="fantasy">Make Propositions</Heading>
      </Center>
      <SubmitProposalForm />
    </>
  );
};
export default PropositionTemplate;
