
import { combineReducers, createStore } from "redux";
import { noteReducer } from "../reducer/noteReducer";


const rootReducer = combineReducers({
  notes: noteReducer
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>