import { Box, Center, Heading, Stack, Button } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const BudgetTemplate = () => {
  const [balance, setGetBalance] = useState("0");
  const [invest, setInvest] = useState("0");
  const comEth = useContext(ComEthContext);

  const handleBalance = async () => {
    setGetBalance(balance);
    try {
      let balances = await comEth.getBalance();
      setGetBalance(balances);
    } catch (e) {
      console.log(e);
    }
  };
  const handleInvest = async () => {
    setInvest(invest);
    try {
      let invests = await comEth.getInvestmentBalance();
      setInvest(invests);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Center>
        <Heading
          ml={{ sm: "6rem" }}
          mt={{ sm: "5rem", lg: "8rem" }}
          textAlign="center"
          fontSize="4xl"
          w={{ sm: "70%" }}
          fontFamily="fantasy"
        >
          Les budgets de votre ComEth
        </Heading>
      </Center>
      <Box
        boxShadow="lg"
        ml={{ sm: "9rem", md: "16rem", lg: "26rem" }}
        mr={{ sm: "1rem" }}
        p="2rem"
        mt={{ sm: "8rem" }}
        rounded="md"
        backgroundColor="blackAlpha.200"
        w={{ md: "60%", lg: "40%" }}
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
          onChange={handleBalance}
          fontWeight="bold"
          backgroundColor="teal.400"
          w={{sm:"80%", lg:"90%"}}
          p="0.5rem"
          mb="2rem"
          rounded="lg"
        >
          Get Balance getBalance : {balance}
        </Box>
        <Button
                backgroundColor="whiteAlpha.300"
                _hover={{ bg: "#21bdbf" }}
                m="10rem"
              >
                Chercher
              </Button>
        </Stack>
        <Stack direction="row">
        <Box
          boxShadow="inner"
          onChange={handleInvest}
          fontWeight="bold"
          backgroundColor="teal.400"
          w={{sm:"80%", lg:"90%"}}
          p="0.5rem"
          rounded="lg"
          s
        >
          getInvestmentBalance : {invest}
        </Box>
        <Button
                backgroundColor="whiteAlpha.300"
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
