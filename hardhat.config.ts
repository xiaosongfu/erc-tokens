import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-publish-typechain";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  publishTypechain: {
    name: "erc-tokens",
    version: "0.2.1",
    repository: "https://github.com/xiaosongfu/erc-tokens",
    authToken: "npm_VKT...MJx", // NOTICE: You need to get your own token to publish packages
  },
};

export default config;
