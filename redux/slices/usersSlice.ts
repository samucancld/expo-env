import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Action } from '@reduxjs/toolkit'
import jwtDecode from 'jwt-decode';

export interface Model {
  id: string | number;
}

export interface User extends Model {
  email: string;
  username: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
}

export interface UsersState {
  actualUser: User | null;
  users: User[];
}

const initialState: UsersState = {
  actualUser: null,
  users: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      const actualUser = action.payload;
      return ({ ...state, actualUser })
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      const users = action.payload;
      return ({ ...state, users })
    },
    clearActualUser: (state) => ({ ...state, actualUser: null }),
    clearUsers: (state) => ({ ...state, users: [] }),
    clearUsersState: () => initialState,
  },
})

export const { setUser, setUsers, clearActualUser, clearUsers, clearUsersState } = usersSlice.actions

export default usersSlice.reducer