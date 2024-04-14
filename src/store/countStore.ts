import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

// type State = {
//   count: number;
// };

// type Action = {
//   increment: (qty: number) => void;
//   decrement: (qty: number) => void;
// };

// export const useCountStore = create<State & Action>()(immer((set) => ({
//   count: 0,
//   increment: (qty: number) => set((state) => {state.count += qty}),
//   decrement: (qty: number) => set((state) => {state.count -= qty}),

// })))

interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const useCountStore = create<CountState>()(
  immer(
    persist(
      (set) => ({
        count: 0,
        increment: () =>
          set((state) => {
            ++state.count;
          }),
        decrement: () =>
          set((state) => {
            --state.count;
          }),
      }),
      {
        name: "count-store",
      }
    )
  )
);
