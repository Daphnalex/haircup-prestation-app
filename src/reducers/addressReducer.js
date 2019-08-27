import { SELECT_ADDRESS } from "../actions/addressSelectionAction";

const initialState = {
    address : ""
}

export const addressReducer = ( state = initialState, action) => {
    switch(action.type){
        case SELECT_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        default: 
            return state;
    }
}

export const getAddress = (state) => {
    return state.address;
}