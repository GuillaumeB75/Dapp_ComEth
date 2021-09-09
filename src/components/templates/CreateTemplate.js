import { Heading, Container, Center } from "@chakra-ui/react";
import CreateComethForm from "../organisms/CreateComethForm";

const CreateTemplate = () => {
  return (
    <>
      <Center>
        <Heading margin="4rem">Create ComEth</Heading>
      </Center>
      <Container>
        <CreateComethForm />
      </Container>
    </>
  );
};
export default CreateTemplate;
