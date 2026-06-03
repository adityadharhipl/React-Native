import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hydrated: false,
  isSignedIn: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthHydrated(state, action) {
      state.hydrated = action.payload;
    },
    signIn(state, action) {
      state.isSignedIn = true;
      state.user = action.payload;
    },
    signUp(state, action) {
      state.isSignedIn = true;
      state.user = action.payload;
    },
    signOut(state) {
      state.isSignedIn = false;
      state.user = null;
    },
  },
});

export const { setAuthHydrated, signIn, signUp, signOut } = authSlice.actions;

export default authSlice.reducer;
