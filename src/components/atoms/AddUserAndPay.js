import React, { useContext } from "react";
import { Circle, Center} from "@chakra-ui/react";
import { ComEthContext } from "../../context/ComEthContext";

const AddUserAndPay = () => {
  const comEth = useContext(ComEthContext);

  const handleAddUser = async () => {
    try {
      await comEth.addUser();
      console.log("you have been add !");
    } catch (e) {
      console.log(e.error);
    }
  };
  const handlePay = async () => {
    try {
      await comEth.pay();
      console.log("you have been pay !");
    } catch (e) {
      console.log(e.error);
    }
  };

  return (
    <>
      <Center>
        <Circle
          onClick={handleAddUser}
          backgroundColor="red"
          w="25%"
          mr="2rem"
          p="1rem"
          textAlign="center"
          fontWeight="bold"
          _hover= {{bg:"#1e3b45"}}
        >
          {" "}
          Se rajouter dans la ComEth
        </Circle>
        <Circle
          onClick={handlePay}
          w="20%"
          backgroundColor="green"
          p="1rem"
          textAlign="center"
          fontWeight="bold"
          _hover= {{bg:"#1e3b45"}}
        >
          {" "}
          Se mettre à jour
        </Circle>
      </Center>
    </>
  );
};

export default AddUserAndPay;
