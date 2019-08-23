import {FETCH_PRESTATIONS_PENDING, FETCH_PRESTATIONS_SUCCESS, FETCH_PRESTATIONS_ERROR} from "../actions/prestationsAction";

const initialState = {
    pending: false,
    prestations: [],
    error: null
}

export const prestationsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRESTATIONS_PENDING:
            console.log("reducer prestations case 1",state)
            return {
                ...state,
                pending: true
            }
        case FETCH_PRESTATIONS_SUCCESS:
            console.log("reducer prestations case 2",state)
            console.log(action.payload)
            return {
                ...state,
                prestations: action.payload,
                pending: false
            }
        case FETCH_PRESTATIONS_ERROR:
            console.log("reducer prestations case 3",state)
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const getPrestations = (state) => {
    return state.prestations
};

export const getPrestationsPending = (state) => {
    return state.pending;
};

export const getPrestationsError = (state) => {
    return state.error;
};