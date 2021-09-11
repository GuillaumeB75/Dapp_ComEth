export const ComEthFactoryAdress = "0x707403e833b8cF8ceCB3C202954A37e67204998a";
export const ComEthFactoryAbi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "comEthAddress",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "comEthOwner",
				"type": "address"
			}
		],
		"name": "ComEthCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "subscriptionPrice_",
				"type": "uint256"
			}
		],
		"name": "createComEth",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "factoryOwner_",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "getComEths",
		"outputs": [
			{
				"internalType": "contract ComEth[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFactoryOwner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]