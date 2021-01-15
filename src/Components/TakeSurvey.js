import React, { useEffect, useState } from "react";
import { Button } from 'reactstrap';
import { useSelector } from "react-redux";

function TakeSurvey() {
    const selector = useSelector((store) => store.surveys.map(s => s.surveyId));
    
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
