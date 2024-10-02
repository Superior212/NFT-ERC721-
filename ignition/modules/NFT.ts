import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Address = "0xe47B685FD028eb63dD020E5641C5bD3Ce4adD610";

const NftModule = buildModule("NftModule", (m) => {
  const owner = Address;

  // Deploy the NFT contract with the owner address
  const Nft = m.contract("NFT", [owner]);

  // Return the contract future as an object
  return { Nft };
});

export default NftModule;
