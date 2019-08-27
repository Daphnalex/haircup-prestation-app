export const SELECT_ADDRESS = "SELECT_ADDRESS";

const selectAddressSuccess = (address) => {
    return {
        type: SELECT_ADDRESS,
        payload: address
    }
};

const selectAdress = (address) => {
    return dispatch => {
        dispatch(selectAddressSuccess(address));
    }
};