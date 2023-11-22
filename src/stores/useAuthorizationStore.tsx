import { AuthorizationStoreState } from "@/types/authorization.types";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { toast } from "src/components/ui/use-toast";

export const useAuthorizationStore = create<AuthorizationStoreState>()(
  immer((set) => ({
    username: "",
    authorized: false,
    loginUser: async (username, password) => {
      set((state) => {
        if (username !== "admin" || password !== "haslo123") {
          toast({
            variant: "destructive",
            title: "Uh oh! Something went wrong.",
            description: "There was a problem with your request.",
          });
          return;
        }
        state.authorized = true;
        state.username = username;
      });
    },
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

export const { loginUser, logoutUser, setUsername, setAuthorized } =
  useAuthorizationStore.getState();
