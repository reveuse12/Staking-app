import { useState } from "react";
import { Web3Button } from "@thirdweb-dev/react";
import { ethers } from "ethers";
import toast from "react-hot-toast";

const GetToken = () => {
  const [tokenAmount, setTokenAmount] = useState(0);
  const [rewardToken, setRewardToken] = useState(0);

  const from = import.meta.env.VITE_MY_ACCOUNT_ADDRESS || "";
  const to = import.meta.env.VITE_MY_ACCOUNT2_ADDRESS || "";

  const handleTokenTransfer = async (contract, amount, tokenType) => {
    try {
      const parsedAmount = ethers.utils.parseEther(amount);
      await contract.call("transferFrom", [from, to, parsedAmount]);
      toast.success(`Successfully transferred ${tokenType} tokens.`);
      setTokenAmount(0);
      setRewardToken(0);
    } catch (error) {
      console.error(`Error transferring ${tokenType} token:`, error);
      toast.error(`Error transferring ${tokenType} token. Please try again.`);
    }
  };

  return (
    <div id="container" className=" min-h-screen  p-8">
      <h1 className="text-4xl text-gray-600 underline decoration-pink-500 text-center font-bold p-4">
        Testing Token For Staking App
      </h1>
      <div className="flex flex-col md:flex-col justify-evenly items-center p-8 ">
        <div className="text-center">
          <h1 className="text-4xl text-gray-600 font-semibold">
            Get your Web3 Token for Staking
          </h1>
          <label htmlFor="gettoken" className="text-gray-400 block mt-4">
            Enter a Token amount
          </label>
          <input
            type="number"
            placeholder="Amount"
            value={tokenAmount}
            onChange={(e) => setTokenAmount(e.target.value)}
            className="border text-black border-gray-900 rounded px-3 py-3 mt-2 mr-3 focus:outline-none focus:border-[#f43550] bg-gray-200"
          />
          <Web3Button
            contractAddress={import.meta.env.VITE_WEB3_CONTRACT_ADDRESS}
            className="bg-[#f43550] text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:bg-[#f54165]"
            action={(contract) =>
              handleTokenTransfer(contract, tokenAmount, "Web3")
            }
          >
            Get Web3 Token
          </Web3Button>
        </div>
        <div className="text-center">
          <h1 className="text-4xl text-gray-600 font-semibold">
            Get your Reward Web3 Token for Staking
          </h1>
          <label htmlFor="getTokenReward" className="text-gray-400 block mt-4">
            Get your Reward Tokens
          </label>
          <input
            type="number"
            placeholder="Amount"
            value={rewardToken}
            onChange={(e) => setRewardToken(e.target.value)}
            className="border text-black border-gray-900 rounded px-3 py-3 mt-2 mr-3 focus:outline-none focus:border-[#f43550] bg-slate-200"
          />
          <Web3Button
            contractAddress={import.meta.env.VITE_REWARD_CONTRACT_ADDRESS}
            className="bg-[#f43550] text-white px-4 py-2 rounded-lg mt-4 cursor-pointer hover:bg-[#f54165]"
            action={(contract) =>
              handleTokenTransfer(contract, rewardToken, "Reward")
            }
          >
            Get Reward Token
          </Web3Button>
        </div>
      </div>
    </div>
  );
};

export default GetToken;
