import React from "react";
import { Route, Redirect } from "react-router-dom";

interface IProps {
  isAuth: boolean;
  component: React.FunctionComponent<any>;
  path: string;
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  isAuth,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/authentification",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
