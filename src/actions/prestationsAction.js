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
        payload: prestations
    }
}

export const fetchPrestationsError = (error) => {
    return {
        type: FETCH_PRESTATIONS_ERROR,
        error: error
    }
}

export const fetchPrestations = () => {
    return dispatch => {
        dispatch(fetchPrestationsPending());
        fetch('https://www.wecasa.fr/api/techtest/universe')
          .then(res => {
            if (!res.ok){
              console.log('error 404');
            }
            return res.json();
          })
          .then(prestations => {
            dispatch(fetchPrestationsSuccess(prestations));
          })
          .catch(error => {
            dispatch(fetchPrestationsError(error));
          });
    }
};