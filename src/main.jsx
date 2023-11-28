import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import.meta.env.VITE_CLIENT_API_KEY;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider
    activeChain="binance-testnet"
    clientId={import.meta.env.VITE_CLIENT_API_KEY}
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThirdwebProvider>
);
