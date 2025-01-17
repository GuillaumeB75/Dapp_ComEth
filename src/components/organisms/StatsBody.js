import { Box, Center, Circle, Input, HStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const StatsBody = () => {
  const [id, setId] = useState(0);

  const [proposal, setProposal] = useState({
    nbYes: 0,
    nbNo: 0,
    statuVote: null,
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
        <Box
          backgroundColor="blackAlpha.200"
          ml={{ base: "1rem", sm: "2rem" }}
          mr={{ base: "1rem", sm: "2rem" }}
          rounded="md"
          mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
          p="2rem"
          width={{ sm: "90%", md: "75%", lg: "90%" }}
          maxW={{ md: "35rem", lg: "40rem" }}
        >
          <Center>
            <Box
              p="7%"
              rounded="md"
              backgroundColor="#2ac9c7"
              fontWeight="bold"
              textAlign="center"
            >
              Dernière proposition votée /ou à voter
            </Box>
          </Center>
          <Box fontWeight="bold" textAlign="center" m="3%">
            Rechercher une proposition avec son ID
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
              position="static"
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
          {proposal.statuVote === 0 ? (
            <>
              <HStack column="row" position="static">
                <Circle
                  p="2%"
                  mt="2%"
                  mb="4%"
                  w="2%"
                  backgroundColor="orange"
                ></Circle>{" "}
                <Box mt="2%">Proposition toujours en cours de vote</Box>
              </HStack>
            </>
          ) : proposal.statuVote === 1 ? (
            <>
              <HStack column="row" position="static">
                <Circle
                  p="2%"
                  mt="2%"
                  mb="4%"
                  w="2%"
                  backgroundColor="green"
                ></Circle>{" "}
                <Box mt="2%">Proposition votée et validée</Box>
              </HStack>
            </>
          ) : proposal.statuVote === 2 ? (
            <>
              <HStack column="row" position="static">
                <Circle
                  p="2%"
                  mt="2%"
                  mb="4%"
                  w="2%"
                  backgroundColor="red"
                ></Circle>{" "}
                <Box mt="2%">Proposition votée et refusée</Box>
              </HStack>
            </>
          ) : (
            ""
          )}
          <Box
            p="1%"
            mt="4%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
            mb="2%"
          >
            Intitulé : {proposal.title}
          </Box>
          <Box
            p="1%"
            mt="1%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
            mb="2%"
          >
            Créée à : {proposal.createdAt}
          </Box>
          <Box
            p="1%"
            mt="1%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
            mb="2%"
          >
            Auteur : {proposal.autor}
          </Box>
          <Box
            p="1%"
            mt="1%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
            mb="2%"
          >
            Destinataire du paiement : {proposal.receiver}
          </Box>
          <Box
            p="1%"
            mt="1%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
            mb="2%"
          >
            Montant : {proposal.amount / 10 ** 18} ETH
          </Box>
          <Box
            p="1%"
            mt="1%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
            mb="2%"
          >
            Nombre de votes positifs : {proposal.nbYes}
          </Box>
          <Box
            p="1%"
            mt="1%"
            ml={{ md: "2rem" }}
            backgroundColor="teal.400"
            rounded="lg"
            fontWeight="bold"
          >
            Nombre de votes négatifs : {proposal.nbNo}
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default StatsBody;
