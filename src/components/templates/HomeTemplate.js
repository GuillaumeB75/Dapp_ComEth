import { Center, Heading } from "@chakra-ui/react";
import HomeBody from "../organisms/HomeBody";

const HomeTemplate = () => {
  return (
    <>
      <Center>
        <Heading
          ml={{ sm: "8rem" }}
          textAlign="center"
          fontSize="4xl"
          fontFamily="fantasy"
        >
          Bienvenue dans votre ComEth
        </Heading>
      </Center>
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
