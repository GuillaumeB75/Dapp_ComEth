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
        <Heading marginBottom="2rem" ml={{sm:"6rem"}}>Just Vote</Heading>
      </Center>
      <Center>
        <Box
          mt={{ sm: "4rem", md: "6rem", lg: "9rem" }}
          ml={{ sm: "8rem", md: "9rem" }}
          boxShadow="lg"
          w={{sm:"24rem",lg:"40rem"}}
          backgroundColor="blackAlpha.200"
        >
          <FormControl id="country" w="32rem" margin="2rem">
            <FormLabel fontWeight="bold" margin="1rem">
              Que diriez-vous d'une salle de sport ?
            </FormLabel>
            <Select
              boxShadow="lg"
              margin="1rem"
              w={{sm:"60%", md:"59%", lg:"80%"}}
              placeholder="Selectionnez votre réponse"
            >
              <option>Oui</option>
              <option>Non</option>
              <option>Blanc</option>
            </Select>
            <Button boxShadow="lg" margin="2rem">
              Voter
            </Button>
          </FormControl>
        </Box>
      </Center>
    </>
  );
};
export default VoteTemplate;
