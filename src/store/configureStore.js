import { createStore, combineReducers } from "redux";
import scrutReducer from '../reducers/scrutdata'
//Store Creation
export default () => {
  const store = createStore(scrutReducer
    )
  return store;
};
