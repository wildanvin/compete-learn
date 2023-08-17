import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "SBTCertification" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deploySBTCertificationCore: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  await deploy("SBTCertificationCore", {
    from: deployer,
    log: true,
    autoMine: true,
  });
};

export default deploySBTCertificationCore;

deploySBTCertificationCore.tags = ["SBTCertification"];
