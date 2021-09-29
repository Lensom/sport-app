import { FC, useState, useEffect } from "react";
import { login } from "../../../store/actions/user";
import { useDispatch } from "react-redux";
import { setUserIsRegistered } from "../../../store/reducers/auth";
import { setUserData } from "../../../store/reducers/user";
import { checkAuth } from "../../../store/actions/user";
import { connect } from "react-redux";
import { IUser } from "../../../models/IUser";
import { Form, Input, Button } from "antd";
import styles from "./Login.module.scss";

interface IProps {
  isAuth: boolean;
  user: IUser;
}

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const Login: FC<IProps> = ({ isAuth, user }) => {
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

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { email, password } = values;
    login(email, password, setIsAuth, setData);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.login}>
        <Form {...layout} form={form} name="login" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="password" />
          </Form.Item>
          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </div>
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
