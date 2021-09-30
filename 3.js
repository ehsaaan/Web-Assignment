var Tx = require("ethereumjs-tx");
const Web3 = require("web3");
const web3 = new Web3(
  "https://mainnet.infura.io/v3/b0918ac391a248ca8604063b7b77adcb"
);

const account1 = "0x7aE867d69478c05510161aded13c1a7c4B35932e"; // Your account address 1

const privateKey1 = Buffer.from(
  "0x1a134e2051b15501fed387580b7e25a404d0cbd6b43d3f6a41d51d719fb55f60",
  "hex"
);

web3.eth.getTransactionCount(account1, (err, txCount) => {
  const txObject = {
    nonce: web3.utils.toHex(txCount),
    to: account2,
    value: web3.utils.toHex(web3.utils.toWei("0.1", "ether")),
    gasLimit: web3.utils.toHex(21000),
    gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
  };

  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
  });
});
