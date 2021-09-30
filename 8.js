const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/b0918ac391a248ca8604063b7b77adcb"
);

web3.eth.getGasPrice().then((result) => {
  console.log(web3.utils.fromWei(result, "ether"));
});

console.log(web3.utils.sha3("Dapp University"));

console.log(web3.utils.keccak256("Dapp University"));

console.log(web3.utils.randomHex(32));

// Get access to the underscore JS library

// const _utils = require("web3-utils");
// _utils.each({ key1: "value1", key2: "value2" }, (value, key) => {
//   console.log(key);
// });
