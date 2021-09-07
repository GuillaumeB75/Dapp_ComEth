import { React, useEffect } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";

<<<<<<< HEAD
import { ComEthFactoryContext, ComEthAddressContext } from "../../App";
=======
import { ComEthFactoryContext } from "../../App";
import { ComEthAddressContext } from "../../App";
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014
import { useContext } from "react";
import { Web3Context } from "web3-hooks";

const CreateComethForm = () => {
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
<<<<<<< HEAD
  const comEthAddressContext = useContext(ComEthAddressContext);
=======
  const { comEthAddress, setComEthAddress } = useContext(ComEthAddressContext);
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014

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
<<<<<<< HEAD
      const cb = (comEthAddress, comEthOwner) => {
        if (comEthOwner.toLowerCase() === web3State.account.toLowerCase()) {
          console.log("Hello", comEthAddressContext);
=======
      const cb = (ComEthAddress, ComEthOwner) => {
        if (ComEthOwner.toLowerCase() === web3State.account.toLowerCase()) {
          console.log("Hello", ComEthAddress);
          setComEthAddress(ComEthAddress);
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014
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
<<<<<<< HEAD
=======
    setComEthAddress,
    comEthAddress,
>>>>>>> 04089ba61cf76ce6f061722fde76e20850bd8014
    //userFilter,
  ]);
  

  return (
    <>
      <Box boxShadow="lg" w="35rem">
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