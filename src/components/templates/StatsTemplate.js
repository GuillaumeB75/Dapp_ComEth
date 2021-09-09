import { Box, Center, Heading, Circle } from "@chakra-ui/react";
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
        <Heading  mt={{sm:"5rem",lg:"8rem"}} ml={{sm:"6rem"}} fontSize="4xl" fontFamily="fantasy">Vos stats ComEth</Heading>
      </Center>
      <Box backgroundColor="blackAlpha.200" ml={{sm:"9rem",md:"12rem",lg:"16rem"}} mr={{sm:"1rem"}} rounded="md" mt="4rem" p="2rem" width={{sm:"70%",md:"45%",lg:"30%"}} h="55%">
        <Center><Box p="7%" rounded="md" backgroundColor="#2ac9c7" mb="6%" fontWeight="bold" textAlign="center">Dernière proposition voter/ou à voter</Box></Center>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" onChange={handleProposal} mb="6%">option : {proposal.option}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" onChange={handleProposal} mb="6%">title : {proposal.title}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" onChange={handleProposal} mb="6%">time limite : {proposal.timeLimit}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" onChange={handleProposal} mb="6%">paiment receiver : {proposal.receiver}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" onChange={handleProposal} mb="6%">amount : {proposal.amount}</Box>
        <Center>
          <Circle backgroundColor="whiteAlpha.200" fontWeight="bold" p="1rem" w="40%" _hover= {{bg:"#21bdbf"}}>Voter</Circle>
        </Center>
      </Box>
    </>
  );
};
export default StatsTemplate;
