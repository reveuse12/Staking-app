import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StakeInfo = () => {
  const staker = useAddress();
  const { contract } = useContract(
    import.meta.env.VITE_STAKING_CONTRACT_ADDRESS
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
    <div className="text-center bg-slate-400 rounded-lg p-6">
      <h1 className="text-4xl font-bold mb-4 text-black">StakeInfo</h1>
      <div className="text-black">
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
