import { AuthorizationStoreState } from "@/types/authorization.types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist } from "zustand/middleware";
export const useAuthorizationStore = create<AuthorizationStoreState>()(
  immer((set) => ({
    username: "",
    authorized: localStorage.getItem("token") ? true : false,

    logoutUser: () => {
      set((state) => {
        state.authorized = false;
        state.username = "";
      });
    },
    setUsername: (name) => {
      set((state) => {
        state.username = name;
      });
    },
    setAuthorized: (flag) => {
      set((state) => {
        state.authorized = flag;
      });
    },
  }))
);

export const { logoutUser, setUsername, setAuthorized } =
  useAuthorizationStore.getState();
