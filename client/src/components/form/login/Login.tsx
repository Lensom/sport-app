import React, { FC, useState, useEffect } from "react";
import { login, registration } from "../../../store/actions/user";
import { useDispatch } from "react-redux";
import { setUserIsRegistered } from "../../../store/reducers/auth";
import { setUserData } from "../../../store/reducers/user";
import { checkAuth } from "../../../store/actions/user";
import { connect } from "react-redux";
import { IUser } from "../../../models/IUser";

interface IProps {
  isAuth: boolean;
  user: IUser;
}

const Login: FC<IProps> = ({ isAuth, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const setIsAuth = () => {
    dispatch(setUserIsRegistered());
  };
  const setData = (payload: any) => {
    dispatch(setUserData(payload));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth(setIsAuth, setData);
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => login(email, password, setIsAuth, setData)}>
        Логин
      </button>
      <button onClick={() => registration(email, password, setIsAuth, setData)}>
        Регистрация
      </button>

      {isAuth ? user.email : "Пользователь не найден"}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    user: state.user,
  };
};

export default connect(mapStateToProps)(Login);
