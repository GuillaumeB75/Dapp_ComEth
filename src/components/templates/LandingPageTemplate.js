import { Link } from "react-router-dom";
import { Heading, Circle, Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import FooterLandingPage from "../organisms/FooterLandingPage";

const LandingPageTemplate = () => {
  const [web3State, login] = useContext(Web3Context);
  console.log("me", web3State.account);

  const handleOnClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };
  return (
    <>
      <Center>
        <Heading>
          <Text
            textShadow="3px 3px #43A2F7"
            mt={{sm:"10rem", lg:"10rem"}}
            fontSize={{sm:"100px",lg:"100px"}}
            color="blue.700"
            margin="4rem"
          >
            ComEth
          </Text>
        </Heading>
      </Center>
      <Center marginBottom="4rem">
        <Text
          color={"gray.600"}
          maxW={"4xl"}
          ml={{ sm: "0.5rem" }}
          mr={{ sm: "0.5rem" }}
          mt={{ lg: "2rem" }}
          mb={{ lg: "1rem" }}
          textAlign="center"
          fontStyle="italic"
          fontWeight="bold"
          fontSize={{sm:"24px",lg:"25px"}}
        >
          A new possibility to create communities and manage sharing funds
        </Text>
      </Center>
      <Center>
        <Link to={web3State.isLogged ? "/create" : "/"}>
          <Circle
          as="button"
          backgroundColor="blue.500"
          fontWeight="bold"
          p={{sm:"0.8rem",lg:"1rem"}}
            marginRight="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
            _hover={{ bg: "#42daf5" }}
            _selected={{ bg: "#055c6b" }}
          >
            Create a Community
          </Circle>
        </Link>

        <Link to={web3State.isLogged ? "/login" : "/"}>
          <Circle
          as="button"
          fontWeight="bold"
          p={{sm:"0.8rem",lg:"1rem"}}
          backgroundColor="blue.500"
            marginLeft="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
            _hover={{ bg: "#42daf5" }}
            _selected={{ bg: "#055c6b" }}
          >
            Join a Community
          </Circle>
        </Link>
      </Center>
      <FooterLandingPage />
    </>
  );
};
export default LandingPageTemplate;
