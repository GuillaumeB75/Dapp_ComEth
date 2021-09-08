import { Box, Circle, Center, FormControl, FormLabel, Input, Select, toast } from "@chakra-ui/react";
import React from "react";
import { ComEthContext } from "../../context/ComEthContext";
import { useContext, useEffect, useState } from "react";
//import { Web3Context } from "web3-hooks";

const SubmitProposalForm = () => {
  //   const [web3State] = useContext(Web3Context);
    const comEth = useContext(ComEthContext);
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
      //fonction ComEth submitProposal a remplir grace au form
      const {voteOption, title, timeLimit, target, sum} = proposition
      let props = await comEth.submitProposal(voteOption, title, timeLimit, target, sum)
      console.log(comEth.address)
      await props.wait()
      toast({
        title: "Proposition send",
        description: `Your proposition : ${props}`, // hash de la transac
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const handleChangeVoteOption = (e) => {
    let tmp = [...optionVote];
    tmp[e.key] = e.target.value;
    setOptionVote(tmp);
  };

  useEffect(() => {
    console.log(proposition);
  }, [proposition]);
  return (
    <>
      <Center>
        <FormControl boxShadow="lg" backgroundColor="blackAlpha.200" padding="2rem" w={{sm:"68%" ,md:"43rem",lg:"45rem"}} ml={{sm:"8rem", md:"9rem"}} mt="2rem">
          <FormLabel isRequired>Renseignez votre proposition de vote :</FormLabel>
          <Input
            onChange={handleChangeProposition}
            size="sm"
            boxShadow="lg"
            w={{sm:"99%" ,md:"32rem"}}
            placeholder="Salle de sport ?"
            margin="1rem"
          />

          <Box>Options liées à votre proposition de vote :</Box>

          <Input
            onChange={handleChangeOptions}
            size="sm"
            boxShadow="lg"
            w={{sm:"99%" ,md:"32rem"}}
            placeholder={`option`}
            margin="1rem"
          />

          <FormLabel p="-0">Combien de temps votre proposition de vote doit rester active : </FormLabel>
          <Select
            onChange={handleChangeTimeLimit}
            size="sm"
            boxShadow="lg"
            w={{sm:"99%" ,md:"32rem"}}
            margin="1rem"
          >
            <option value="option1">1 semaine</option>
            <option value="option2">2 semaines</option>
            <option value="option3">3 semaines</option>
            <option value="option4">4 semaines</option>
          </Select>

          <FormLabel>Renseignez le montant que vous soumettez au vote :</FormLabel>
          <Input
            onChange={handleChangeAmount}
            size="sm"
            boxShadow="lg"
            w={{sm:"99%" ,md:"32rem"}}
            placeholder="0,75"
            margin="1rem"
          />
          <FormLabel>Adresse à laquelle les fonds seront versés après un vote positif :</FormLabel>
          <Input
            onChange={handleChangeAddressReceive}
            size="sm"
            boxShadow="lg"
            w={{sm:"99%" ,md:"32rem"}}
            placeholder="0x00...."
            margin="1rem"
          />
          <Center>
          <Circle as="button" backgroundColor="whiteAlpha.400" p="1rem" m="0.5rem" onClick={handleSubmitAll}>Valider</Circle>
          </Center>
        </FormControl>
      </Center>
    </>
  );
};

export default SubmitProposalForm;
