import "../styles/globals.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import useStore from "@/store";
import useDebounce from "@/hooks/useDebounce";

import { THEME, LIGHT, DARK } from "@/constants/strings";

const App = ({ Component, pageProps }: AppProps) => {
  const { theme, updateTheme } = useStore();

  const preLoad = useDebounce(() => {
    const localTheme = localStorage.getItem(THEME) ?? LIGHT;
    updateTheme(localTheme === LIGHT ? LIGHT : DARK);
  });

  useEffect(() => {
    preLoad();
  }, []);

  return (
    <div
      className={`${theme === DARK ? "dark" : ""} bg-background text-content`}
    >
      <Head>
        <title>Boilerplate</title>
        <meta name="description" content="This is description" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <header></header>

      <main>
        <Component {...pageProps} />;
      </main>

      <footer></footer>
    </div>
  );
};

export default App;
