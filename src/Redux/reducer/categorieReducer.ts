import { v4 as uuid } from "uuid";
import { CategorieData } from "../../types/noteTypes";
import { categoriesTypes } from "../actionTypes/categorie"

const loadData = localStorage.getItem('categoriesList');
const basicCategories: CategorieData[] = [{
  id: "e2ec9fd9-6aef-4240-a7cd-d83f9ad11287",
  name: 'work'
},{
  id: "e2ec9fd9-6aef-4240-a7cd-d83f9ad11282",
  name: 'hobby'
}]

let initialState = {
	categories: Array<CategorieData>(),
  currentCategory: false,
};

if (loadData) {
	initialState.categories = JSON.parse(loadData);
} else {
  initialState.categories = basicCategories;
}

interface AddCategory {
  type: categoriesTypes.ADD_CATEGORY;
  payload: string;
}

interface RemoveCategory {
  type: categoriesTypes.REMOVE_CATEGORY;
  payload: string;
}


type Action = AddCategory | RemoveCategory;

export const categorieReducer = (state = initialState, action: Action ) => {
  switch (action.type) {

    case categoriesTypes.ADD_CATEGORY: {
      const newCategorie: CategorieData = {
        id: uuid(),
        name: action.payload
      }
      const newCategoriesList = [...state.categories, newCategorie]
      localStorage.setItem('categoriesList', JSON.stringify(newCategoriesList))
      return {
        ...state,
        categories: newCategoriesList,
      }
    }
    case categoriesTypes.REMOVE_CATEGORY: {
      const otherCategories = [...state.categories].filter(category => category.id !== action.payload)
      localStorage.setItem('categoriesList', JSON.stringify(otherCategories))
      return {
        ...state,
        categories: otherCategories
      }
    }
  }
  return state
}