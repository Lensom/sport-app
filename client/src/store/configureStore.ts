import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import auth from "./reducers/auth";
import user from "./reducers/user";

const ConfigureStore = () => {
  const appReducer = combineReducers({
    user: user,
    auth: auth
  })


  return createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}

export default ConfigureStore;