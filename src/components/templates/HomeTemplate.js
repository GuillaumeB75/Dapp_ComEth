import { Center, Heading } from "@chakra-ui/react";
import HomeBody from "../organisms/HomeBody";

const HomeTemplate = () => {
  return (
    <>
      <Center>
      <Heading  ml={{ sm: "8rem" }} textAlign="center">Welcome Home</Heading>
      </Center>
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
