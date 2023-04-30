import { User } from "../slices/usersSlice";
import { apiBaseService } from "./apiBaseService";

export interface LoginData {
  email: string;
  password: string;
}

export const usersApiService = apiBaseService.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query<User, number>({
      query: (id) => ({
        url: `users/${id}/`,
      })
    }),
  })
})


export const { useGetUserByIdQuery } = usersApiService;