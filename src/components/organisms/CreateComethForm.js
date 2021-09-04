import { React, useEffect } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";

import { ComEthFactoryContext, ComEthAddressContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
  const comEthAddressContext = useContext(ComEthAddressContext);

  const toast = useToast();
  /*
  useEffect(() => {
    if (comEthFactory) {
      const cb = (account, str) => {
        setValue(str);
        toast({
          title: "This is YOUR event",
          description: `${account} ||${str}`,
          status: "warning",
          position: "top-right",
          duration: 9000,
          isClosable: true,
        })
      }
      const allFilter = comEthFactory.filters.ComEthCreated(web3State.account);
      comEthFactory.on(allFilter, cb);
      return () => {
        comEthFactory.off(allFilter, cb);
      };
    }
  }, [comEthFactory, web3State.account, toast]);
  */

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
      const cb = (comEthAddress, comEthOwner) => {
        if (comEthOwner.toLowerCase() === web3State.account.toLowerCase()) {
          console.log("Hello", comEthAddressContext);
          toast({
            title: "Event ComEthCreated",
            description: `comEthOwner: ${comEthOwner} comEthAddress: ${comEthAddress}`,
            status: "info",
            position: "top-right",
            duration: 9000,
            isClosable: true,
          });
        }
        console.log("hello");
        console.log(
          `comEthOwner: ${comEthOwner} comEthAddress: ${comEthAddress}`
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
    toast,
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
