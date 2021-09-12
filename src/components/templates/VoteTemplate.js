import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Heading,
  Select,
  Input,
  //useToast,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";
//import { useContext } from "react";
//import { Web3Context } from "web3-hooks";

const VoteTemplate = () => {
  //const [web3State] = useContext(Web3Context);
  const comEth = useContext(ComEthContext);
  const [id, setId] = useState("");
  const [proposal, setProposal] = useState({
    option: [],
    voteCount: 0,
    statuVote: "",
    createdAt: "",
    autor: "",
    title: "",
    receiver: "",
    amount: 0,
  });

  //const toast = useToast();
  const handleChangeId = (e) => {
    try
    {setId(e.target.value) 
    }
    
    catch(e){
      console.log(e.error)
    }
  }

  const handleClickSearchId = async () => {
    setProposal(proposal);
    console.log("ok",id,proposal)
    try {
      let ide = await comEth.proposalById(id);
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
    } catch (e) {
      console.log(e);
    }
  }

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
          ml="12rem"
          fontWeight="bold"
          mt={{ base: "4rem", sm: "4rem", md: "6rem", lg: "9rem" }}
        >
          {" "}
          ID de la proposition*
          <Input
            w="15%"
            onChange={handleChangeId}
            placeholder="1"
            ml="3rem"
            mr="1rem"
          ></Input>
          <Button onClick={handleClickSearchId}>chercher</Button>
        </Box>
      </Center>
      <Center>
        <Box
          mt={{ base: "1rem", sm: "2rem", md: "3rem", lg: "4rem" }}
          ml={{ sm: "0rem", md: "4rem" }}
          boxShadow="lg"
          w={{ base: "20rem", sm: "30rem", lg: "40rem" }}
          backgroundColor="blackAlpha.200"
        >
          <FormControl w={{ base: "17rem", sm: "32rem" }} margin="2rem">
            <FormLabel fontWeight="bold" margin="1rem">
            {proposal.title}
            </FormLabel>
            <Select
              boxShadow="lg"
              margin="1rem"
              fontSize={{ base: "15px" }}
              w={{ sm: "60%", md: "59%", lg: "80%" }}
              placeholder="Selectionnez votre réponse"
            >
              <option value={1}>Oui</option>
              <option value={1}>Non</option>
              <option value={1}>Blanc</option>
            </Select>
            <Box></Box>
            <Button boxShadow="lg" margin="2re" _hover={{ bg: "#21bdbf" }}>
              Voter
            </Button>
          </FormControl>
        </Box>
      </Center>
    </>
  );
};
export default VoteTemplate;
