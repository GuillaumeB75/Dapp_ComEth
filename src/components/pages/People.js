import { Box } from "@chakra-ui/react";

import NavInfoOnly from "../organisms/NavInfoOnly";
import PeopleTemplate from "../templates/PeopleTemplate";
const People = () => {
  return (
    <>
      <Box h="100vh" w="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <PeopleTemplate />
        <NavInfoOnly />
       
      </Box>
    </>
  );
};
export default People;
