import { Box } from '@chakra-ui/layout';
import { useToast } from '@chakra-ui/react';
import { useContext, useEffect } from "react";
import { ComEthContext } from "../../context/ComEthContext";
import React from 'react';

const UseEffect = () => {
    const comEth = useContext(ComEthContext);
    const toast = useToast();
    useEffect(() => {
        if (comEth) {
            const cb = (paymentReceiver, amount, proposalId) => {
                toast({
                    title: "La proposition à était validée, félicitation !",
                    description: `Destinataire : ${paymentReceiver}, du montant : ${amount / 10 ** 18} ETH, de la proposition ID :${proposalId}.`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("Spent", cb)
            return () => {
                comEth.off("Spent", cb)
            }
        };
    }, [comEth, toast]);

    useEffect(() => {
        if (comEth) {
            const cb = (newUser) => {
                toast({
                    title: "",
                    description: `Vous avez était rajouter en tant que nouvel utilisateur de ComEth sous l'addresse : ${newUser}, veuillez régulariser votre situation.`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("UserAdded", cb)
            return () => {
                comEth.off("UserAdded", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
        if (comEth) {
            const cb = (sender, amount) => {
                toast({
                    title: "Vous avez bien déposé dans votre ComEth",
                    description: `L'addresse : ${sender}, D'un montant de : ${amount / 10 ** 18} ETH`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("Deposited", cb)
            return () => {
                comEth.off("Deposited", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
        if (comEth) {
            const cb = (voter, proposalId, proposalDescription) => {
                toast({
                    title: "À voter !",
                    description: `Le compte : ${voter}, à voter la proposition: ${proposalDescription}, ID : ${proposalId}`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 8000,
                    isClosable: true,
                });
            };
            comEth.on("Voted", cb)
            return () => {
                comEth.off("Voted", cb)
            }
        };
    }, [comEth, toast]);
    useEffect(() => {
        if (comEth) {
            const cb = (id, descriptions) => {
                toast({
                    title: "Proposition créé",
                    description: `id de la proposition: ${id} . Desciprion : ${descriptions}`,
                    status: "info",
                    position: "top-right",
                    padding: "1rem",
                    fontWeight: "bold",
                    duration: 4000,
                    isClosable: true,
                });
            };
            comEth.on("ProposalCreated", cb)
            return () => {
                comEth.off("ProposalCreated", cb)
            }
        };
    }, [comEth, toast]);
    return (
        <>
            <Box></Box>
        </>
    );
};
// useEffect(() => {
//     if (comEth) {
//         const cb = (,) => {
//             toast({
//                 title: "",
//                 description: ``,
//                 status: "info",
//                 position: "top-right",
//                 padding: "1rem",
//                 fontWeight: "bold",
//                 duration: 8000,
//                 isClosable: true,
//             });
//         };
//         comEth.on("", cb)
//         return () => {
//             comEth.off("", cb)
//         }
//     };
// }, [comEth, toast]);

export default UseEffect;