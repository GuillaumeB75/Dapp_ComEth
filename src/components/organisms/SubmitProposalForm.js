import { Box, Button, Center, Input, Select } from "@chakra-ui/react";
import React from "react";
//import { ComEthContext } from "../../App";
import { /*useContext,*/ useEffect, useState } from "react";
//import { Web3Context } from "web3-hooks";

const SubmitProposalForm = () => {
  //   const [web3State] = useContext(Web3Context);
  //   const comEth = useContext(ComEthContext);
  const [optionVote, setOptionVote] = useState([""]);

  const [proposition, setProposition] = useState({
    voteOption: optionVote,
    title: "",
    timeLimit: 0,
    target: "",
    sum: 0,
  });
  //const [nbOptions, setNbOptions] = useState(1);

  //const toast = useToast();

  const handleChangeProposition = (e) => {
    try {
      setProposition({ ...proposition, title: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeOptions = (e) => {
    handleChangeVoteOption(e);
    try {
      setProposition({ ...proposition, options: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChangeTimeLimit = (e) => {
    try {
      setProposition({ ...proposition, timeLimit: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeAddressReceive = (e) => {
    try {
      setProposition({ ...proposition, target: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleChangeAmount = (e) => {
    try {
      setProposition({ ...proposition, sum: e.target.value });
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmitAll = async () => {
    try {
    } catch (e) {}
  };
  const handleClickAddOption = () => {
    setOptionVote(optionVote.push(""));
    //setNbOptions(nbOptions + 1);
  };
  const handleChangeVoteOption = (e) => {
    let tmp = [...optionVote];
    tmp[e.key] = e.target.value;
    setOptionVote(tmp);
  };
  const handleClickSubOption = () => {
    if (optionVote.length > 1) {
      setOptionVote(optionVote.pop());
    }
  };
  useEffect(() => {
    console.log(proposition);
  }, [proposition]);
  return (
    <>
      <Center>
        <Box boxShadow="dark-lg" w="45rem" h="100%" rounded="lg">
          <Box>Titre de proposition proposition</Box>
          <Input
            onChange={handleChangeProposition}
            boxShadow="lg"
            w="32rem"
            placeholder="Salle de sport ?"
            margin="1rem"
          />

          <Box>Vos Options de Vote - propositions</Box>
       
        
          <Input
          onChange={handleChangeOptions}
          boxShadow="lg"
          w="32rem"
          placeholder={`option`}
          margin="1rem"
        />
            <Button marginRight="1rem" onClick={handleClickAddOption}>
          +
        </Button>
        <Button onClick={handleClickSubOption}>-</Button> 
          

         
        <Input
          onChange={handleChangeOptions}
          boxShadow="lg"
          w="32rem"
          placeholder={`option`}
          margin="1rem"
        />
            <Button marginRight="1rem" onClick={handleClickAddOption}>
          +
        </Button>
        <Button onClick={handleClickSubOption}>-</Button> 
         
         
       

          <Box>Choisir votre limie de temps</Box>
          <Select
            onChange={handleChangeTimeLimit}
            boxShadow="lg"
            w="32rem"
            margin="1rem"
          >
            <option value="option1">1 semaine</option>
            <option value="option2">2 semaines</option>
            <option value="option3">3 semaines</option>
            <option value="option4">4 semaines</option>
          </Select>

          <Box>Paiement reveiver</Box>
          <Input
            onChange={handleChangeAddressReceive}
            boxShadow="lg"
            w="32rem"
            placeholder="Que diriez-vous d'une salle de sport ?"
            margin="1rem"
          />

          <Box>Amount</Box>
          <Input
            onChange={handleChangeAmount}
            boxShadow="lg"
            w="32rem"
            placeholder="Que diriez-vous d'une salle de sport ?"
            margin="1rem"
          />

          <Button onClick={handleSubmitAll}>Valider</Button>
        </Box>
      </Center>
    </>
  );
};

export default SubmitProposalForm;
