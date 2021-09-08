import { Box } from "@chakra-ui/react";
import LandingPageTemplate from "../templates/LandingPageTemplate";

const LandingPage = () => {
  return (
    <>
    {/* TODO : faire la page front joulie  */}
      <Box h={{sm:"98vh", lg:"100vh"}} w="100%" bgGradient="linear(to-t,blue.100, blue.400);">
        <LandingPageTemplate />
      </Box>
    </>
  );
};
export default LandingPage;
