import Head from "next/head";
import styles from "@/styles/Home.module.css";
import dynamic from "next/dynamic";

const CryptoCheckout = dynamic(
  () => import("amplify-sdk").then((mod) => mod.CryptoCheckout),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      <Head>
        <title>[AMPLIFY EXAMPLES] SDK with Next</title>
        <meta name="description" content="[AMPLIFY EXAMPLES] SDK with Next" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.amplifyContainer}>
          <CryptoCheckout
            createPaymentIntentUrl="https://f4c1-190-224-131-199.ngrok-free.app/api/amplify/intent"
            environment="test"
            language="ES"
            theme="dark"
            onError={(e) => console.log(e)}
          />
        </div>
      </main>
    </>
  );
}
