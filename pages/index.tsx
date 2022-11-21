import React from "react";

import useStore from "@/store";
import { THEME, LIGHT, DARK } from "@/constants/strings";

const Home = () => {
  const { theme, updateTheme } = useStore();

  return (
    <div className="h-screen flex">
      HOME
      <button
        className="w-24 h-24 bg-primary"
        onClick={() => {
          updateTheme(theme === LIGHT ? DARK : LIGHT);
          localStorage.setItem(THEME, theme === LIGHT ? DARK : LIGHT);
        }}
      >
        TOGGLE
      </button>
    </div>
  );
};

export default Home;
