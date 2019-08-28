export const SELECT_DATE = "SELECT_DATE";

const selectDateSuccess = (date) => {
    return {
        type: SELECT_DATE,
        payload: date
    }
};

export const selectDate = (date) => {
    return dispatch => {
        dispatch(selectDateSuccess(date))
    }
};