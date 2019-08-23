export const FETCH_PRESTATIONS_PENDING = "FETCH_PRESTATIONS_PENDING";
export const FETCH_PRESTATIONS_SUCCESS = "FETCH_PRESTATIONS_SUCCESS";
export const FETCH_PRESTATIONS_ERROR = "FETCH_PRESTATIONS_ERROR";

export const fetchPrestationsPending = () => {
    return {
        type: FETCH_PRESTATIONS_PENDING
    }
}

export const fetchPrestationsSuccess = (prestations) => {
    return {
        type: FETCH_PRESTATIONS_SUCCESS,
        prestations: prestations
    }
}

export const fetchPrestationsError = (error) => {
    return {
        type: FETCH_PRESTATIONS_ERROR,
        error: error
    }
}