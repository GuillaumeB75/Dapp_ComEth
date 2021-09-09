import { React, useEffect } from "react";
import { Box, Circle, useToast } from "@chakra-ui/react";

import { ComEthFactoryContext } from "../../App";
import { ComEthAddressContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
  const { comEthAddress, setComEthAddress } = useContext(ComEthAddressContext);

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
          console.log("Hello", ComEthAddress);
          setComEthAddress(ComEthAddress);
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
    toast,
    setComEthAddress,
    comEthAddress,
    //userFilter,
  ]);
  

  return (
    <>
      <Box boxShadow="lg" w="35rem" p="1rem" mt="3rem" rounded="md" backgroundColor="blackAlpha.200">
        <Box fontWeight="bold" backgroundColor="teal.400" boxShadow="inner" p="0.5rem" rounded="md">
          Explication sur la création d'une communoté Ethereum
        </Box>
        <Circle fontWeight="bold" backgroundColor="whiteAlpha.400" boxShadow="lg" onClick={handleClickCreate}  _hover= {{bg:"#0db5aa"}} _selected={{bg:"#17d4c7"}} p="0.5em" margin="2rem">
          Create your account
        </Circle>
      </Box>
    </>
  );
};

export default CreateComethForm;