import React, { useCallback, useEffect, useMemo, useReducer } from "react";
import { AuthContext } from "./JwtContext";
import { ActionMapType, AuthStateType, AuthUserType } from "@/auth/types";
import { endpoints } from "../../global-config";
import axios from "@/utils/axios";
import { isValidToken, setSession } from "@/auth/utils";

enum Types {
  INITIAL = "INITIAL",
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  LOGOUT = "LOGOUT",
}

type Payload = {
  [Types.INITIAL]: {
    user: AuthUserType;
  };
  [Types.LOGIN]: {
    user: AuthUserType;
  };
  [Types.REGISTER]: {
    user: AuthUserType;
  };
  [Types.LOGOUT]: undefined;
};

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>];

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      loading: false,
      user: action.payload.user,
    };
  }
  if (action.type === Types.LOGIN) {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === Types.REGISTER) {
    return {
      ...state,
      user: action.payload.user,
    };
  }

  if (action.type === Types.LOGOUT) {
    return {
      ...state,
      user: null,
    };
  }
  return state;
};

const initialState: AuthStateType = {
  user: null,
  loading: true,
};

type Props = {
  children: React.ReactNode;
};

const STORAGE_KEY = "accessToken";

export function AuthProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const initialize = useCallback(async () => {
    try {
      const accessToken = sessionStorage.getItem(STORAGE_KEY);

      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        const response = await axios.get(endpoints.auth.me);

        const { user } = response.data;
        dispatch({
          type: Types.INITIAL,
          payload: {
            user,
          },
        });
      } else {
        dispatch({
          type: Types.INITIAL,
          payload: {
            user: null,
          },
        });
      }
    } catch (e) {
      dispatch({
        type: Types.INITIAL,
        payload: {
          user: null,
        },
      });
    }
  }, []);

  useEffect(() => {
    initialize();
  }, [initialize]);

  const login = useCallback(async (email: string, password: string) => {
    const data = {
      email,
      password,
    };

    const response = await axios.post(endpoints.auth.login, data);

    const { accessToken, user } = response.data;

    setSession(accessToken);

    dispatch({
      type: Types.LOGIN,
      payload: {
        user,
      },
    });
  }, []);

  const register = useCallback(
    async (
      firstname: string,
      lastname: string,
      email: string,
      password: string,
      phone: string,
      country: string,
      street: string,
      city: string,
      postal: string
    ) => {
      const data = {
        firstname,
        lastname,
        email,
        password,
        phone,
        country,
        street,
        city,
        postal,
      };

      const response = await axios.post(endpoints.auth.register, data);
    },
    []
  );

  const logout = useCallback(async () => {
    setSession(null);

    dispatch({
      type: Types.LOGOUT,
    });
  }, []);

  const checkAuthenticated = state.user ? "authenticated" : "unauthenticated";

  const status = state.loading ? "loading" : checkAuthenticated;

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      loading: status === "loading",
      authenticated: status === "authenticated",
      unauthenticated: status === "unauthenticated",
      //
      login,
      register,
      logout,
    }),
    [login, logout, register, state.user, status]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
