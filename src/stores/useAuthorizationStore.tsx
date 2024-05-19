import { AuthorizationStoreState } from "@/types/authorization.types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useAuthorizationStore = create<AuthorizationStoreState>()(
  immer((set) => ({
    username: "",
    authorized: false,
    isStaff: false,
    logoutUser: () => {
      set((state) => {
        state.authorized = false;
        state.username = "";
      });

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("staff");
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
    setIsStaff: (flag) => {
      set((state) => {
        state.isStaff = flag;
      });
    },
  }))
);

export const { logoutUser, setUsername, setAuthorized, setIsStaff } =
  useAuthorizationStore.getState();
