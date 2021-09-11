import React, {  useContext} from "react";
import { Box, SimpleGrid, Circle, Center} from "@chakra-ui/react";
import InfoButton from "../atoms/InfoButton";
import ProposButton from "../atoms/ProposButton";
import VoteButton from "../atoms/VoteButton";
import { ComEthContext } from "../../context/ComEthContext";

const HomeBody = () => {
  const comEth = useContext(ComEthContext);

  const handleAddUser = async () => {
    try {
         await comEth.addUser()
        
        console.log("you have been add !")
    } catch(e){
      console.log(e.error)
    }
  }
  const handlePay = async () => {
    try {
       await comEth.pay()
       console.log("you have been pay !")
    }catch(e){
 console.log(e.error)
    }
  }
  return (
    <>
    <Center>
    <Circle onClick={handleAddUser} backgroundColor="red" w="25%"> Se rajouter dans la ComEth/Circle</Circle>
      <Circle onClick={handlePay} w="20%" backgroundColor="green"> Se mettre à jour</Circle>
      </Center>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing="40px" mr={{base:"1rem",sm:"3rem"}} mt="4rem" ml={{base:"1rem", sm:"3rem", md:"10rem", lg:"12rem"}}>
        <Box rounded="md" textAlign="center" p="2rem" backgroundColor="blackAlpha.200" height={{sm:"20rem", md:"22rem", lg:"28rem"}}>
          <Box fontWeight="bold" boxShadow="inner" p="0.5rem" rounded="md" backgroundColor="teal.400" mb={{sm:"9rem", md:"9rem", lg:"17rem"}}>
           Venez voter les propositions déjà suggérer par votre groupe ComEth
           </Box>
          <VoteButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height={{ sm: "20rem", md: "22rem", lg: "28rem" }}
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ sm: "9rem", md: "9rem", lg: "17rem" }}
          >
            Soumettez vos propres propositions à faire voter à votre groupe
          </Box>{" "}
          <ProposButton />
        </Box>
        <Box
          rounded="md"
          textAlign="center"
          p="2rem"
          backgroundColor="blackAlpha.200"
          height={{ sm: "20rem", md: "22rem", lg: "28rem" }}
        >
          <Box
            fontWeight="bold"
            boxShadow="inner"
            p="0.5rem"
            rounded="md"
            backgroundColor="teal.400"
            mb={{ sm: "9rem", md: "9rem", lg: "17rem" }}
          >
            Retrouvez vos informations, statistique, proposition déjà voter ici
          </Box>
          <InfoButton />
        </Box>
      </SimpleGrid>
    </>
  )
};
export default HomeBody;
