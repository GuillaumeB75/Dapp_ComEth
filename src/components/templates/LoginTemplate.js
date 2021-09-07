import { Circle, Input, Heading, Container, Center, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ComEthAddressContext } from "../../App";
import { useState, useContext } from "react";

const LoginTemplate = () => {
  const [address, setAddress] = useState("");
  const { setComEthAddress } = useContext(ComEthAddressContext);

  const handleClickLinkToHome = () => {
    setComEthAddress(address);
  };

  return (
    <>
      <Center>
        <Heading margin="3rem">Join ComEth</Heading>
      </Center>
      <Container>
        <Box boxShadow="dark-lg" w="35rem" rounded="lg" pb="0.3rem">
          <Input
            boxShadow="lg"
            w="32rem"
            placeholder="enter Your ComEth address"
            margin="1rem"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Link to="/home">
            <Circle as="button" backgroundColor="teal" p="1em" margin="2rem" boxShadow="lg" onClick={comEthAddressContext.setComEthAddress(username)}>
              Join Community
            </Circle>
          </Link>
        </Box>
      </Container>
    </>
  );
};
export default LoginTemplate;
