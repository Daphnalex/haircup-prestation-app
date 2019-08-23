export const FETCH_PRESTATIONS_PENDING = "FETCH_PRESTATIONS_PENDING";
export const FETCH_PRESTATIONS_SUCCESS = "FETCH_PRESTATIONS_SUCCESS";
export const FETCH_PRESTATIONS_ERROR = "FETCH_PRESTATIONS_ERROR";

const fetchPrestationsPending = () => {
    return {
        type: FETCH_PRESTATIONS_PENDING
    }
}

const fetchPrestationsSuccess = (prestations) => {
    return {
        type: FETCH_PRESTATIONS_SUCCESS,
        prestations: prestations
    }
}

const fetchPrestationsError = (error) => {
    return {
        type: FETCH_PRESTATIONS_ERROR,
        error: error
    }
}