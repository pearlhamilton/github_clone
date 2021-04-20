import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Repo } from './pages';
import { Home } from './pages'

function App() {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/repo">
          <Repo/>
        </Route>
      </Switch>
    </>
  );
};

export default App;