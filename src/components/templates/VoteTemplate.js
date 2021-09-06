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
      <Heading marginBottom="2rem">Just Vote</Heading>
      </Center>
      <Center>
        <Box boxShadow="dark-lg" w="40rem" rounded="lg">
        <FormControl id="country" w="32rem" margin="2rem">
          <FormLabel fontWeight="bold" margin="1rem">Que diriez-vous d'une salle de sport ?</FormLabel>
          <Select boxShadow="lg" margin="1rem" placeholder="Selectionnez votre réponse">
            <option>Oui</option>
            <option>Non</option>
            <option>Blanc</option>
          </Select>
          <Button boxShadow="lg" margin="2rem">Voter</Button>
        </FormControl>
        </Box>
      </Center>
    </>
  );
};
export default VoteTemplate;
