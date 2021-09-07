import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavLat from "../organisms/NavLat";
import VoteTemplate from "../templates/VoteTemplate";

const Vote = () => {
  return (
    <>
      <Box h="90vh" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <VoteTemplate />
        <NavLat />
        <Footer />
      </Box>
    </>)
}
export default Vote