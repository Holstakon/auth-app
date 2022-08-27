import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth: false,
  isLoading: true,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuth = action.payload
    },
    setUser: (state, action) => {
      state.user = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { setAuth, setUser, setLoading } = authSlice.actions

export default authSlice.reducer
