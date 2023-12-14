import { Web3Button } from "@thirdweb-dev/react";
import React from "react";

const AirDrop = () => {
  const [airdropAmount, setAirdropAmount] = React.useState(0);
  return (
    <div>
      <h2>AirDrop to Accounts</h2>
      <p>
        AirDrop to accounts is a feature that allows you to send tokens to
        specific addresses.
      </p>
      <div>
        <input
          type="number"
          name="airdropamount"
          onChange={(e) => setAirdropAmount(e.target.value)}
          placeholder="Enter Amount"
          value={airdropAmount}
          id=""
        />
        <Web3Button
          contractAddress="0x5FbDB2315678afecb367f032d93F642f64180aa3"
          action={(contract) => contract.call("airdrop", [airdropAmount])}
          //          action={(contract) => contract.call("airdrop", [airdropAmount])}
          onSuccess={() => alert("Airdrop Successful")}
          onError={(err) => alert(err)}
          //          onError={(err) => console.log(err)}
          accentColor="#F97316"
          //          accentColor="red"
          color="white"
          //          color="black"
          style={{
            backgroundColor: "#F97316",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          //          style={{
          //            backgroundColor: "red",
          //            color: "white",
          //            border: "none",
        >
          Airdrop
        </Web3Button>
      </div>
    </div>
  );
};

export default AirDrop;
