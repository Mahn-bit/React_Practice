import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface FoodState {
  fish: number;
  addOneFish: () => void;
  removeOnefish: () => void;
  removeAllFish: () => void;
}

export const useFishStore = create<FoodState>()(
  immer(
    persist(
      (set) => ({
        fish: 0,
        addOneFish: () =>
          set((state) => {
            ++state.fish;
          }),
        removeOnefish: () =>
          set((state) => {
            --state.fish;
          }),
        removeAllFish: () => set({ fish: 0 }),
      }),
      {
        name: "food store",
      }
    )
  )
);
