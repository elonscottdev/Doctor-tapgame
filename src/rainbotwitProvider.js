"use client";

import React from "react";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { bscTestnet, sepolia } from "wagmi/chains";

const config = getDefaultConfig({
  appName: "TapGame",
  projectId: process.env.REACT_APP_PROJECT_ID || "",
  chains: [bscTestnet],
  ssr: true,
});

const queryClient = new QueryClient();

export function RainbowKitWrapper({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
