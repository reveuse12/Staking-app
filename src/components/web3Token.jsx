import { useAddress, useContract, useTokenBalance } from "@thirdweb-dev/react";

const Web3Token = () => {
  const account = useAddress();
  const { contract } = useContract(import.meta.env.VITE_WEB3_CONTRACT_ADDRESS);
  const { data: web3TokenBalance, isLoadingTokenBalance } = useTokenBalance(
    contract,
    account
  );
  return (
    <div className="p-6 rounded-lg w-full shadow-md bg-gradient-to-br from-[#262a33] to-[#19202a] text-white">
      <div className="text-center">
        <h2 className="text-3xl text-[#f43550] font-bold mb-4">
          {web3TokenBalance?.name}
        </h2>

        {isLoadingTokenBalance ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <div>
            <p className="text-[#e7b7b6] mb-2">
              User Balance: {web3TokenBalance?.displayValue}
            </p>
            <p className="text-[#e7b7b6]">
              Token Symbol: {web3TokenBalance?.symbol}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Web3Token;
