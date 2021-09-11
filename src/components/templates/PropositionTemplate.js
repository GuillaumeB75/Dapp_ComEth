import { Center, Heading } from "@chakra-ui/react";

import SubmitProposalForm from "../organisms/SubmitProposalForm";

const PropositionTemplate = () => {
  return (
    <>
      <Center>
      <Heading  mt={{base:"2rem", sm:"4rem",lg:"6rem"}} ml={{base:"0.8rem",sm:"0.7rem"}} mr="0.5.5rem" textAlign="center" fontSize="4xl" fontFamily="mono">Faites une proposition</Heading>
      </Center>
      <SubmitProposalForm />
    </>
  );
};
export default PropositionTemplate;
