export const ADD_BOOKING_ERROR = "ADD_BOOKING_ERROR";
export const ADD_BOOKING_PENDING = "ADD_BOOKING_PENDING";
export const ADD_BOOKING_SUCCESS = "ADD_BOOKING_SUCCESS";

if(!localStorage.statusResponse){
    localStorage.setItem('statusResponse',"0");
}

export const addBookingPending = () => {
    return {
        type: ADD_BOOKING_PENDING
    }
}

export const addBookingSuccess = (booking) => {
    return {
        type: ADD_BOOKING_SUCCESS,
        payload: booking
    }
}

export const addBookingError = (error) => {
    return {
        type: ADD_BOOKING_ERROR,
        error: error
    }
}

export const addBooking = (booking) => {

    return dispatch => {
        dispatch(addBookingPending());
        fetch('https://www.wecasa.fr/api/techtest/booking', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        .then(res => {
            if (res.status === 200){
                localStorage.address = "";
                localStorage.articles = [];
                localStorage.prestations = [];
                window.location.replace('/confirmation-reservation');
                return res.json();
            } else {
                console.log('error 404');
            }
            
        })
        .then(booking => {
            dispatch(addBookingSuccess(booking));
        })
        .catch(error => {
            dispatch(addBookingError(error));
        });
    }
};