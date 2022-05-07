require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/c48c0faf214945cc805bf64d3249f4d3",
      accounts: ["292f5c3c0fbb6d62d7992d6f2ec398757246ec83f79065dc3cf500c8c5447dc8"],
      gasPrice: "auto",
      gasMultiplier: 5,
      gas: "auto"
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/c48c0faf214945cc805bf64d3249f4d3",
      accounts: ["292f5c3c0fbb6d62d7992d6f2ec398757246ec83f79065dc3cf500c8c5447dc8"],
      gasPrice: "auto",
      gasMultiplier: 5,
      gas: "auto"
    }
  }, 
};
