import AuthService from "../../services/AuthService";
import { IUser } from "../../models/IUser";
import axios from "axios";
import { AuthResponse } from "../../models/response/authResponse";

const API_URL = `http://localhost:5000/api`;

export const login = async (
  email: string,
  password: string,
  setIsAuth: () => void,
  setData: (payload: IUser) => void
) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem("token", response.data.accessToken);
    setIsAuth();
    setData(response.data.user);
  } catch (e) {
    console.log(e);
    // console.log(e.response?.data?.message);
  }
};

export const registration = async (
  email: string,
  password: string,
  setIsAuth: () => void,
  setData: (payload: IUser) => void
) => {
  try {
    const response = await AuthService.registration(email, password);
    localStorage.setItem("token", response.data.accessToken);
    setIsAuth();
    setData(response.data.user);
  } catch (e) {
    console.log(e);
    // console.log(e.response?.data?.message);
  }
};

export const logout = async () => {
  try {
    const response = await AuthService.logout();
    localStorage.removeItem("token");
    // setUserIsRegistered();
    // setUserData({} as IUser);
  } catch (e) {
    console.log(e);
    // console.log(e.response?.data?.message);
  }
};

export const checkAuth = async (
  setIsAuth: () => void,
  setData: (payload: IUser) => void
) => {
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    setIsAuth();
    setData(response.data.user);
  } catch (e) {
    console.log(e);
    // console.log(e.response?.data?.message);
  }
};
