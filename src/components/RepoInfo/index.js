import React from 'react';
import './style.css';

const RepoInfo = ({repo}) => {

  return (
    <>
    {
      repo ? 
      <div className="repo-info">
        <div className="repo-header d-flex">
          <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
          <div className="ml-3">
            <h5>{repo.owner.login}</h5>
            <a href={repo.html_url}>{repo.name}</a>
            <p>{repo.description ? repo.description : "No description available."}</p>
          </div>
        </div>
        <div className="repo-stats text-center">
          <div className="row">
            <div className="col-sm repo-stat">
              <h5>Forks</h5>
              <p>{repo.forks}</p>
            </div>
            <div className="col-sm repo-stat">
              <h5>Open Issues</h5>
              <p>{repo.open_issues}</p>
            </div>
            <div className="col-sm repo-stat">
              <h5>Watchers</h5>
              <p>{repo.watchers}</p>
            </div>
            <div className="col-sm repo-stat">
              <h5>Subscribers</h5>
              <p>{repo.subscribers_count ? repo.subscribers_count : "Unkown"}</p>
            </div>
          </div>
        </div>
      </div>

      : <h1 className="text-center">Error, no repo found</h1>
    }
    </>
  )
}

export default RepoInfo;