import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { cacheExchange, Client, Provider, fetchExchange } from "urql";

const client = new Client({
  url: "https://spacex-production.up.railway.app/",
  exchanges: [cacheExchange, fetchExchange],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
