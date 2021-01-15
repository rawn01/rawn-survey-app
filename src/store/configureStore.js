import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { surveySlice } from "./surverySlice";
import responseSlice from "./responseSlice";

const rootReducer = combineReducers({
    surveys: surveySlice.reducer,
    response: responseSlice.reducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;

