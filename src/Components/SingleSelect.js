import React, { useState } from "react";
import { Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";

import { surveySlice } from '../store/surverySlice';

function SingleSelect() {
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState(["", ""]);
    
    const { surveyId } = useParams();
    const history = useHistory();

    const dispatch = useDispatch(); 

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value);
    };

    const handleFirstOptionsChange = (e) => {
        options[0] = e.target.value;
        setOptions(() => [...options]);
    };

    const handleSecondOptionsChange = (e) => {
        options[1] = e.target.value;
        setOptions(() => [...options]);
    };

    const addQuestion = () => {
        const payload = {
            options: options,
            surveyId: surveyId,
            type: "single-select",
            question: question
        };

        dispatch(surveySlice.actions.addQuestion(payload));
        history.push("/create/" + surveyId + "?clear=true");
    };

    const disableButtons = () => {
        if(question.trim() === "") {
            return true;
        }

        if((options.find((item) => item.trim() === "")) !== undefined) {
            return true;
        }

        return false;
    };

    const publishQuestion = () => {
        const payload = {
            surveyId: surveyId,
            question: question,
            options: options,
            type: "single-select"
        };

        dispatch(surveySlice.actions.publishQuestion(payload));
        history.push(surveyId + "/confirm");
    };

    return (
        <div className="question-container">
            <InputGroup className="input-group">
                <InputGroupAddon addonType="prepend">
                    <InputGroupText>?</InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Enter Question" onChange={handleQuestionChange} value={question} />
            </InputGroup>
            <span className="option-text">Options</span>
            <br />
            <InputGroup className="input-group">
                <Input placeholder="Type answer here" onChange={handleFirstOptionsChange} value={`${options[0]}`} />
                <InputGroupAddon addonType="append">
                    <InputGroupText >+</InputGroupText>
                    <InputGroupText>-</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <InputGroup className="input-group">
                <Input placeholder="Type answer here" onChange={handleSecondOptionsChange} value={`${options[1]}`} />
                <InputGroupAddon addonType="append">
                    <InputGroupText>+</InputGroupText>
                    <InputGroupText>-</InputGroupText>
                </InputGroupAddon>
            </InputGroup>
            <br />
            <div className="finish-buttons">
                <Button className="btn left" disabled={disableButtons()} onClick={addQuestion}>Add Question</Button>
                <Button className="btn left" disabled={disableButtons()} onClick={publishQuestion}>Publish</Button>
            </div>
        </div>
    );
}

export default SingleSelect;
