import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hydrated: false,
  onboardingComplete: false,
  preferredLanguage: 'en',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setHydrated(state, action) {
      state.hydrated = action.payload;
    },
    setPreferredLanguage(state, action) {
      state.preferredLanguage = action.payload;
    },
    completeOnboarding(state) {
      state.onboardingComplete = true;
    },
    resetOnboarding(state) {
      state.onboardingComplete = false;
    },
  },
});

export const {
  setHydrated,
  setPreferredLanguage,
  completeOnboarding,
  resetOnboarding,
} = appSlice.actions;

export default appSlice.reducer;
