import { Box, Center, Heading, Stack, Button } from "@chakra-ui/react";
import {  useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const BudgetTemplate = () => {
  const [balance, setGetBalance] = useState("0");
  const [invest, setInvest] = useState("0");
  const comEth = useContext(ComEthContext);

  const handleBalance = async () => {
    
    try {
      let balances = await comEth.getBalance();
      setGetBalance(balances.toString());
      console.log("ok", balances.toString())
    } catch (e) {
      console.log(e);
    }
  };
  const handleInvest = async () => {
    setInvest(invest);
    try {
      let invests = await comEth.getInvestmentBalance(comEth.address);
      setInvest(invests.toString());
      console.log("ok", invests.toString())
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Center>
        <Heading
          ml={{ md: "6rem" }}
          mt={{ base: "2rem", sm: "1rem", lg: "2rem" }}
          textAlign="center"
          fontSize="4xl"
          w={{ sm: "70%" }}
          fontFamily="mono"
        >
          Les budgets de votre ComEth
        </Heading>
      </Center>
      <Box
        boxShadow="lg"
        ml={{ base: "1rem", sm: "1rem", md: "14rem", lg: "24rem" }}
        mr={{ base: "1rem", sm: "1rem" }}
        p="2rem"
        mt={{ base: "1rem", sm: "2rem", md: "2rem", lg: "2rem" }}
        rounded="md"
        backgroundColor="blackAlpha.200"
        w={{ md: "55%", lg: "45%", xl: "30%" }}
      >
        <Box
          boxShadow="inner"
          textAlign="center"
          fontWeight="bold"
          backgroundColor="#2ac9c7"
          p="1rem"
          mb="2rem"
          rounded="lg"
        >
          Définir les budget alloué - à venir - totaux
        </Box>
        <Stack direction="row">
        <Box
          boxShadow="inner"
          
          fontWeight="bold"
          fontSize={{base:"sm",sm:"md"}}
          backgroundColor="teal.400"
          w={{sm:"80%", lg:"90%"}}
          p="0.5rem"
          mb="2rem"
          rounded="lg"
        >
            Pot Commun : {balance / 10**18} ETH
        </Box>
        <Button
        onClick={handleBalance}
                backgroundColor="whiteAlpha.300"
                _hover={{ bg: "#21bdbf" }}
                fontSize={{base:"sm",sm:"md"}}
                m="10rem"
              >
                Chercher
              </Button>
        </Stack>
        <Stack direction="row">
        <Box
          boxShadow="inner"
          
          fontWeight="bold"
          fontSize={{base:"sm",sm:"md"}}
          backgroundColor="teal.400"
          w={{sm:"80%", lg:"90%"}}
          p="0.5rem"
          rounded="lg"
          s
        >
          Investissement personnel : {invest / 10**18} ETH
        </Box>
        <Button
        onClick={handleInvest}
                backgroundColor="whiteAlpha.300"
                fontSize={{base:"sm",sm:"md"}}
                _hover={{ bg: "#21bdbf" }}
              >
                Chercher
              </Button>
      </Stack>
      </Box>
    </>
  );
};
export default BudgetTemplate;
