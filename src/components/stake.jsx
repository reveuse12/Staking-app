import { Web3Button, useContract } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";

const Stake = () => {
  const [stakeAmout, setStakeAmount] = useState(0);

  const { contract: stakeContract } = useContract(
    import.meta.env.VITE_STAKING_CONTRACT_ADDRESS
  );

  return (
    <div>
      <h1 className="text-3xl text-center text-red-500">
        Stake you token here
      </h1>
      <div>
        <label htmlFor="Stake ">Stake you Web3Tokens</label>
        <input
          type="text"
          placeholder="Enter Token Value"
          value={stakeAmout}
          onChange={(e) => setStakeAmount(e.target.value)}
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={async (contract) => {
            contract.call("stake", [100000]);
          }}
        >
          Stake
        </Web3Button>
      </div>
    </div>
  );
};

export default Stake;
