import "src/lib/tailwind.css";
import "../styles/global.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { AppShell, Header } from "@mantine/core";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>🦍katayama blog</title>
      </Head>
      <AppShell
        padding="md"
        header={
          <Header height={60} p="xs">
            <div className="mx-auto max-w-6xl">
              <Link href="/">
                <a className="no-underline">
                  <div className="text-xl font-extrabold">ゴリラブログ🦍</div>
                </a>
              </Link>
            </div>
          </Header>
        }
      >
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
      </AppShell>
    </>
  );
}

export default MyApp;
