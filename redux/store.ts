import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import usersReducer from './slices/usersSlice';
import { apiBaseService } from './services/apiBaseService'

export const store = configureStore({
  reducer: {
    [apiBaseService.reducerPath]: apiBaseService.reducer,
    auth: authReducer,
    users: usersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiBaseService.middleware),
  devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch