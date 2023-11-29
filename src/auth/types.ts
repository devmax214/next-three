export type ActionMapType<
  M extends {
    [index: string]: any;
  }
> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export type AuthUserType = null | Record<string, any>;

export type AuthStateType = {
  status?: string;
  loading: boolean;
  user: AuthUserType;
};

export type JWTContextType = {
  user: AuthUserType;
  loading: boolean;
  authenticated: boolean;
  unauthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    phone: string,
    country: string,
    street: string,
    city: string,
    postalCode: string
  ) => Promise<void>;
  logout: () => Promise<void>;
};

export type JWTDeCode = {
  firstname: string;
  lastname: string;
  email: string;
};
