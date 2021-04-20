import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Repo } from './pages';

function App() {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <h1>Test</h1>
        </Route>
        <Route path="/repo">
          <Repo/>
        </Route>
      </Switch>
    </>
  );
};

export default App;