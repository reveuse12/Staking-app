import { useAddress, useTokenBalance } from "@thirdweb-dev/react";

const RewardWeb3Token = () => {
  const userAddress = useAddress();
  const { data: rewardWeb3Balance, isLoading: loadingBalance } =
    useTokenBalance(
      import.meta.env.VITE_REWARD_WEB3_TOKEN_ADDRESS,
      userAddress
    );
  return (
    <div className="bg-purple-500">
      <h2>Reward Web3 Token Info</h2>
      <p>
        {rewardWeb3Balance?.displayValue} {rewardWeb3Balance?.symbol}
      </p>
    </div>
  );
};

export default RewardWeb3Token;
