import { Center, Heading } from "@chakra-ui/react";

import SubmitProposalForm from "../organisms/SubmitProposalForm";

const PropositionTemplate = () => {
  return (
    <>
      <Center>
      <Heading  mt={{base:"2rem", sm:"1rem",lg:"6rem"}} ml={{sm:"0.5rem"}} textAlign="center" fontSize="4xl" fontFamily="mono">Make Propositions</Heading>
      </Center>
      <SubmitProposalForm />
    </>
  );
};
export default PropositionTemplate;
