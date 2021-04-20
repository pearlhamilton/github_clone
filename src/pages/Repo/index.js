import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RepoInfo } from '../../components'

const Repo = () => {
  return (
    <div className="repo-individual">
      <Switch>
        <Route path={"repo/:id"}>
          <RepoInfo/>
        </Route>
      </Switch>
    </div>
  );
}

export default Repo;