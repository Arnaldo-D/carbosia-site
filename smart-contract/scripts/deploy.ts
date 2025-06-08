import { ethers } from 'hardhat'

async function main() {
  const initialSupply = 1000n * 10n ** 18n
  const Demo = await ethers.getContractFactory('DEMOITCO2')
  const demo = await Demo.deploy(initialSupply)
  await demo.waitForDeployment()
  console.log('DEMOITCO2 deployed to:', await demo.getAddress())
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
