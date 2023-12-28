import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

const Web3Tokens = () => {
  const account = useAddress();

  // web3 token
  const { contract: web3contract } = useContract(
    import.meta.env.VITE_WEB3_CONTRACT_ADDRESS
  );
  const { data: web3TokenBalance, isLoadingTokenBalance } = useTokenBalance(
    web3contract,
    account
  );

  // rewards token
  const { contract: rewardcontract } = useContract(
    import.meta.env.VITE_REWARD_CONTRACT_ADDRESS
  );
  const { data: rewardtokenBalance, isLoadingRewardTokenBalance } =
    useTokenBalance(rewardcontract, account);

  return (
    <div className="p-6 bg-slate-400 rounded-lg ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
        {/* Web3 Token Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">{web3TokenBalance?.name}</h2>

          {isLoadingTokenBalance ? (
            <p className="text-gray-200">Loading...</p>
          ) : (
            <div>
              <p className="text-lg mt-2">
                User Balance: {web3TokenBalance?.displayValue}
              </p>
              <p className="text-lg">
                Token Symbol: {web3TokenBalance?.symbol}
              </p>
            </div>
          )}
        </div>

        {/* Rewards Token Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2">
            {rewardtokenBalance?.name}
          </h2>

          {isLoadingRewardTokenBalance ? (
            <p className="text-gray-200">Loading...</p>
          ) : (
            <div>
              <p className="text-lg mt-2">
                User Balance: {rewardtokenBalance?.displayValue}
              </p>
              <p className="text-lg">
                Token Symbol: {rewardtokenBalance?.symbol}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Web3Tokens;
