import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Maximilian Skowron</title>
        <meta
          name="description"
          content="Personal website for Maximilian Skowron"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* TODO: replace with own favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex md:flex-row flex-col-reverse flex-start items-center justify-center">
          <div className="max-w-xl text-center md:mr-16">
            <p className="pb-4">
              &quot;Informatik ist keine Kunst. Es ist eine Ingenieursdisziplin.
              Es gilt die bestmögliche Lösung mit gegebenen Werkzeugen und
              Anforderungen zu finden.&quot;
            </p>
            <p>- Maximilian Skowron</p>
          </div>
          <Image
            src={"/max-skow.jpg"}
            alt={"Photo of Maximilian Skowron"}
            width="250"
            height="250"
            className="rounded-full border-2 border-orange-500 md:mb-0 mb-16"
          ></Image>
        </div>
      </main>
    </>
  );
}
