import { Box } from "@chakra-ui/react";
import NavLat from "../organisms/NavLat";
import PropositionTemplate from "../templates/PropositionTemplate";
const Proposition = () => {
  return (
    <>
      <Box minH="91.7vh" maxW="100%" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <PropositionTemplate />
        <NavLat />
      </Box>
    </>
  );
};
export default Proposition;
