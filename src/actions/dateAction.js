export const ADD_DATE = "ADD_DATE";

const addDateSuccess = (date) => {
    return {
        type: ADD_DATE,
        payload: date
    }
};

export const addDate = (date) => {
    return dispatch => {
        dispatch(addDateSuccess(date))
    }
};

