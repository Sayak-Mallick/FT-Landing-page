import { createSlice } from '@reduxjs/toolkit';

interface UIState {
  isMobileMenuOpen: boolean;
  activeProject: string | null;
  currentTestimonial: number;
}

const initialState: UIState = {
  isMobileMenuOpen: false,
  activeProject: null,
  currentTestimonial: 0,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false;
    },
    setActiveProject: (state, action) => {
      state.activeProject = action.payload;
    },
    setCurrentTestimonial: (state, action) => {
      state.currentTestimonial = action.payload;
    },
  },
});

export const { toggleMobileMenu, closeMobileMenu, setActiveProject, setCurrentTestimonial } = uiSlice.actions;
export default uiSlice.reducer;