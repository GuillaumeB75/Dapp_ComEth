export const ComEthFactoryAdress = "0xa4e69cAdF7Dd1A0af2b361Ba660998F083B88A3f";
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