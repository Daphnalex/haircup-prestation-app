import {SELECT_DATE} from "../actions/dateSelectionAction";

const initialState = {
    startDate: null,

}

export const dateReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_DATE:
            return {
                startDate: action.payload
            };
        default: 
            return state;
    }
}

export const getDate = (state) => {
    return state.startDate;
}