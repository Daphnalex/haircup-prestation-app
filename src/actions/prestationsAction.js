export const FETCH_PRESTATIONS_PENDING = "FETCH_PRESTATIONS_PENDING";
export const FETCH_PRESTATIONS_SUCCESS = "FETCH_PRESTATIONS_SUCCESS";
export const FETCH_PRESTATIONS_ERROR = "FETCH_PRESTATIONS_ERROR";

export const fetchPrestationsPending = () => {
    console.log('pending in prestations action');
    return {
        type: FETCH_PRESTATIONS_PENDING
    }
}

export const fetchPrestationsSuccess = (prestations) => {
    console.log('action prestations',prestations)
    return {
        type: FETCH_PRESTATIONS_SUCCESS,
        payload: prestations
    }
}

export const fetchPrestationsError = (error) => {
    return {
        type: FETCH_PRESTATIONS_ERROR,
        error: error
    }
}