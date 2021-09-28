import AuthService from "../../services/AuthService";
import { IUser } from "../../models/IUser";
import { setUserIsRegistered } from "../reducers/auth";
import { setUserData } from "../reducers/user";


export const login = async (email: string, password: string) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);
    return async (dispatch:any) => {
      dispatch(setUserIsRegistered(true))
      dispatch(setUserData(response.data.user))
    }
  } catch (e: any) {
    console.log(e.response?.data?.message);
  }
}

export const registration = async (email: string, password: string) => {
  try {
    const response = await AuthService.registration(email, password);
    localStorage.setItem('token', response.data.accessToken);
    setUserIsRegistered(true);
    setUserData(response.data.user);

  } catch (e: any) {
    console.log(e.response?.data?.message);
  }
}

export const logout = async () => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem('token');
    setUserIsRegistered(false);
    setUserData({} as IUser);

  } catch (e: any) {
    console.log(e.response?.data?.message);
  }
}