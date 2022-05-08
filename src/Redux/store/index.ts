import { configureStore } from "@reduxjs/toolkit";
import { notesSlice } from "../features/notes/notes-slice";

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>