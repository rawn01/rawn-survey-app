import React from "react";
import { Button } from 'reactstrap';
import { useSelector } from "react-redux";

function TakeSurvey() {
    const selector = useSelector((store) => store.surveys.filter(s => s.isPublished)).map((s) => s.surveyId);
    console.log(selector);
    
    return ( 
        <>
            {
                selector.length === 0 ? <h2>No Surveys created!</h2>
                : selector.map((id) => (
                    <Button key={id}>Take {id}</Button>
                )) 
            }
        </>
    );
}

export default TakeSurvey;
