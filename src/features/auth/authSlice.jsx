import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk('auth/login', async (credentials, { rejectWithValue }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email === credentials.email && storedUser.password === credentials.password) {
    return storedUser;
  } else {
    return rejectWithValue('Invalid email or password');
  }
});

export const signup = createAsyncThunk('auth/signup', async (userInfo, { rejectWithValue }) => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    return rejectWithValue('User already exists');
  } else {
    localStorage.setItem('user', JSON.stringify(userInfo));
    return userInfo;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
