import {FETCH_PRESTATIONS_PENDING, FETCH_PRESTATIONS_SUCCESS, FETCH_PRESTATIONS_ERROR} from "../actions/prestationsAction";

const initialState = {
    pending: false,
    prestations: [],
    error: null
}

export const prestationsReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRESTATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_PRESTATIONS_SUCCESS:
            return {
                ...state,
                prestations: action.payload,
                pending: false
            }
        case FETCH_PRESTATIONS_ERROR:
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