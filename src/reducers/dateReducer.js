import {ADD_DATE} from "../actions/dateAction";

const initialState = {
    startDate: null,

}

export const dateReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_DATE:
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