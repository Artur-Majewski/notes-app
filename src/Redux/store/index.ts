
import { combineReducers, createStore } from "redux";
import { categorieReducer } from "../reducer/categorieReducer";
import { noteReducer } from "../reducer/noteReducer";


const rootReducer = combineReducers({
  notes: noteReducer,
  categories: categorieReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>