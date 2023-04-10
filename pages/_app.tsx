import 'skowron/styles/globals.css'
import type { AppProps } from 'next/app'
import BaseLayout from 'skowron/components/BaseLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <BaseLayout>
    <Component {...pageProps} />
  </BaseLayout>
  );
}
