import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "hardhat-publish-typechain";
import "hardhat-deployed-records";

const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://gateway.tenderly.co/public/sepolia",
      accounts: [`${PRIVATE_KEY}`],
    },
  },
  deployedRecords: {
    ignoreContracts: [],
  },
  publishTypechain: {
    name: "erc-tokens",
    version: "0.3.1",
    repository: "https://github.com/xiaosongfu/erc-tokens",
    includeDeployed: true,
    authToken: process.env.AUTH_TOKEN || "npm_pZB...zyP", // NOTICE: You need to get your own token to publish packages
  },
};

export default config;
