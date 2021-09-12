import {
  Box,
  Center,
  Circle,
  Heading,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ComEthContext } from "../../context/ComEthContext";

const PeopleTemplate = () => {
  const [active, setActive] = useState("");
  const [banned, setBanned] = useState("");
  const [estActif, setEstActif] = useState(false);
  const [estBanni, setEstBanni] = useState(false);
  const comEth = useContext(ComEthContext);

  const handleAddress = (e) => {
    try {
      setActive(e.target.value);
    } catch (e) {}
  };
  const handleAddressBan = (e) => {
    try {
      setBanned(e.target.value);
    } catch (e) {}
  };

  const handlActive = async (e) => {
    try {
      const act = await comEth.getUser(active);
      setEstActif(act.hasPaid);
      console.log("banni ou pas :", act.hasPaid);
    } catch (e) {
      console.log(e.error);
    }
  };

  const handlebanned = async (e) => {
    try {
      const ban = await comEth.getUser(banned);
      setEstBanni(ban.isBanned);
      console.log("banni ou pas :", ban.isBanned);
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Center>
        <Heading
          mt={{ base: "2rem", sm: "1rem", lg: "6rem" }}
          ml={{ md: "5rem" }}
          textAlign="center"
          fontSize={{ base: "xl", sm: "4xl" }}
          fontFamily="mono"
        >
          Membre de ma ComEhnauté
        </Heading>
      </Center>
      <Box
        rounded="md"
        boxShadow="lg"
        mt={{ sm: "4rem" }}
        ml={{ sm: "3rem", md: "11rem", lg: "19rem" }}
        w={{ sm: "80%", md: "75%", lg: "40%" }}
        backgroundColor="blackAlpha.200"
        p="1rem"
      >
        <Center>
          <Box
            backgroundColor="#2ac9c7"
            rounded="md"
            p="1rem"
            fontWeight="bold"
            m="1rem"
          >
            Activités au seint de la ComEth
          </Box>
        </Center>
        <Box mt="2rem">
          <Box m="2rem" ml={{ md: "1rem" }}>
            {estActif === true ? (
              <Circle
                w={{ sm: "57%", md: "41%", lg: "42%" }}
                backgroundColor="green"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Est actif
              </Circle>
            ) : (
              <Circle
                w={{ sm: "59%", md: "37%", lg: "40%" }}
                backgroundColor="red.600"
                fontFamily="monospace"
                fontWeight="bold"
              >
                N'est pas actif
              </Circle>
            )}
            <Box padding="1rem" fontWeight="black">
              Voir qui est Actif :
            </Box>
            <Stack direction="row">
              <Input
                onChange={handleAddress}
                backgroundColor="teal.600"
              ></Input>
              <Button
                onClick={handlActive}
                backgroundColor="whiteAlpha.300"
                _hover={{ bg: "#21bdbf" }}
              >
                Chercher
              </Button>
            </Stack>
          </Box>
          <Box m="2rem">
            {!estBanni === true ? (
              <Circle
                w={{ sm: "59%", md: "41%", lg: "44%" }}
                backgroundColor="green"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Pas banni
              </Circle>
            ) : (
              <Circle
                w={{ sm: "57%", md: "33%", lg: "40%" }}
                backgroundColor="red.600"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Banni
              </Circle>
            )}
            <Box padding="1rem" fontWeight="bold">
              Voir qui est banni :
            </Box>
            <Stack direction="row">
              <Input
                onChange={handleAddressBan}
                backgroundColor="teal.600"
              ></Input>
              <Box></Box>
              <Button
                backgroundColor="whiteAlpha.300"
                onChange={handlebanned}
                _hover={{ bg: "#21bdbf" }}
              >
                Chercher
              </Button>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default PeopleTemplate;
