import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface BearStateStore {
  bears: number;
  increasePopulation: () => void;
  removeBears: () => void;
}

export const useBearStore = create<BearStateStore>()(
  immer(
    persist(
      (set) => ({
        bears: 0,
        increasePopulation: () =>
          set((state) => {
            ++state.bears;
          }),
        removeBears: () => set({ bears: 0 }),
      }),
      {
        name: "bear-store",
      }
    )
  )
);
