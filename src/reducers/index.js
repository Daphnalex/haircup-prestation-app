import {combineReducers} from "redux";
import { prestationsReducer } from "./prestationsReducer";
import { shoppingReducer } from "./shoppingReducer";

export default combineReducers({
    prestationsReducer,
    shoppingReducer
});