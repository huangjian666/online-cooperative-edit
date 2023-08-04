import { createSlice } from "@reduxjs/toolkit";

import { layoutModeTypes } from "@/common/layout-switch";

interface editStateType {
  layoutMode: layoutModeTypes;
}

const initialState = {
  layoutMode: "right",
} as editStateType;

const homeSlice = createSlice({
  name: "edit",
  initialState,
  reducers: {
    switchLayoutMode(state, action) {
      const { payload } = action;
      state.layoutMode = payload;
    },
  },
  extraReducers: () => {},
});

export const { switchLayoutMode } = homeSlice.actions;

export default homeSlice.reducer;