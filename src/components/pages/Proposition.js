import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavLat from "../organisms/NavLat";
import PropositionTemplate from "../templates/PropositionTemplate";
const Proposition = () => {
  return (
    <>
      <Box h="95vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <PropositionTemplate />
        <NavLat />
        <Footer />
      </Box>
    </>
  );
};
export default Proposition;
