import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavInfoOnly from "../organisms/NavInfoOnly";
import StatsTemplate from "../templates/StatsTemplate";

const Stats = () => {
  return (
    <>
    <Box h="85vh" w="100%"  bgGradient="linear(to-t,teal.600, teal.400);">
      <StatsTemplate />
      <NavInfoOnly />
      <Footer />
      </Box>
    </>
  );
};
export default Stats;
