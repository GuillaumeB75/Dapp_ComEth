import { Box, Center, Heading } from "@chakra-ui/react";
import {  useContext, useState } from "react";
import {  ComEthContext } from "../../App";


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
      <Heading>View Budget</Heading>
      </Center>
      <Box pl="12rem" pt="2rem">
      <Box>définir les budget alloué - a venir - totaux</Box>
      <Box onChange={handleBalance} padding="1rem">Get Balance getBalance : {balance}</Box>
      <Box onChange={handleInvest}>getInvestmentBalance :  {invest}</Box>
      </Box>
    </>
  );
};
export default BudgetTemplate;
