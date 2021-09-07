import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";

const Home = () => {
  return (
    <>
      <Box h="89vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <HomeTemplate />
        <NavLat />
        <Footer />
      </Box>
    </>
  );
};
export default Home;
