import { config as dotenvConfig } from 'dotenv'
import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'

dotenvConfig()

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  networks: {
    amoy: {
      url: process.env.ALCHEMY_AMOY || '',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 80002,
    },
    polygon: {
      url: process.env.ALCHEMY_POLYGON || '',
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 137,
    },
  },
  paths: {
    sources: './smart-contract/contracts',
    cache: './smart-contract/cache',
    artifacts: './smart-contract/artifacts',
    tests: './smart-contract/test',
  },
}

export default config
