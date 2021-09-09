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
        <Box boxShadow="lg" backgroundColor="blackAlpha.200" w="35rem" mt="4rem" rounded="lg" pb="0.3rem">
          <Input
            boxShadow="lg"
            w="32rem"
            placeholder="enter Your ComEth address"
            margin="1rem"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Link to="/home">
            <Center>
            <Circle as="button" fontWeight="bold" w="24rem" backgroundColor="whiteAlpha.400" p="0.5em" margin="2rem" boxShadow="lg" onClick={handleClickLinkToHome}  _hover= {{bg:"#0db5aa"}} _selected={{bg:"#17d4c7"}} >
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
