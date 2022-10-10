import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";

import Head from "next/head";

import Header from "../components/Header";
import ThirdwebGuideFooter from "../components/ThirdwebGuideFooter";
import "../styles/globals.css";



// This is the chainId your dApp will work on.
const activeChainId = ChainId.Arbitrum;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <Head>
        <title>Goblintrum</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Goblintrum"
        />
        <meta
          name="keywords"
          content="Goblintrum"
        />
      </Head>
      <Header />
      
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
      
    </ThirdwebProvider>
  );
}

export default MyApp;
