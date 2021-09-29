import React, { FC, useState, useEffect } from "react";
import { login, registration } from "../../../store/actions/user";
import { useDispatch } from "react-redux";
import { setUserIsRegistered } from "../../../store/reducers/auth";
import { setUserData } from "../../../store/reducers/user";
import { checkAuth } from "../../../store/actions/user";
import { connect } from "react-redux";
import { IUser } from "../../../models/IUser";
import { Form, Input, Button, Select } from "antd";

interface IProps {
  isAuth: boolean;
  user: IUser;
}

const { Option } = Select;
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

  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    const { email, password, position } = values;
    registration(email, password, setIsAuth, setData);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
      <Form {...layout} form={form} name="registration" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input type="password" />
        </Form.Item>
        <Form.Item
          name="position"
          label="Должность"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select placeholder="Должность" allowClear>
            <Option value="trainer">Тренер</Option>
            <Option value="user">Пользователь</Option>
          </Select>
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Регистрация
          </Button>
        </Form.Item>
      </Form>
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
