import { Box, Center, Circle, Heading, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";


const PeopleTemplate = () => {
  const [active, setActive] = useState("")
  const  [banned, setBanned] = useState("")
  const comEth = useContext(ComEthContext);

  const handlActive = async () => {
    setActive(active)
    try{
        let activity =  await comEth.getIsActive(active)
        setActive(activity)
    }catch(e){
      console.log(e.error)
    }
  }

  const handlebanned = async  () =>{
    setBanned(banned)
    try {
      let bannedOrNot = await comEth.getIsBanned(banned)
      setBanned(bannedOrNot)
    }catch(e){
      console.log(e.error)
    }
  }

  return (
    <>
      <Center>
      <Heading>View People</Heading>
      </Center>
      <Box pl="12rem" pt="2rem">
      <Box>qui est dans ma cometh</Box>
      <Box p="2rem">
      {active===true ? (<Circle w="15%" backgroundColor="green">you are active </Circle>) : (<Circle w="15%" backgroundColor="red">you'r not active</Circle>)}
      <Box>Show how is active :</Box>
      <Input onChange={handlActive} w="60%" value={active}></Input>
      </Box>
      <Box p="2rem">
      {!banned===true ? (<Circle w="15%" backgroundColor="green">You'r not banned </Circle>) : (<Circle w="15%" backgroundColor="red">You are Banned</Circle>)}
      <Box value={banned} padding="1rem">Show how is banned :</Box>
      <Input onChange={handlebanned} w="60%" value={banned}></Input>
      </Box>
      </Box>
    </>
  );
};
export default PeopleTemplate;
