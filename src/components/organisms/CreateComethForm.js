import { React, useEffect } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";

import { ComEthFactoryContext } from "../../context/ComEthFactoryContext";
import { ComEthAddressContext } from "../../context/ComEthAddressContext";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
  const { comEthAddress } = useContext(ComEthAddressContext);

  const toast = useToast();

  const handleClickCreate = async () => {
    try {
      let tx = await comEthFactory.createComEth(web3State.account); // puisque msg.sender = celui qui dois créer
      await tx.wait();
      toast({
        title: "Confirmed transaction",
        description: `Transaction hash: ${tx.hash}`, // hash de la transac
        status: "success",
        duration: 7000,
        isClosable: true,
      });
    } catch (e) {
      if (e.code === 4001) {
        toast({
          title: "Transaction signature denied",
          description: e.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      console.log(e);
    }
  };
  useEffect(() => {
    // si simpleStorage est pas null alors
    if (comEthFactory) {
      const cb = (ComEthAddress, ComEthOwner) => {
        if (ComEthOwner.toLowerCase() === web3State.account.toLowerCase()) {
          console.log("Hello", comEthAddress);
          toast({
            title: "Event ComEthCreated",
            description: `comEthOwner: ${ComEthOwner} comEthAddress: ${ComEthAddress}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
        console.log("hello");
        console.log(
          `comEthOwner: ${ComEthOwner} comEthAddress: ${ComEthAddress}`
        );
      };
      // ecouter sur l'event DataSet
      comEthFactory.on("ComEthCreated", cb);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        comEthFactory.off("ComEthCreated", cb);
      };
    }
  }, [

    comEthFactory,
    web3State.account,
    comEthAddressContext,
    toast,
    comEthAddress
    //userFilter,
  ]);
  

  return (
    <>
      <Box boxShadow="dark-lg" w="35rem" rounded="lg">
        <Box padding="1rem">
          Explication sur la création d'une communoté Ethereum
        </Box>
        <Button boxShadow="lg" onClick={handleClickCreate} margin="2rem">
          Create your account
        </Button>
      </Box>
    </>
  );
};

export default CreateComethForm;
