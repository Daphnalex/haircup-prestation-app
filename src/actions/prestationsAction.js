export const GET_PRESTATIONS_PENDING = "GET_PRESTATIONS_PENDING";
export const GET_PRESTATIONS_SUCCESS = "GET_PRESTATIONS_SUCCESS";
export const GET_PRESTATIONS_ERROR = "GET_PRESTATIONS_ERROR";

export const getPrestationsPending = () => {
    return {
        type: GET_PRESTATIONS_PENDING
    }
}

export const getPrestationsSuccess = (prestations) => {
    return {
        type: GET_PRESTATIONS_SUCCESS,
        payload: prestations
    }
}

export const getPrestationsError = (error) => {
    return {
        type: GET_PRESTATIONS_ERROR,
        error: error
    }
}

export const fetchPrestations = () => {
    return dispatch => {
        dispatch(getPrestationsPending());
        fetch('https://www.wecasa.fr/api/techtest/universe')
          .then(res => {
            if (!res.ok){
              console.log('error 404');
            }
            return res.json();
          })
          .then(prestations => {
            dispatch(getPrestationsSuccess(prestations));
          })
          .catch(error => {
            dispatch(getPrestationsError(error));
          });
    }
};