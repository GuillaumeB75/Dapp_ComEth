import { Box, Center, Circle, Heading, Input } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";


const PeopleTemplate = () => {
  const [active, setActive] = useState("")
  const [banned, setBanned] = useState("")
  const comEth = useContext(ComEthContext);

  const handlActive = async () => {
    setActive(active)
    try {
      let activity = await comEth.getIsActive(active)
      setActive(activity)
    } catch (e) {
      console.log(e.error)
    }
  }

  const handlebanned = async () => {
    setBanned(banned)
    try {
      let bannedOrNot = await comEth.getIsBanned(banned)
      setBanned(bannedOrNot)
    } catch (e) {
      console.log(e.error)
    }
  }

  return (
    <>
      <Center>
        <Heading ml={{ sm: "8rem" }} textAlign="center" fontSize="4xl" fontFamily="fantasy">Membre de ma ComEhnauté</Heading>
      </Center>
      
        <Box rounded="md" boxShadow="lg" mt={{sm:"8rem"}} ml={{sm:"9rem",md:"13rem",lg:"19rem"}} w={{sm:"65%",md:"58%", lg: "40%" }} backgroundColor="blackAlpha.200" p="1rem">
          <Box  mt="2rem">
            <Box m="2rem" ml={{ md: "1rem" }}>
              {active === true ? (<Circle w={{ sm: "57%", md: "41%", lg: "42%" }} backgroundColor="green" fontFamily="monospace" fontWeight="bold">you are active </Circle>) : (<Circle w={{ sm: "59%", md: "37%", lg: "40%" }} backgroundColor="red.600" fontFamily="monospace" fontWeight="bold">You'r not active</Circle>)}
              <Box  padding="1rem"  fontWeight="black"> Show how is active :</Box>
              <Center>
              <Input onChange={handlActive} backgroundColor="teal.600" value={active}></Input>
              <Circle></Circle>
              </Center>
            </Box>
            <Box m="2rem">
              {!banned === true ? (<Circle w={{ sm: "59%", md: "41%", lg: "44%" }} backgroundColor="green" fontFamily="monospace" fontWeight="bold">You'r not banned </Circle>) : (<Circle w={{ sm: "57%", md: "33%", lg: "40%" }} backgroundColor="red" fontFamily="monospace" fontWeight="bold">You are Banned</Circle>)}
              <Box value={banned} padding="1rem"  fontWeight="bold">Show how is banned :</Box>
              <Input onChange={handlebanned} backgroundColor="teal.600" value={banned}></Input>
            </Box>
          </Box>
        </Box>
      
    </>
  );
};
export default PeopleTemplate;
