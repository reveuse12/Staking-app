import React, { useState } from "react";
import { Web3Button } from "@web3modal/react";
const Unstake = () => {
  const [unstakeAmount, setUnsatkeAmount] = useState(0);
  return (
    <div>
      <h2>Unstake token</h2>
      <div>
        <label htmlFor="Unstake token">Unstake Web3Token</label>
        <input
          type="number"
          name="unstake"
          value={unstakeAmount}
          onChange={(e) => setUnsatkeAmount(e.target.value)}
          placeholder="Enter Amount"
          id=""
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={async (contract) => {
            contract.call("unstake", [unstakeAmount]);
          }}
        >
          Unstake
        </Web3Button>
      </div>
    </div>
  );
};

export default Unstake;
