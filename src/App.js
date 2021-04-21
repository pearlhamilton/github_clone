import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Repo, Home } from './pages';
import { BackButton } from './components';

function App() {
  return(
    <>
      <Switch>
        <Route exact path="/">
          <BackButton/>
          <Home/>
        </Route>
        <Route path={"/repo/:id"}>
          <BackButton/>
          <Repo/>
        </Route>
      </Switch>
    </>
  );
};

export default App;