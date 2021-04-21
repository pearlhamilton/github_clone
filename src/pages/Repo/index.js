import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RepoInfo, BackButton } from '../../components'

const Repo = () => {
  return (
    <main aria-label="main" className="repo-individual container">
      <Switch>
        <Route path={"/repo/:id"}>
          <RepoInfo/>
        </Route>
      </Switch>
    </main>
  );
}

export default Repo;