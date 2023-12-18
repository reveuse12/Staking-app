import { toast } from "react-hot-toast";
import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";

const ClaimReward = () => {
  const [claimRewards, setClaimRewards] = useState(0);

  const handleClaim = async (contract) => {
    try {
      validateClaimAmount(claimRewards);

      await toast.promise(contract.call("claimRewards"));
      toast.success("Claim successful");
      setClaimRewards(0);
    } catch (error) {
      handleClaimError(error);
    }
  };

  const validateClaimAmount = (amount) => {
    if (!amount || isNaN(amount) || amount <= 0) {
      throw new Error("Please enter a valid amount to claim.");
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
    <div className="mx-auto w-full text-center bg-gradient-to-br from-[#262a33] to-[#19202a] mt-8 rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-4 text-[#f43550] ">
        Claim Your Web3 Rewards Tokens
      </h2>
      <div className="flex bg-[#5d97a8] p-4 rounded-lg shadow-md mb-4 items-center justify-center">
        <input
          type="number"
          placeholder="Enter Amount"
          value={claimRewards}
          onChange={(e) => setClaimRewards(e.target.value)}
          className="p-3 mr-2 border text-white border-gray-300 rounded focus:outline-none focus:border-white bg-gray-700"
        />
        <Web3Button
          contractAddress={import.meta.env.VITE_STAKING_CONTRACT_ADDRESS}
          action={handleClaim}
          className="bg-pink-700 text-white p-2 rounded cursor-pointer hover:bg-pink-700 hover:text-white"
        >
          Claim
        </Web3Button>
      </div>
    </div>
  );
};

export default ClaimReward;
