import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Main = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/authentification">authentification</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Main;
