import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer as formReduser } from "redux-form";
// import thunkMiddleware from "redux-thunk";
import NewsReduser from "./SingleNews";
import langReducer from './langReducer';
const rootReducers = combineReducers({
  form: formReduser,
  news: NewsReduser,
  langReducer,
});
const compoceEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducers,
  compoceEnhancers(applyMiddleware())
);

window.__store__ = store;

export default store;
