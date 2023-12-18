import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import { useState } from "react";
import toast from "react-hot-toast";

const Stake = () => {
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

  return (
    <div className="text-center w-full mt-8 p-6 bg-gradient-to-br from-[#262a33] to-[#19202a] text-white rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-[#f43550] mb-4">
        Stake your Web3 Token
      </h2>

      {["Stake", "Withdraw"].map((actionType, index) => (
        <div key={index} className="bg-[#5d97a8] p-4 rounded-md mb-4">
          <input
            type="Number"
            placeholder={`Enter ${actionType} Amount`}
            value={actionType === "Stake" ? stakeAmount : withdrawAmount}
            onChange={(e) =>
              actionType === "Stake"
                ? setStakeAmount(e.target.value)
                : setWithdrawAmount(e.target.value)
            }
            className="p-3 mr-2 bg-gray-700 text-white rounded-md"
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
            className={`mt-2 ${
              actionType === "Stake"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } text-white py-2 px-4 rounded-md cursor-pointer`}
          >
            {actionType}
          </Web3Button>
        </div>
      ))}
    </div>
  );
};

export default Stake;
