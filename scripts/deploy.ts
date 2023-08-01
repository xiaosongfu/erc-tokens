import { ethers } from "hardhat";
import deployed from "./deployed";

async function main() {
  const [signer] = await ethers.getSigners();
  console.log("current signer: ", signer.address);

  const erc20 = await ethers.deployContract("MMERC20");
  await erc20.waitForDeployment();
  deployed.setMMERC20Contract(erc20.target.toString());
  console.log(`[MMERC20] deployed to ${erc20.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
