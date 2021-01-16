import React from "react";
import { useParams, useHistory } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Button } from 'reactstrap';
import { useDispatch } from "react-redux";

import { surveySlice } from "../store/surverySlice";
import SingleSelectConfirm from "./SingleSelectConfirm";
import MultiSelectConfirm from "./MultiSelectConfirm";

function ConfirmSurvey() {
    const { surveyId } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const selector = useSelector((state) => state.surveys.find((s) => s.surveyId == surveyId) );

    const confirmSurvey = () => {
        dispatch(surveySlice.actions.markPublished({ surveyId }));
        history.push("/");
    };

    return ( 
        <div className="confirm-survey">
            {selector.questions.map((data, idx) => {
                if(data.type === "single-select") {
                    return <SingleSelectConfirm {...data} key={idx} index={idx} />
                } else {
                    return <MultiSelectConfirm key={idx} {...data} index={idx} />
                }
            })}
            <br />
            <Button className="confirm-button" onClick={confirmSurvey}>Confirm</Button>
        </div>
    );
}

export default ConfirmSurvey;
