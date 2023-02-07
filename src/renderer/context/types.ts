export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  user: AuthUserType;
};

export type ActionType =
  | {
      type: 'LOGIN';
      payload: AuthUserType;
    }
  | {
      type: 'LOGOUT';
    };

export type AuthContextType = {
  user: AuthUserType;
  // eslint-disable-next-line no-unused-vars
  login: (username: string, password: string) => Promise<void>;
};
