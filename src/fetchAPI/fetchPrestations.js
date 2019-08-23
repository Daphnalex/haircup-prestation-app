import {fetchPrestationsPending, fetchPrestationsSuccess, fetchPrestationsError} from "./actions/prestationsAction";

const fetchPrestations = () => {
    return dispatch => {
        dispatch(fetchPrestationsPending());
        fetch('https://www.wecasa.fr/api/techtest/universe')
          .then(res => res.json())
          .then(res => {
            if(res.error){
              console.log('error',res.error);
              throw(res.error);
            }
            dispatch(fetchPrestationsSuccess(res.prestations));
            return res.prestations;
          })
          .catch(error => {
            dispatch(fetchPrestationsError(error));
          });
    }
};

export default fetchPrestations;