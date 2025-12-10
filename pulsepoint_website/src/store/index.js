import {configureStore} from "@reduxjs/toolkit";
import authReducer from './auth/slices.js'
import bookingReducer from "./bookingSlice";

const store = configureStore({

    reducer: {

        auth: authReducer,
        booking: bookingReducer,
    }
});



export default store;