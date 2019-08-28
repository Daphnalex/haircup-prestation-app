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
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(res => {
        console.log("response",res)
        return res.json();
    })
    .catch(err => {
        console.log('error',err);
    })
};