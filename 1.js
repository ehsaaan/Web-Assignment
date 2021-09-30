const Web3 = require("web3");
const rpcURL = "https://mainnet.infura.io/v3/b0918ac391a248ca8604063b7b77adcb"; // Your RCkP URL goes here
const web3 = new Web3(rpcURL);
const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa"; // Your account address goes here
web3.eth.getBalance(address, (err, wei) => {
  balance = web3.utils.fromWei(wei, "ether");
});
