import { errorTypes } from "../actionTypes/error";


let initialState = {
	isActive: false,
  message: '',
};

interface activeError {
  type: errorTypes.ACTIVE_ERROR;
  payload: boolean;
}

interface sendErrorMessage {
  type: errorTypes.SEND_ERROR;
  payload: string;
}


type Action = activeError | sendErrorMessage;

export const errorReducer = (state = initialState, action: Action ) => {
  switch (action.type) {

    case errorTypes.ACTIVE_ERROR: {
      return {
        ...state,
        isActive: action.payload,
      }
    }
    case errorTypes.SEND_ERROR: {
      return {
        ...state,
        message: action.payload
      }
    }
  }
  return state
}