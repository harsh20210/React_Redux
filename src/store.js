import {createStore} from "redux";
import rootRed from "./reducers/index";

const store = createStore(rootRed);

export default store;