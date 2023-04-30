import { RootState } from "../store";

export const authSelector = (state: RootState) => state.auth;
export const usernameSelector = (state: RootState) => state.auth.username;
export const accessSelector = (state: RootState) => state.auth.access;
export const refreshSelector = (state: RootState) => state.auth.refresh;
export const userIdSelector = (state: RootState) => state.auth.userId;
export const isLoggedInSelector = (state: RootState) => state.auth.isLoggedIn;