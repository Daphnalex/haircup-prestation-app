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

export const addBooking = (booking) => {

    console.log('booking',booking);
    return fetch('https://www.wecasa.fr/api/techtest/booking', {
        method: 'POST',
        body: JSON.stringify(booking),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(err => console.log('error',err))
    .then(res => res.json())
    .then(booking => {
        return booking;
    })
};