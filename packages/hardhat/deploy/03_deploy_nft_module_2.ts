import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "SBTCertification" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployNFTModule2: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("NFTModule2", {
    from: deployer,
    args: ["0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f"],
    log: true,
    autoMine: true,
  });
};

export default deployNFTModule2;

deployNFTModule2.tags = ["NFTModule2"];
