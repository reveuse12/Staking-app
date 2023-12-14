import React from "react";
import { Web3Button } from "@web3modal/react";
const ClaimReward = () => {
  const [rewardAmount, setRewardAmount] = React.useState("");

  return (
    <div>
      <h2>Claim Your Rewards</h2>
      <div>
        <label htmlFor="rewards">Reward Balance</label>
        <input
          type="text"
          id="rewards"
          placeholder="Enter Amount"
          onChange={(e) => setRewardAmount(e.target.value)}
          value={rewardAmount}
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={async (contract) => {
            contract.call("claimReward", [rewardAmount]);
          }}
        >
          Claim
        </Web3Button>
      </div>
    </div>
  );
};

export default ClaimReward;
