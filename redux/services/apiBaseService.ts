import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, clearCredentials, Credentials } from '../slices/authSlice';
import { RootState } from '../store';

const HTTP_403_FORBIDDEN = 403
const HTTP_401_UNAUTHORIZED = 401

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://10.0.2.2:8000/api/v1/',
  credentials: 'include',
  prepareHeaders: (headers: Headers, { getState }) => {
    console.log('preparing headers...')
    const access = (getState as () => RootState)().auth.access;
    access && headers.set("authorization", `Bearer ${access}`)
    return headers;
  }
})

const baseQueryWithReauth = async (args: FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.status === HTTP_401_UNAUTHORIZED) {
    console.log('refreshing token');
    const refreshResult = await baseQuery("auth/token-refresh/", api, extraOptions);
    if (refreshResult?.data) {
      console.log('new token arrived', refreshResult?.data)
      api.dispatch(setCredentials({ ...refreshResult?.data as Credentials }))
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearCredentials())
    }
  }
  return result;
}

export const apiBaseService = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: builder => ({})
})