# NFT Project on Lisk Sepolia Testnet

This project is an implementation of a simple ERC721 NFT (Non-Fungible Token) contract deployed on the Lisk Sepolia Testnet. The contract allows minting unique tokens with metadata and is designed using OpenZeppelin's standard libraries for secure and reliable token interactions.

deployed link : https://sepolia-blockscout.lisk.com/address/0x8878e810dC57fF52fFbce810C642103B59818d40#code

## Project Structure

- **contracts/**: Contains the Solidity contract files.
  - `NFT.sol`: The ERC721 contract with minting functionality.
- **scripts/**: Contains deployment scripts.
  - `deploy.ts`: Script to deploy the NFT contract.
- **hardhat.config.ts**: Hardhat configuration file for setting up the environment and networks.

## Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/) (v20 or higher) or [yarn](https://yarnpkg.com/)
- [Hardhat](https://hardhat.org/) (v2.0 or higher)
- [MetaMask](https://metamask.io/) for managing your wallet on the Lisk Sepolia Testnet.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Superior212/NFT-ERC721-.git
   cd nft-project
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Set up environment variables:

   Create a `.env` file at the root of the project and add your private key and Infura or Alchemy API key for the Sepolia network:

   ```plaintext
   PRIVATE_KEY=your_private_key
   INFURA_API_KEY=your_infura_key
   ```

## Deployment

To deploy the contract on the Lisk Sepolia Testnet, follow these steps:

1. Compile the contracts:

   ```bash
   npx hardhat compile
   ```

2. Deploy the contract:

   ```bash
   npx hardhat run scripts/deploy.ts --network lisk-sepolia
   ```

   After running this command, the script will output the deployed contract address.

   Example output:

   ```plaintext
   NFT Contract Deployed at 0x81b8C34CD7374C725ba2c3747477dsss3
   ```

## Verification

Once the contract is deployed, you can verify it on Etherscan (for Lisk Sepolia Testnet) using the following command:

```bash
npx hardhat verify --network lisk-sepolia 0x81b8C34CD7374C725ba2cb1BE1C654734A25a963 0xYourDeployerAddress
```

Replace `0x81b8C34CD7374C725ba2c3747477dsss3` with your contract's address and `0xYourDeployerAddress` with the address used as the constructor argument during deployment.

If successful, your contract will be verified and publicly viewable on Lisk Sepolia Etherscan.

## Contract Details

- **Contract Name**: `NFT`
- **Token Name**: `SuPeRior`
- **Token Symbol**: `SuP`
- **Minting**: The contract owner can mint new tokens and set their URI.

### Example Solidity Constructor

```solidity
constructor(address initialOwner) ERC721("SuPeRior", "SuP") Ownable(initialOwner) {}
```

## Usage

### Minting Tokens

To mint a new NFT, use the `mintNFT` function. The contract owner can call this function, specifying the recipient's address and the token URI.

Example:

```javascript
await nftContract.mintNFT(
  "0xRecipientAddress",
  "https://example.com/metadata/1"
);
```

This will mint a new token and assign it to the specified recipient.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
