import { Box } from "@chakra-ui/react";
import NavInfoOnly from "../organisms/NavInfoOnly";
import InfoTemplate from "../templates/InfoTemplate";

const Info = () => {
  return (
    <>
      <Box minH="91.7vh" maxH="100%" bgGradient="linear(to-t,teal.600, teal.400);">
        <InfoTemplate />
        <NavInfoOnly />
      </Box>
    </>
  );
};
export default Info;
