import { ADD_BOOKING_ERROR, ADD_BOOKING_PENDING, ADD_BOOKING_SUCCESS } from "../actions/postBookingAction";

const initialState = {
    pending: false,
    booking: null,
    error: null
}

export const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOKING_PENDING:
            return {
                ...state,
                pending: true
            }
        case ADD_BOOKING_SUCCESS:
            return {
                ...state,
                booking: action.payload,
                pending: false
            }
        case ADD_BOOKING_ERROR:
            return {
                ...state,
                error: action.error
            }
        default:
            return state;
    }
}

export const getBooking = (state) => {
    return state.booking
};

export const getBookingPending = (state) => {
    return state.pending;
};

export const getBookingError = (state) => {
    return state.error;
};