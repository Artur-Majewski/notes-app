
import { combineReducers, createStore } from "redux";
import { categorieReducer } from "../reducer/categorieReducer";
import { errorReducer } from "../reducer/error";
import { noteReducer } from "../reducer/noteReducer";


const rootReducer = combineReducers({
  notes: noteReducer,
  categories: categorieReducer,
  error: errorReducer,
})

export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>