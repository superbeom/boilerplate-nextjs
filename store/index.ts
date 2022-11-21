import create from "zustand";

import { Theme } from "@/types";
import { lightTheme } from "@/constants/colors";

interface StoreState {
  theme: Theme;
  currentTheme: string;
  updateTheme: (theme: Theme) => void;
}

const useStore = create<StoreState>((set) => ({
  theme: lightTheme,
  currentTheme: "light",
  updateTheme: (newTheme: Theme) => set(() => ({ theme: newTheme })),
}));

export default useStore;
