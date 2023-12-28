import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";

const Stakes = () => {
  const [stakeAmount, setStakeAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  const handleStake = async (contract, amount, actionType) => {
    try {
      if (!amount || isNaN(amount) || amount <= 0) {
        throw new Error(`Please enter a valid amount to ${actionType}.`);
      }

      await contract
        .call(actionType, [ethers.utils.parseEther(amount)])
        .then(() => toast.success(`${actionType} successfully`));

      // Reset the input field
      actionType === "stake" ? setStakeAmount(0) : setWithdrawAmount(0);
    } catch (error) {
      console.error(`Error ${actionType}ing:`, error);

      let errorMessage = `An error occurred while ${actionType}ing. Please try again.`;

      if (error.message) {
        errorMessage = error.message;
      }

      toast.error(errorMessage);
    }
  };

  const handleClaim = async (contract) => {
    try {
      await toast.promise(contract.call("claimRewards"));
      toast.success("Claim successful");
    } catch (error) {
      handleClaimError(error);
    }
  };

  const handleClaimError = (error) => {
    console.error("Error claiming rewards:", error);

    let errorMessage =
      "An error occurred while claiming rewards. Please try again.";

    if (error.message) {
      errorMessage = error.message;
    }

    toast.error(errorMessage);
  };

  return (
    <div className="p-6 bg-slate-400 text-black rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-4xl font-bold mb-6">Stake your Web3 Token</h2>
          {["Stake", "Withdraw"].map((actionType, index) => (
            <div key={index} className="mb-6">
              <input
                type="Number"
                placeholder={`Enter ${actionType} Amount`}
                value={actionType === "Stake" ? stakeAmount : withdrawAmount}
                onChange={(e) =>
                  actionType === "Stake"
                    ? setStakeAmount(e.target.value)
                    : setWithdrawAmount(e.target.value)
                }
                className="p-4 bg-gray-800 text-white rounded-md w-full focus:outline-none"
              />
              <Web3Button
                contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
                action={(contract) =>
                  handleStake(
                    contract,
                    actionType === "Stake" ? stakeAmount : withdrawAmount,
                    actionType.toLowerCase()
                  )
                }
                className={`mt-4 ${
                  actionType === "Stake"
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-orange-500 hover:bg-orange-600"
                } text-white py-3 px-6 rounded-md cursor-pointer transition duration-300`}
              >
                {actionType}
              </Web3Button>
            </div>
          ))}
          <h2 className="text-4xl font-bold mb-6">
            Claim Your Web3 Rewards Tokens
          </h2>
          <div className="mb-6">
            <Web3Button
              contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
              action={handleClaim}
              className="bg-purple-700 text-white p-3 rounded cursor-pointer hover:bg-purple-800 hover:text-white transition duration-300"
            >
              Claim All
            </Web3Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stakes;
