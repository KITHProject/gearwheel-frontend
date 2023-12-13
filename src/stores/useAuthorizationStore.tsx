import { AuthorizationStoreState } from "@/types/authorization.types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { jwtDecode } from "jwt-decode";

// export const decodeAccessToken = (accessToken: string) =>
//   TokenDataSchema.parse(jwtDecode<TokenData>(accessToken));

export const useAuthorizationStore = create<AuthorizationStoreState>()(
  immer((set) => ({
    username: "",
    authorized: false,

    accessToken: undefined,
    refreshToken: undefined,

    setAccessToken: (accessToken) => {
      set((state) => {
        state.accessToken = accessToken;
      });
    },

    setRefreshToken: (refreshToken) => {
      set((state) => {
        state.refreshToken = refreshToken;
      });
    },

    logoutUser: () => {
      set((state) => {
        state.authorized = false;
        state.username = "";
        state.accessToken = undefined;
        state.refreshToken = undefined;
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

export const {
  logoutUser,
  setUsername,
  setAuthorized,
  setAccessToken,
  setRefreshToken,
} = useAuthorizationStore.getState();
