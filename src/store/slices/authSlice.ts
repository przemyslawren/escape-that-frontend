import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../config/axios';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  role: string | null;
  id: number | null;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  role: null,
  id: null,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (
    loginRequest: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post('/auth/login', loginRequest);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.id = null;
      state.error = null;
    },
    authSuccess(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.error = null;
    },
    authFail(state, action) {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.id = null;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.id = action.payload.id;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.id = null;
      state.error = action.payload as string;
    });
  },
});

export const { logout, authSuccess, authFail } = authSlice.actions;

export default authSlice.reducer;
