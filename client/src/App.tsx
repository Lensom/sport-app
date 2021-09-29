import { Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from "./hoc/PrivateRoute";
import Authentification from "./pages/authentication/Authentication";
import Main from "./pages/main/Main";
import history from "./history";
import { useSelector } from "react-redux";

const App = () => {
  const isAuth = useSelector((state: any) => state?.auth?.isAuth);
  console.log(isAuth);

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/authentification" component={Authentification} />
        <Route exact path="/" component={Main} />
        {/* <PrivateRoute isAuth={isAuth} path="/" component={Main} /> */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
