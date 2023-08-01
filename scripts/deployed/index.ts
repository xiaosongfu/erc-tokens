import hre from "hardhat";
import fs from "fs";
import path from "path";

// read json file
function readSync() {
  try {
    const content = fs.readFileSync(manifest, "utf-8");
    return JSON.parse(content);
  } catch (err) {
    console.error(err);
  }
}

// write json file
function saveSync() {
  const content = JSON.stringify(data, null, 2);
  try {
    fs.writeFileSync(manifest, content);
  } catch (err) {
    console.error(err);
  }
}

const network = hre.network.name;
console.log('current network: ', network);

// const [signer] = await ethers.getSigners();
// console.log('current signer: ', signer.address);

const manifest = path.join(__dirname, network, "contracts.json");
const data = readSync();

const deployd = {
  contracts: data,
  setMMERC1155Contract: function (addr: string) {
    this.contracts["MMERC1155"] = addr;
    saveSync();
  },
  getMMERC1155Contract: function (): string {
    return this.contracts["MMERC1155"];
  },
  setMMERC20Contract: function (addr: string) {
    this.contracts["MMERC20"] = addr;
    saveSync();
  },
  getMMERC20Contract: function (): string {
    return this.contracts["MMERC20"];
  },
  setMMERC721Contract: function (addr: string) {
    this.contracts["MMERC721"] = addr;
    saveSync();
  },
  getMMERC721Contract: function (): string {
    return this.contracts["MMERC721"];
  },
};

export default deployd;