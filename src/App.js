import React from "react";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";

import CreateSurvey from "./Components/CreateSurvey";
import TakeSurvey from "./Components/TakeSurvey";
import { surveySlice, createSurvey } from "./store/surverySlice";

import './App.css';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();

  const redirectToNewSurvery = () => {
    dispatch(createSurvey())
    .then(unwrapResult)
    .then((id) => history.push("/create/" + id));
  };

  const redirectToTakeSurvey = () => {
    history.push("/take");
  };

  return (
      <div className="App">
        <Switch>
          <Route path="/create/:surveyId" component={CreateSurvey} />
          <Route path="/take" component={TakeSurvey}/>

          <Route path="/">
            <Button className="btn" onClick={redirectToNewSurvery}>Create Survey</Button>
            <Button className="btn" onClick={redirectToTakeSurvey}>Take Survey</Button>
          </Route>
        </Switch>
      </div>
  );
}

export default App;





/*
function App() {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/create" component={CreateSurvey} />
          <Route path="/take"> take survey </Route>

          <Route path="/">
            <Link to="/create"><Button className="btn">Create Survey</Button></Link>
            <Link to="/take"><Button className="btn">Take Survey</Button></Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
*/