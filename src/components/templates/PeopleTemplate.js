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
  const comEth = useContext(ComEthContext);

  const handlActive = async () => {
    setActive(active);
    try {
      let activity = await comEth.getIsActive(active);
      setActive(activity);
    } catch (e) {
      console.log(e.error);
    }
  };

  const handlebanned = async () => {
    setBanned(banned);
    try {
      let bannedOrNot = await comEth.getIsBanned(banned);
      setBanned(bannedOrNot);
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Center>
        <Heading
          mt={{base:"2rem", sm:"1rem",lg:"6rem"}}
          ml={{md:"5rem"}}
          textAlign="center"
          fontSize={{base:"xl", sm:"4xl"}}
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
        <Box backgroundColor="#2ac9c7" rounded="md" p="1rem" fontWeight="bold" m="1rem">Activités au seint de la ComEth</Box>
        </Center>
        <Box mt="2rem">
          <Box m="2rem" ml={{ md: "1rem" }}>
            {active === true ? (
              <Circle
                w={{ sm: "57%", md: "41%", lg: "42%" }}
                backgroundColor="green"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Est Actif{" "}
              </Circle>
            ) : (
              <Circle
                w={{ sm: "59%", md: "37%", lg: "40%" }}
                backgroundColor="red.600"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Pas Actif
              </Circle>
            )}
            <Box padding="1rem" fontWeight="black">
              {" "}
              Voir qui est Actif :
            </Box>
            <Stack direction="row">
              <Input
                onChange={handlActive}
                backgroundColor="teal.600"
                value={active}
              ></Input>
              <Button
                backgroundColor="whiteAlpha.300"
                _hover={{ bg: "#21bdbf" }}
              >
                Chercher
              </Button>
            </Stack>
          </Box>
          <Box m="2rem">
            {!banned === true ? (
              <Circle
                w={{ sm: "59%", md: "41%", lg: "44%" }}
                backgroundColor="green"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Pas banni{" "}
              </Circle>
            ) : (
              <Circle
                w={{ sm: "57%", md: "33%", lg: "40%" }}
                backgroundColor="red"
                fontFamily="monospace"
                fontWeight="bold"
              >
                Banni
              </Circle>
            )}
            <Box value={banned} padding="1rem" fontWeight="bold">
               Voir qui est banni :
            </Box>
            <Stack direction="row">
              <Input
                onChange={handlebanned}
                backgroundColor="teal.600"
                value={banned}
              ></Input>
              <Button
                backgroundColor="whiteAlpha.300"
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
