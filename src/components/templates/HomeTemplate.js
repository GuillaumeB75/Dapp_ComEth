import { Center, Heading } from "@chakra-ui/react";
import HomeBody from "../organisms/HomeBody";

const HomeTemplate = () => {
  return (
    <>
      <Center>
      <Heading  textAlign="center" mt={{base:"2rem", sm:"1rem",lg:"6rem"}} fontSize="4xl" fontFamily="mono">Welcome Home</Heading>
      </Center>
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
