import { combineReducers } from "redux"

import howToReducer from "./howToReducer"
import userReducer from "./userReducer"

const rootReducer = combineReducers({
    howToReducer,
    userReducer
})

export default rootReducer;