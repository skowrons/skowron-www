import "skowron/styles/globals.css";
import type { AppProps } from "next/app";
import BaseLayout from "skowron/components/BaseLayout";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <BaseLayout>
        <Component {...pageProps} />
      </BaseLayout>
      <Analytics />
    </>
  );
}
