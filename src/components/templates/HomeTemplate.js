import { Center, Heading } from "@chakra-ui/react";
import HomeBody from "../organisms/HomeBody";

const HomeTemplate = () => {
  return (
    <>
      <Center>
      <Heading ml="3rem">Welcome Home</Heading>
      </Center>
      <HomeBody />
    </>
  );
};
export default HomeTemplate;
