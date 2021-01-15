import { createSlice } from '@reduxjs/toolkit'

const responseSlice = createSlice({
    name: "responses",
    initialState: [],
    reducers: {
        createSurvey: (state, action) => {
            console.log("state", state);
            console.log("action", action);
            return state;
        }
    }
});

export default responseSlice;