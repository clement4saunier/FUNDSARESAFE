const hre = require("hardhat");

async function main() {
  const Funding = await hre.ethers.getContractFactory("Funding");
  const funding = await Funding.deploy();

  console.log("Funding deployed to:", funding.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
