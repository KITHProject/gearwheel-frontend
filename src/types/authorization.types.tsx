export type AuthorizationStoreState = {
  authorized: boolean;
  username: string;
  loginUser: (username: string, password: string) => void;
  logoutUser: () => void;
  setUsername: (name: string) => void;
  setAuthorized: (flag: boolean) => void;
};
