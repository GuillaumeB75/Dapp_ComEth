import { Circle, Input, Heading, Container, Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ComEthAddressContext } from "../../App";
import { useState, useContext } from "react";

const LoginTemplate = () => {
  const [username, setUsername] = useState("");
  const comEthAddressContext = useContext(ComEthAddressContext); 

  return (
    <>
      <Center>
        <Heading margin="3rem">Join ComEth</Heading>
      </Center>
      <Container>
        <Box boxShadow="lg" backgroundColor="blackAlpha.200" w="35rem" mt="4rem" rounded="lg" pb="0.3rem">
          <Input
            boxShadow="lg"
            w="32rem"
            placeholder="ID of your group"
            backgroundColor="teal.400"
            margin="1rem"
            
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Link to="/home">
            <Center>
            <Circle as="button" fontWeight="bold" w="24rem" backgroundColor="whiteAlpha.400" p="0.5em" margin="2rem" boxShadow="lg" onClick={comEthAddressContext.setComEthAddress(username)}>
              Join Community
            </Circle>
            </Center>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default LoginTemplate;
