import { errorTypes } from "../actionTypes/error";

export const activeError = (activate: boolean) => ({
	type: errorTypes.ACTIVE_ERROR,
	payload: activate,
});

export const sendErrorMessage = (message: string) => ({
	type: errorTypes.SEND_ERROR,
	payload: message,
});