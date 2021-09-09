import { Box } from "@chakra-ui/layout";
import LoginTemplate from "../templates/LoginTemplate";
const Login = () => {
  return (
    <>
    {/* TODO : faire la page front joulie */}
    <Box minH="100vh" maxH="100%" bgGradient="linear(to-t,teal.600, teal.400);">
      <LoginTemplate />
      </Box>
    </>
  );
};
export default Login;
