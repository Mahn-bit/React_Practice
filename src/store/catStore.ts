import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { createSelectors } from "../utils/createSelectors";
import { persist } from "zustand/middleware";

interface CatProps {
  smallCats: number;
  bigCats: number;
}

interface CatStateStore {
  cats: CatProps;
  increaseSmallCats: () => void;
  increaseBigcats: () => void;
}

// export const useCatStore = create<CatStateStore>()((set) => ({
//   cats: {
//     smallCats: 0,
//     bigCats: 0,
//   },
//   increaseSmallCats: () =>
//     set((state) => ({
//       cats: {
//         ...state.cats,
//         smallCats: state.cats.smallCats + 1,
//       },
//     })),
//   increaseBigcats: () =>
//     set((state) => ({
//       cats: { ...state.cats, bigCats: state.cats.bigCats + 1 },
//     })),
// }));

export const useCatStore = create<CatStateStore>()(
  immer(
    persist(
      (set) => ({
        cats: {
          smallCats: 0,
          bigCats: 0,
        },
        increaseSmallCats: () =>
          set((state) => {
            ++state.cats.smallCats;
          }),
        increaseBigcats: () =>
          set((state) => {
            ++state.cats.bigCats;
          }),
      }),
      { name: "cat-store" }
    )
  )
);
