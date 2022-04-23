const { ethers } = require('hardhat');
require('dotenv').config({ path: '.env' });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require('../constants');

async function main() {
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  const metadataURL = METADATA_URL;
  const cryptoDevsContract = await ethers.getContractFactory('CryptoDevs');
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  );

  console.log(
    'Crypto Devs Contract Address: ',
    deployedCryptoDevsContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
// import ehters form hardhat, dotenv with .config path member, whitelist & metadata constants

// main()
// const whitelistcontract
// const metadata
// const contractfactory from ethers
// const deployed contract with 2 constants as arguments

// console log deployed address

// run main with .then exit and error catching
