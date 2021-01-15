import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const createSurvey = createAsyncThunk(
    'surveys/createSurvey',
    async (undefined, thunkAPI) => {
        const newSurveyId = String(thunkAPI.getState().surveys.length + 1);
        return newSurveyId;
    }
);

const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
        addQuestion: (state, action) => {
            const { surveyId, question, options, type } = action.payload;
            const survey = state.find(s => s.surveyId == surveyId);
            const ques = survey.questions;
            const questionId = String(ques.length + 1);
            
            ques.push({
                questionId: questionId,
                question: question,
                type: type,
                options: options
            });
        } 
    },
    extraReducers: {
        [createSurvey.fulfilled] : (state, action) => {
            state.push({
                questions: [],
                surveyId: action.payload,
                isPublished: false
            });
        }
    }
});

export { createSurvey, surveySlice };

/* survey - 
    questions: [],
    surveyId: String/Number,
    isPublished: Boolean
*/

/* questions - 
    question: String,
    questionId: String/Number,
    type: String,
    options: []
*/