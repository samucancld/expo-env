import { apiBaseService } from "./apiBaseService";

export interface LoginData {
  email: string;
  password: string;
}

export const authApiService = apiBaseService.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: (loginData: LoginData) => ({
        url: 'auth/token-obtain/',
        method: 'POST',
        body: { ...loginData }
      })
    }),
  })
})


export const { useLoginMutation } = authApiService;