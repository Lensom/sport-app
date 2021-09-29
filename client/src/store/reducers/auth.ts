import { SET_USER_IS_AUTH } from "../types";

interface IState {
  isAuth: boolean;
}

interface Action {
  type: 'SET_USER_IS_AUTH',
  isAuth: boolean;
}

const initialState = {
  isAuth: false,
}

const authReducer = (state:IState = initialState, action:Action) => {
  switch (action.type) {
    case SET_USER_IS_AUTH:
      return {
        ...state,
        isAuth: true
      }
    default:
      return state;
  }
}

export const setUserIsRegistered = () => ({type: SET_USER_IS_AUTH});

export default authReducer;
