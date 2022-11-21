import create from "zustand";

interface StoreState {
  theme: string;
  updateTheme: (theme: string) => void;
}

const useStore = create<StoreState>((set) => ({
  theme: "light",
  updateTheme: (newTheme: string) => set(() => ({ theme: newTheme })),
}));

export default useStore;
