import { categoriesTypes } from "../actionTypes/categorie";
import { addNewCategory } from "../../types/noteTypes";

export const addCategory = (newCateogry: addNewCategory) => ({
	type: categoriesTypes.ADD_CATEGORY,
	payload: newCateogry,
});


export const removeCategory = (categorieName: string) => ({
	type: categoriesTypes.REMOVE_CATEGORY,
	payload: categorieName,
});