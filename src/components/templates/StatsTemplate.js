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
      <Box backgroundColor="whiteAlpha.200" ml="16rem" mt="4rem" p="2rem" width="30%" h="55%">
        <Center><Box p="3%" backgroundColor="blackAlpha.100" mb="6%">Dernière proposition voter/ou à voter</Box></Center>
        <Box onChange={handleProposal} mb="6%">option : {proposal.option}</Box>
        <Box onChange={handleProposal} mb={["3%", "6%"]}>title : {proposal.title}</Box>
        <Box onChange={handleProposal} mb={["3%", "6%",]}>time limite : {proposal.timeLimit}</Box>
        <Box onChange={handleProposal} mb={["3%", "6%",]}>paiment receiver : {proposal.receiver}</Box>
        <Box onChange={handleProposal} mb={["3%", "6%",]}>amount : {proposal.amount}</Box>
      </Box>
    </>
  );
};
export default StatsTemplate;
