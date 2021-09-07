import { Box, Center, Heading } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

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
<<<<<<< HEAD
      <Box boxShadow="dark-lg" backgroundColor="whiteAlpha.200" ml="16rem" mt="4rem" p="2rem" width="30%" h="55%">
        <Center><Box p="3%" backgroundColor="blackAlpha.100" mb="6%">Dernière proposition voter/ou à voter</Box></Center>
=======
      <Box backgroundColor="blackAlpha.200" ml="16rem" rounded="md" mt="4rem" p="2rem" width="30%" h="55%">
        <Center><Box p="3%" rounded="md" backgroundColor="teal.400" mb="6%">Dernière proposition voter/ou à voter</Box></Center>
>>>>>>> 143457ccd961fc357d94175f178aa28549cdb665
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
