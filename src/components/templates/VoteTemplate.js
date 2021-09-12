import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Select,
  //useToast,
} from "@chakra-ui/react";
//import { ComEthContext } from "../../context/ComEthContext";
//import { useContext } from "react";
//import { Web3Context } from "web3-hooks";

const VoteTemplate = () => {
  //const [web3State] = useContext(Web3Context);
  //const comEth = useContext(ComEthContext);

  //const toast = useToast();

  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "1rem", lg: "6rem" }}
          ml={{ sm: "1rem" }}
          fontSize="4xl"
          fontFamily="mono"
        >
          Just Vote
        </Heading>
      </Center>
      <Center>
        <Box
          mt={{ base: "4rem", sm: "4rem", md: "6rem", lg: "9rem" }}
          ml={{ sm: "0rem", md: "4rem" }}
          boxShadow="lg"
          w={{ base: "20rem", sm: "30rem", lg: "40rem" }}
          backgroundColor="blackAlpha.200"
        >
          <FormControl
            w={{ base: "17rem", sm: "32rem" }}
            margin="2rem"
            position="static"
          >
            <FormLabel fontWeight="bold" margin="1rem">
              Que diriez-vous d'une salle de sport ?
            </FormLabel>
            <Select
              boxShadow="lg"
              margin="1rem"
              fontSize={{ base: "15px" }}
              w={{ sm: "60%", md: "59%", lg: "80%" }}
              placeholder="Selectionnez votre réponse"
            >
              <option>Oui</option>
              <option>Non</option>
              <option>Blanc</option>
            </Select>
            <Button boxShadow="lg" margin="2rem" _hover={{ bg: "#21bdbf" }}>
              Voter
            </Button>
          </FormControl>
        </Box>
      </Center>
    </>
  );
};
export default VoteTemplate;
