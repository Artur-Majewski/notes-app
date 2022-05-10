import { categoriesTypes } from "../actionTypes/categorie";

export const addCategory = (categorieName: string) => ({
	type: categoriesTypes.ADD_CATEGORY,
	payload: categorieName,
});

export const removeCategory = (categorieName: string) => ({
	type: categoriesTypes.REMOVE_CATEGORY,
	payload: categorieName,
});