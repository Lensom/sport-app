import Login from "../../components/form/login/Login";
import Registration from "../../components/form/registration/Registration";
import logo from "../../global/img/logo.svg";
import styles from "./Authentication.module.scss";
import { Tabs } from "antd";

const Authentification = () => {
  const { TabPane } = Tabs;
  return (
    <div className={styles.auth}>
      <div className={styles.form}>
        <div className={styles.logotype}>
          <img src={logo} alt="Sport app" />
        </div>
        <Tabs defaultActiveKey="login" className={styles.tabs}>
          <TabPane tab="Войти" key="login">
            <Login />
          </TabPane>
          <TabPane tab="Регистрация" key="registration">
            <Registration />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default Authentification;
