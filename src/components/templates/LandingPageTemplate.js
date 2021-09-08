import { Link } from "react-router-dom";
import { Heading, Circle, Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import FooterLandingPage from "../organisms/FooterLandingPage";

const LandingPageTemplate = () => {
  const [web3State, login] = useContext(Web3Context);
  console.log("me",web3State.account);


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
            fontSize="100px"
            color="blue.700"
            margin="4rem"
          >
            ComEth
          </Text>
        </Heading>
      </Center>
      <Center marginBottom="4rem">
        <Text
          color={"gray.500"}
          maxW={"4xl"}
          ml={{sm:"0.5rem"}}
          mr={{sm:"0.5rem"}}
          mt={{lg:"2rem"}}
          mb={{lg:"1rem"}}
          textAlign="center"
          fontStyle="italic"
          fontWeight="bold"
          fontSize="25px"
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
          p="1rem"
            marginRight="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
          >
            Create a Community
          </Circle>
        </Link>

        <Link to={web3State.isLogged ? "/login" : "/"}>
          <Circle
          as="button"
          fontWeight="bold"
          p="1rem"
          backgroundColor="blue.500"
            marginLeft="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
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