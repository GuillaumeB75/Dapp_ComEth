import { Box, Center, Heading, Circle, Input, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const StatsTemplate = () => {
  const [id, setId] = useState(0);

  const [proposal, setProposal] = useState({
    nbYes: 0,
    nbNo: 0,
    statuVote: "",
    createdAt: "",
    autor: "",
    title: "",
    receiver: "",
    amount: 0,
  });
  const comEth = useContext(ComEthContext);

  const handleOnChangeId = (e) => {
    try {
      setId(e.target.value);
    } catch (e) {
      console.log(e.error);
    }
  };

  const handleOnClickProposal = async () => {
    setProposal(proposal);
    try {
      let ide = await comEth.proposalById(id);
      const pr = ide.toString().split(",");
      console.log("ESSAIE ESSAIE ", proposal.statuVote);
      setProposal({
        ...proposal,
        nbYes: pr[0],
        nbNo: pr[1],
        statuVote: Number(pr[2]),
        createdAt: pr[3],
        autor: pr[4],
        title: pr[5],
        receiver: pr[6],
        amount: pr[7],
      });
      return pr;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "1rem", lg: "2rem" }}
          ml={{ md: "6rem" }}
          fontSize="4xl"
          textAlign="center"
          fontFamily="mono"
        >
          Vos stats ComEth
        </Heading>
      </Center>
      <Box
        backgroundColor="blackAlpha.200"
        ml={{ base: "1rem", sm: "2rem", md: "12rem", lg: "16rem" }}
        mr={{ base: "1rem", sm: "2rem" }}
        rounded="md"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        p="2rem"
        width={{ sm: "90%", md: "75%", lg: "50%" }}
        maxW="35rem"
        h="55%"
      >
        <Center>
          <Box
            p="7%"
            rounded="md"
            backgroundColor="#2ac9c7"
            fontWeight="bold"
            textAlign="center"
          >
            Dernière proposition voter/ou à voter
          </Box>
        </Center>
        <Box fontWeight="bold" textAlign="center" m="3%">
          Rechercher avec l'id de la proposition
        </Box>
        <Center>
          <Box mr="1rem" ml="1.5rem">
            ID
          </Box>
          <Input
            w="40%"
            onChange={handleOnChangeId}
            mr="1rem"
            placeholder="0"
          ></Input>
          <Circle
            backgroundColor="whiteAlpha.200"
            fontWeight="bold"
            p="0.5rem"
            w="40%"
            onClick={handleOnClickProposal}
            _hover={{ bg: "#21bdbf" }}
          >
            Rechercher
          </Circle>
        </Center>
        {proposal.statuVote === 0 ? (<>
        <HStack column="row"  mt="1rem">
          <Circle p="2%" mt="2%" w="2%" backgroundColor="orange"></Circle> <Box>Proposition toujours en cours de vote</Box>
          </HStack>
        </>) : proposal.statuVote === 1 ? (<>
          <HStack column="row" mt="1rem">
          <Circle p="2%" mt="2%" w="2%" backgroundColor="green"></Circle> <Box>Proposition voté et valider</Box>
          </HStack>
          </>) : (<>
            <HStack column="row"  mt="1rem">
          <Circle p="2%" mt="2%" w="2%" backgroundColor="red"></Circle> <Box>Proposition voté et refusé</Box>
          </HStack>
          </>)}
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          title : {proposal.title}
        </Box>
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          createdAt : {proposal.createdAt}
        </Box>
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          author : {proposal.autor}
        </Box>
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          paiment receiver : {proposal.receiver}
        </Box>
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          amount : {proposal.amount / 10 ** 18} ETH
        </Box>
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          nombre de votes validant : {proposal.nbYes}
        </Box>
        <Box
          p="1%"
          mt="2rem"
          ml={{ md: "2rem" }}
          backgroundColor="teal.400"
          rounded="lg"
          fontWeight="bold"
          mb="6%"
        >
          nombre de votes refusant : {proposal.nbNo}
        </Box>
      </Box>
    </>
  );
};
export default StatsTemplate;
