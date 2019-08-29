export const ADD_ADDRESS = "ADD_ADDRESS";

export const addAddressSuccess = (address) => {
    return {
        type: ADD_ADDRESS,
        payload: address
    }
};

export const addAddress = (address) => {
    return dispatch => {
        dispatch(addAddressSuccess(address));
    }
};