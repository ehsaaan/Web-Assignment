const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/b0918ac391a248ca8604063b7b77adcb"
);

web3.eth.getBlockNumber().then(console.log);

web3.eth.getBlock("latest").then(console.log);

web3.eth.getBlockNumber().then((latest) => {
  for (let i = 0; i < 10; i++) {
    web3.eth.getBlock(latest - i).then(console.log);
  }
});

const hash =
  "0x66b3fd79a49dafe44507763e9b6739aa0810de2c15590ac22b5e2f0a3f502073";
web3.eth.getTransactionFromBlock(hash, 2).then(console.log);
