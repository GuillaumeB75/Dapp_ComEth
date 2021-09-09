import { Box, Center, Heading } from "@chakra-ui/react";
import {  useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";


const BudgetTemplate = () => {
  const [balance, setGetBalance]= useState("0")
  const [invest, setInvest] = useState("0")
  const comEth = useContext(ComEthContext);

  const handleBalance = async () =>{
    setGetBalance(balance)
    try{
      let balances = await comEth.getBalance()
      setGetBalance(balances)
    }catch(e){
      console.log(e)
    }
  }
  const handleInvest = async () => {
    setInvest(invest)
    try{
      let invests = await comEth.getInvestmentBalance()
      setInvest(invests)
    }catch(e){
      console.log(e)
    }
  }
  return (
    <>
      <Center>
      <Heading  ml={{sm:"6rem"}} textAlign="center" fontSize="4xl" fontFamily="fantasy">Les budgets de votre ComEth</Heading>
      </Center>
      <Box boxShadow="lg" ml={{sm:"9rem", md:"16rem",lg:"26rem"}} mr={{sm:"1rem"}} p="2rem" mt={{sm:"8rem"}} rounded="md" backgroundColor="blackAlpha.200" w={{md:"60%",lg:"40%"}}>
      <Box boxShadow="inner" textAlign="center" fontWeight="bold" backgroundColor="teal.400" p="1rem" mb="2rem" rounded="lg">Définir les budget alloué - à venir - totaux</Box>
      <Box boxShadow="inner" onChange={handleBalance} fontWeight="bold" backgroundColor="teal.400" p="3%" mb="2rem" rounded="lg">Get Balance getBalance : {balance}</Box>
      <Box boxShadow="inner" onChange={handleInvest} fontWeight="bold" backgroundColor="teal.400" p="3%" rounded="lg"s>getInvestmentBalance :  {invest}</Box>
      </Box>
      
    </>
  );
};
export default BudgetTemplate;
