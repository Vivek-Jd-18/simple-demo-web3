import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    sepolia:{
      url: "https://eth-sepolia.g.alchemy.com/v2/R6OILRKTXDUEBz3gObRmArSbNIieviHL",
      accounts:[process.env.PK1 as string],
    },
  },
  etherscan:{
    apiKey:"IHBVH4TYCF7D6DQ74AHZ2MPZFCXKPMF8YT"
  }
};

export default config;
