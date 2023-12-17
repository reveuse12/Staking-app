import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

const RewardWeb3 = () => {
  const account = useAddress();
  const { contract } = useContract(
    import.meta.env.VITE_REWARD_CONTRACT_ADDRESS
  );
  const { data: rewardtokenBalance, isLoadingTokenBalance } = useTokenBalance(
    contract,
    account
  );

  return (
    <div className="p-6 rounded-lg w-full shadow-md bg-gradient-to-br from-[#262a33] to-[#19202a] text-white">
      <div className="text-center">
        <h2 className="text-3xl text-[#f43550] font-bold mb-4">
          {rewardtokenBalance?.name}
        </h2>

        {isLoadingTokenBalance ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div>
            <p className="text-[#e7b7b6] mb-2">
              User Balance: {rewardtokenBalance?.displayValue}
            </p>
            <p className="text-[#e7b7b6]">
              Token Symbol: {rewardtokenBalance?.symbol}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardWeb3;
