"use client";

import { useMemo, PropsWithChildren } from "react";
import {
  cacheExchange,
  UrqlProvider,
  ssrExchange,
  fetchExchange,
  createClient,
} from "@urql/next";

export function GQLProvider({ children }: PropsWithChildren) {
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange();
    const client = createClient({
      url: "https://spacex-production.up.railway.app/",
      exchanges: [cacheExchange, ssr, fetchExchange],
      suspense: true,
    });

    return [client, ssr];
  }, []);

  return (
    <UrqlProvider client={client} ssr={ssr}>
      {children}
    </UrqlProvider>
  );
}
