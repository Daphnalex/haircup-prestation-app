import {combineReducers} from "redux";
import { prestationsReducer } from "./prestationsReducer";
import { shoppingReducer } from "./shoppingReducer";
import { addressReducer } from "./addressReducer";
import {dateReducer} from "./dateReducer";

export default combineReducers({
    prestationsReducer,
    shoppingReducer,
    addressReducer,
    dateReducer
});