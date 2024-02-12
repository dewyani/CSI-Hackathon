require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.19",
  networks: {
    development: {
      url: "http://localhost:7545", // Assuming Ganache is running on the default port
      accounts: [PRIVATE_KEY],
    },
  },
};

