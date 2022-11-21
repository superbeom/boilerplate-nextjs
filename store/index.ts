import create from "zustand";

import { Theme } from "@/types";
import { lightTheme } from "@/constants/themes";

interface StoreState {
  theme: Theme;
  updateTheme: (theme: Theme) => void;
}

const useStore = create<StoreState>((set) => ({
  theme: lightTheme,
  updateTheme: (newTheme: Theme) => set(() => ({ theme: newTheme })),
}));

export default useStore;
