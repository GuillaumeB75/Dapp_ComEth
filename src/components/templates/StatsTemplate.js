import { Box, Center, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../App";

const StatsTemplate = () => {
  const [proposal, setProposal] = useState({
    option: [],
    title: "",
    timeLimit: 0,
    receiver: "",
    amount: 0,
  });
  const comEth = useContext(ComEthContext);

  const handleProposal = async () => {
    setProposal(proposal);
    try {
      let ide = await comEth.getProposalsList();
      setProposal(ide);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Center>
        <Heading>View Stats</Heading>
      </Center>
      <Box rounded="100" ml="17rem" mt="4rem" p="2rem" w="30%" border="1px">
        <Box> Statistique a avoir : (faire une liste)</Box>
        <Box onChange={handleProposal} padding="1rem">
          getProposalsList :{" "}
        </Box>
        <Box>option : {proposal.option}</Box>
        <Box>title : {proposal.title}</Box>
        <Box>time limite : {proposal.timeLimit}</Box>
        <Box>paiment receiver : {proposal.receiver}</Box>
        <Box>amount : {proposal.amount}</Box>
      </Box>
    </>
  );
};
export default StatsTemplate;
