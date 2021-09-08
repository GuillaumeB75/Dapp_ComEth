import { Box } from "@chakra-ui/react";

import NavLat from "../organisms/NavLat";
import HomeTemplate from "../templates/HomeTemplate";

const Home = () => {
  return (
    <>
      <Box h={{sm:"90vh",md:"100vh"}} w="100%"  bgGradient="linear(to-t,teal.600, teal.400);">
        <HomeTemplate />
        <NavLat />
        
      </Box>
    </>
  );
};
export default Home;
