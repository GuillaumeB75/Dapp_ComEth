import { Button, Input, Heading, Container, Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import {  ComEthAddressContext } from "../../context/ComEthAddressContext";
import { useState , useContext} from "react";

const LoginTemplate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setComEthAddress } = useContext(ComEthAddressContext); 

  return (
    <>
      <Center>
        <Heading margin="3rem">Join ComEth</Heading>
      </Center>
      <Container>
        <Box boxShadow="dark-lg" w="35rem" rounded="lg">
          <Input
            boxShadow="lg"
            w="32rem"
            placeholder="ID of your group"
            margin="1rem"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            boxShadow="lg"
            w="32rem"
            placeholder="password of your group"
            margin="1rem"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to="/home">
            <Button margin="2rem" boxShadow="lg" onClick={setComEthAddress(username)}>
              Join Community
            </Button>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default LoginTemplate;
