import { Center, Heading } from "@chakra-ui/react";
import InformationBody from "../organisms/InformationBody";


const InfoTemplate = () => {
  return (
    <>
      <Center>
        <Heading    ml={{ sm: "8rem" }} textAlign="center">Vos Informations</Heading>
      </Center>
      
      <InformationBody />
    </>
  );
};
export default InfoTemplate;
