import { Link } from "react-router-dom";
import { Heading, Button, Center } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";
import { useContext } from "react";
import FooterLandingPage from "../organisms/FooterLandingPage";

const LandingPageTemplate = () => {
  const [web3State, login] = useContext(Web3Context);
  console.log("me");
  console.log(web3State.account);

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
            m="6"
            fontSize="100px"
            color="green"
            margin="4rem"
          >
            ComEth
          </Text>
        </Heading>
      </Center>
      <Center marginBottom="4rem">
        <Text
          color={"gray.500"}
          maxW={"3xl"}
          fontStyle="italic"
          fontSize="25px"
        >
          A new possibility to create communities and manage sharing funds
        </Text>
      </Center>
      <Center marginBottom="4rem">
        <Link to={web3State.isLogged ? "/create" : "/"}>
          <Button
            marginRight="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
          >
            Create a Community
          </Button>
        </Link>

        <Link to={web3State.isLogged ? "/login" : "/"}>
          <Button
            marginLeft="2rem"
            colorScheme="blue"
            onClick={() => handleOnClickLogin()}
          >
            Join a Community
          </Button>
        </Link>
      </Center>
      <FooterLandingPage />
    </>
  );
};
export default LandingPageTemplate;