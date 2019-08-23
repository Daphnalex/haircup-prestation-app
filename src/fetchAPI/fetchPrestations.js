import {fetchPrestationsPending, fetchPrestationsSuccess, fetchPrestationsError} from "../actions/prestationsAction";

const fetchPrestations = () => {
    console.log("j'entre dans la fonction fetch");
    return dispatch => {
        console.log('hello');
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
            console.log('prestations to dispatch',prestations);
          })
          .catch(error => {
            console.log('catch error',error);
            dispatch(fetchPrestationsError(error));
          });
    }
};

export default fetchPrestations;