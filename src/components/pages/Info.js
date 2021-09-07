import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavInfoOnly from "../organisms/NavInfoOnly";
import InfoTemplate from "../templates/InfoTemplate";

const Info = () => {
  return (
    <>
      <Box h="90vh" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <InfoTemplate />
        <NavInfoOnly />
        <Footer />
      </Box>
    </>
  );
};
export default Info;
