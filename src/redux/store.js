import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk"; // Use named import for `thunk`
import reducers from "./reducers/index";

const store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;
