import changeNumber from "./upDown";

import {combineReducers} from "redux";

const rootRed = combineReducers({
    changeNumber:changeNumber,
})

export default rootRed;