import { ADD_ADDRESS } from "../actions/addressAction";

if (!localStorage.address){
    localStorage.setItem('address',"");
};

const initialState = {
    address : ""
}

if (localStorage.address !== ""){
    initialState.address = JSON.parse(localStorage.address);
}

export const addressReducer = ( state = initialState, action) => {
    switch(action.type){
        case ADD_ADDRESS:
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