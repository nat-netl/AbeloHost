import { IUser } from "@/types/user";
import { create } from "zustand";
import { PersistStorage, persist } from "zustand/middleware";

interface AuthState {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
  logout: () => void;
}

const localStorageJSON: PersistStorage<AuthState> = {
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  getItem: (name) => {
    const str = localStorage.getItem(name);
    if (!str) {
      return null;
    }
    return JSON.parse(str);
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),
      logout: () => set({ user: null }),
    }),
    {
      name: "auth-storage",
      storage: localStorageJSON,
    },
  ),
);

export default useAuthStore;
