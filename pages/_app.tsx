import "../styles/globals.css";

import React, { useEffect } from "react";
import type { AppProps } from "next/app";

import useStore from "@/store";

import { lightTheme, darkTheme } from "@/constants/colors";
import { THEME, LIGHT } from "@/constants/strings";

export default function App({ Component, pageProps }: AppProps) {
  const { updateTheme } = useStore();

  const preLoad = () => {
    const localTheme = localStorage.getItem(THEME) ?? LIGHT;
    updateTheme(localTheme === LIGHT ? lightTheme : darkTheme);
  };

  useEffect(() => {
    preLoad();
  }, []);

  return <Component {...pageProps} />;
}
