import {GET_PRESTATIONS_PENDING, GET_PRESTATIONS_SUCCESS, GET_PRESTATIONS_ERROR} from "../actions/prestationsAction";

const initialState = {
    pending: false,
    prestations: null,
    error: null
}

export const prestationsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_PRESTATIONS_PENDING:
            return {
                ...state,
                pending: true
            }
        case GET_PRESTATIONS_SUCCESS:
            return {
                ...state,
                prestations: action.payload,
                pending: false
            }
        case GET_PRESTATIONS_ERROR:
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