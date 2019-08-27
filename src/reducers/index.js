import {combineReducers} from "redux";
import { prestationsReducer } from "./prestationsReducer";
import { shoppingReducer } from "./shoppingReducer";
import { addressReducer } from "./addressReducer";

export default combineReducers({
    prestationsReducer,
    shoppingReducer,
    addressReducer
});