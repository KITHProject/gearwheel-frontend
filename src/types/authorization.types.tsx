export type LoginInput = {
  username: string;
  email: string;
  password: string;
};
export type AuthorizationStoreState = {
  username: string;
  email: string;
  authorized: boolean;
  logoutUser: () => void;
  setUsername: (name: string) => void;
  setAuthorized: (flag: boolean) => void;
};
