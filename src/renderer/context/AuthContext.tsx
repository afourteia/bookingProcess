import React, { createContext, useMemo, useReducer } from 'react';
import { ActionType, AuthContextType, AuthStateType } from './types';

const initialState: AuthStateType = {
  user: null,
};

const reducer = (state: AuthStateType, action: ActionType) => {
  if (action.type === 'LOGIN') {
    return {
      user: action.payload,
    };
  }

  return state;
};

const AuthContext = createContext<AuthContextType>(null!);

type AuthProviderProps = {
  children: React.ReactNode;
};

function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (username: string, password: string) => {
    fetch('https://dalilserver.onrender.com/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: 'LOGIN', payload: data });
        return data;
      })
      .catch((err) => console.error(err));
  };

  const memoizedValue = useMemo(
    () => ({
      user: state.user,
      login,
    }),
    [state.user]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
