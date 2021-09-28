import { SET_USER } from "../types";

interface IState {
  email: string;
  id: string;
  isActivated: boolean;
}

interface Action {
  type: 'SET_USER',
  payload: boolean;
}

const initialState = {
  email: "",
  id: "",
  isActivated: false
}

const userReducer = (state:IState = initialState, action:Action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
}

export const setUserData = (payload:any) => ({type: SET_USER, payload})

export default userReducer;
