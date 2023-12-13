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
  username: string;
  authorized: boolean;

  accessToken: string | undefined;
  refreshToken: string | undefined;

  setAccessToken: (accessToken: string | undefined) => void;
  setRefreshToken: (refreshToken: string | undefined) => void;

  logoutUser: () => void;
  setUsername: (name: string) => void;
  setAuthorized: (flag: boolean) => void;
};
