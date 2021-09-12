import { React, useEffect, useState } from "react";
import { Box, Circle, useToast, Input, Center } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

import { ComEthFactoryContext } from "../../App";
import { ComEthAddressContext } from "../../App";
import { useContext } from "react";
import { Web3Context } from "web3-hooks";
import { ethers } from 'ethers';

const CreateComethForm = () => {
  const [created , setCreated ] = useState(false)
  const [web3State] = useContext(Web3Context);
  const comEthFactory = useContext(ComEthFactoryContext);
  const { comEthAddress, setComEthAddress } = useContext(ComEthAddressContext);
  const [subscriptionPrice, setSubscriptionPrice] = useState("");

  const toast = useToast();

  // subscription price parametter <------------------------
  const handleChangeSubscription = (e) => {
    setSubscriptionPrice(e.target.value.toString());
    console.log("ETH",e.target.value)
  };
  //-------------------------------------------------------------

  const handleClickCreate = async () => {
    try {
      let tx = await comEthFactory.createComEth(ethers.utils.parseEther(subscriptionPrice)); // <------------
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
        console.log(
          `comEthOwner: ${ComEthOwner} comEthAddress: ${ComEthAddress}`
        );
      };
      // ecouter sur l'event DataSet
      comEthFactory.on("ComEthCreated", cb);
      return () => {
        // arreter d'ecouter lorsque le component sera unmount
        comEthFactory.off("ComEthCreated", cb);
        setCreated(!created);
      };
    }
  }, [
    comEthFactory,
    web3State.account,
    toast,
    setComEthAddress,
    comEthAddress,
    created,
  ]);

  return (
    <>
      <Box
        boxShadow="lg"
        w={{ base: "90%", md: "35rem" }}
        p="1rem"
        ml="4%"
        mt="3rem"
        rounded="md"
        backgroundColor="blackAlpha.200"
      >
        <Box
          fontWeight="bold"
          fontSize={{ base: "md", sm: "lg" }}
          textAlign="center"
          m={{ base: "0.5rem", sm: "0" }}
          backgroundColor="teal.400"
          boxShadow="inner"
          p="0.5rem"
          rounded="md"
        >
          Explication sur la création d'une communauté Ethereum
        </Box>
        <Center>
          <Box
            boxShadow="lg"
            fontSize={{ base: "sm", sm: "lg" }}
            w={{ base: "90%", sm: "60%" }}
            p="1rem"
            mt="3rem"
            rounded="md"
            backgroundColor="teal.400"
          >
            Subscription Price{" "}
            <Input
              onChange={handleChangeSubscription}
              ml="2rem"
              w="25%"
              placeHolder="10"
            ></Input>{" "}
            ETH
          </Box>
        </Center>
        <Circle
          fontWeight="bold"
          textAlign="center"
          fontSize={{ base: "md", sm: "lg" }}
          backgroundColor="whiteAlpha.400"
          boxShadow="lg"
          onClick={handleClickCreate}
          _hover={{ bg: "#0db5aa" }}
          _selected={{ bg: "#17d4c7" }}
          p="0.5em"
          margin="2rem"
        >
          Create your account
        </Circle>
      </Box>
      {created && <Redirect exact from="/create" to="/home" />}
    </>
  );
};

export default CreateComethForm;
