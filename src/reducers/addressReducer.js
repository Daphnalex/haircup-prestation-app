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
    console.log("state address",state.address);
    console.log('type',typeof(JSON.parse(localStorage.address)));
    console.log("localstorage",localStorage);
    if (state.address === ""){
        console.log('ici')
        return JSON.parse(localStorage.address);
    } else {
        return state.address;
   }
    
}