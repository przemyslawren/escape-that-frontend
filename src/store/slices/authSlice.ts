import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface AuthState {
  isAuthenticated: boolean;
  user: any;
  role: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  role: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async (
    loginRequestDto: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/login',
        loginRequestDto
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message || 'Login failed');
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authSuccess: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.loading = false;
      state.error = null;
    },
    authFail: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.role = action.payload.role;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.isAuthenticated = false;
      state.user = null;
      state.role = null;
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { authSuccess, authFail, logout } = authSlice.actions;

export default authSlice.reducer;
