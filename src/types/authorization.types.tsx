export type LoginInput = {
  username: string;
  password: string;
};

export type RegisterInput = {
  username: string;
  email: string;
  password1: string;
  password2: string;
};
export type AuthorizationStoreState = {
  username: string | null;
  authorized: boolean;

  logoutUser: () => void;
  setUsername: (name: string | null) => void;
  setAuthorized: (flag: boolean) => void;
};
