import { Box, Center, Heading, Circle} from "@chakra-ui/react";
import { useContext,  useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const StatsTemplate = () => {

  const [proposal, setProposal] = useState({
    option: [],
    voteCount:0,
    statuVote: "",
    createdAt: "",
    autor: "",
    title: "",
    receiver: "",
    amount: 0,
  });
  const comEth = useContext(ComEthContext);

  const handleProposal = async () => {
    setProposal(proposal);
    try {
      let ide = await comEth.getProposalsList();
      const pr = ide.toString().split(',')
      
      setProposal({...proposal, 
      option : pr[0], 
      voteCount :  pr[1],
      statuVote : pr[2],
      createdAt: pr[3],
      autor : pr[4], 
      title: pr[5], 
      receiver : pr[6],
      amount: pr[7]})
      //console.log(propositions)

      
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Center>
        <Heading  mt={{base:"2rem", sm:"1rem",lg:"6rem"}} ml={{md:"6rem"}} fontSize="4xl" textAlign="center" fontFamily="mono">Vos stats ComEth</Heading>
      </Center>
      <Box backgroundColor="blackAlpha.200" ml={{base:"1rem",sm:"2rem",md:"12rem",lg:"16rem"}} mr={{base:"1rem", sm:"2rem"}} rounded="md" mt={{base:"2rem",sm:"4rem"}} p="2rem" width={{sm:"90%",md:"75%",lg:"50%"}} maxW="35rem" h="55%">
        <Center><Box p="7%" rounded="md" backgroundColor="#2ac9c7" mb="6%" fontWeight="bold" textAlign="center">Dernière proposition voter/ou à voter</Box></Center>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold"  mb="6%">option : {proposal.option}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" mb="6%">Vote count : {proposal.voteCount}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" mb="6%">createdAt : {proposal.createdAt}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" mb="6%">author : {proposal.autor}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" mb="6%">title : {proposal.title}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold" mb="6%">paiment receiver : {proposal.receiver}</Box>
        <Box p="1%" mt="2rem" ml={{md:"2rem"}} backgroundColor="teal.400" rounded="lg" fontWeight="bold"mb="6%">amount : {proposal.amount}</Box>
        <Center>
          <Circle backgroundColor="whiteAlpha.200" fontWeight="bold" p="1rem" w="40%" onClick={handleProposal} _hover= {{bg:"#21bdbf"}}>Rechercher</Circle>
        </Center>
      </Box>
    </>
  );
};
export default StatsTemplate;

