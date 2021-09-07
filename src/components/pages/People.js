import { Box } from "@chakra-ui/react";
import Footer from "../organisms/Footer";
import NavInfoOnly from "../organisms/NavInfoOnly";
import PeopleTemplate from "../templates/PeopleTemplate";
const People = () => {
  return (
    <>
      <Box h="85vh" w="100%" bgGradient="linear(to-t,gray.800, teal.400);">
        <PeopleTemplate />
        <NavInfoOnly />
        <Footer/>
      </Box>
    </>
  );
};
export default People;
