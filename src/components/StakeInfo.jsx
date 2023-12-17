import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StakeInfo = () => {
  const staker = useAddress();
  const { contract } = useContract(
    "0x94D1857B5B7d5C7a1e50216c7C7CfE6a4D05C102"
  );
  const { data: stakeInfo, isLoading } = useContractRead(
    contract,
    "getStakeInfo",
    [staker]
  );

  // Convert hex BigNumber values to human-readable numbers
  const stakedAmount = stakeInfo && ethers.utils.formatUnits(stakeInfo[0]);
  const rewardAmount = stakeInfo && ethers.utils.formatUnits(stakeInfo[1]);

  return (
    <div className="text-center bg-gradient-to-br from-[#262a33] to-[#19202a] mt-8 rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-4 text-[#f43550]">StakeInfo</h1>
      <div className="text-[#e7b7b6]">
        <h3 className="text-lg mb-2">
          Staked: {isLoading ? "Loading..." : `${stakedAmount} Tokens`}
        </h3>
        <h3 className="text-lg">
          Reward: {isLoading ? "Loading..." : `${rewardAmount} Tokens`}
        </h3>
      </div>
    </div>
  );
};

export default StakeInfo;
