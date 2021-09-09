export const ComEthFactoryAdress = "0xB7dB99Ae61d7E690fac0dcA89A63C830A06cC132";
export const ComEthFactoryAbi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "factoryOwner_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "comEthAddress",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "comEthOwner",
        type: "address",
      },
    ],
    name: "ComEthCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "subscriptionPrice_",
        type: "uint256",
      },
    ],
    name: "createComEth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getComEths",
    outputs: [
      {
        internalType: "contract ComEth[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFactoryOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];