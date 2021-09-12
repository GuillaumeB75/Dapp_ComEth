import { useContext } from "react";
import { Tag, TagLabel, Box } from "@chakra-ui/react";
import { Web3Context } from "web3-hooks";

const FooterLandingPage = () => {
  const [web3State, login] = useContext(Web3Context);
  const handleOnClickLogin = () => {
    if (!web3State.isLogged) {
      login();
    } else {
    }
  };
  return (
    <>
      <Box pos="absolute" bottom="0" left="1">
        {web3State.isLogged ? (
          <>
            <Tag borderRadius="full" variant="solid" colorScheme="green">
              <TagLabel>Vous êtes connecté à Metamask!</TagLabel>
            </Tag>{" "}
          </>
        ) : (
          <>
            <Tag
              borderRadius="full"
              variant="solid"
              colorScheme="red"
              onClick={() => handleOnClickLogin()}
            >
              <TagLabel>Vous n'êtes pas connecté à Metamask!</TagLabel>
            </Tag>{" "}
          </>
        )}
      </Box>
    </>
  );
};

export default FooterLandingPage;
