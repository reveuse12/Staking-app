import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Toaster } from "react-hot-toast";
import.meta.env.VITE_THIRDWEB_CLIENT_ID;

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThirdwebProvider
    activeChain="binance-testnet"
    clientId={import.meta.env.VITE_THIRDWEB_CLIENT_ID}
  >
    <React.StrictMode>
      <App />
      <Toaster
        toastOptions={{
          className: "bg-white ",
        }}
      />
    </React.StrictMode>
  </ThirdwebProvider>
);
