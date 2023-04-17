import Head from "next/head";
import Footer from "./Footer";
import NavBar from "./NavBar";

type Props = {
  children: JSX.Element;
};

const BaseLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="font-mono">
        <NavBar />
        <main className="px-4 sm:px-16 py-8">{children}</main>
        <Footer /> 
      </div>
    </>
  );
};

export default BaseLayout;
