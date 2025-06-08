import { ethers, network } from 'hardhat'

async function main() {
  const initialSupply = 1000n * 10n ** 18n
  const Demo = await ethers.getContractFactory('DEMOITCO2')
  const demo = await Demo.deploy(initialSupply)
  const tx = demo.deploymentTransaction()
  await demo.waitForDeployment()
  const address = await demo.getAddress()
  const out = { network: network.name, address, tx: tx?.hash }
  console.log(JSON.stringify(out))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
