import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import FormBuilder from './Container/FormBuilder/formBuilder';
import Preview from './Container/Preview/preview';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/preview" component={Preview}/>  
          <Route path="/home" component={FormBuilder} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
