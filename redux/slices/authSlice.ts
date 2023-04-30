import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Action } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode';

export interface Credentials {
  access: string;
  refresh: string;
  isLoggedIn: boolean;
}

export interface AuthState extends Credentials {
  username: string;
  userId: number;
}

const initialState: AuthState = {
  access: '',
  refresh: '',
  username: '',
  userId: 0,
  isLoggedIn: false,
}

export interface DecodedToken {
  token_type: "access" | "refresh";
  exp: number;
  iat: number;
  jti: string;
  user_id: number;
  username: string;
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<Credentials>) => {
      const { access, refresh } = action.payload;
      const decodedToken = jwtDecode<DecodedToken>(access);
      const username = decodedToken.username;
      const userId = decodedToken.user_id;
      return ({
        ...state,
        access,
        refresh,
        username,
        userId,
        isLoggedIn: true,
      })
    },
    clearCredentials: () => initialState
  },
})

export const { setCredentials, clearCredentials } = authSlice.actions

export default authSlice.reducer