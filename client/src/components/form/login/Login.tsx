import React, { FC, useState } from "react";
import { login, registration } from "../../../store/actions/user";

const Login: FC = () => {
  const [email, setEmail] = useState('');;
  const [password, setPassword] = useState('');
  return (
    <div>
      <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={() => login(email, password)}>Логин</button>
      <button onClick={() => registration(email, password)}>Регистрация</button>
    </div>
  )
}



export default Login