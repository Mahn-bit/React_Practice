import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface UserProps {
  users: string[];
  updateUsers: (name: string) => void;
}

// export const useUserStore = create<UserProps>()((set) => ({
//   users: [],
//   updateUsers: (name) => set((state) => ({ users: [...state.users, name] })),
// }));

export const useUserStore = create<UserProps>()(
  immer((set) => ({
    users: [], 
    updateUsers: (name) =>
      set((state) => {
        state.users.push(name);
      }),
  }))
);
