import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css';

const RepoInfo = () => {

  const [repo, setRepo] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        let { data } = await axios.get(`https://api.github.com/repositories/${params.id}`);
        console.log(data);
        setRepo(data);
      } catch (err) {
        console.warn(err);
      }
    }
    fetchRepo();
  }, [params])

  return (
    <>
    {
      repo ? 
      <div className="repo-info">
        <div className="repo-header d-flex">
          <img src={repo.owner.avatar_url} alt={repo.owner.login}/>
          <div className="">
            <h5>{repo.owner.login}</h5>
            <h1>{repo.name}</h1>
            <p>{repo.description ? repo.description : "No description available."}</p>
          </div>
        </div>
        <div className="repo-stats text-center">
          <div class="row">
            <div class="col-sm repo-stat">
              <h5>Forks</h5>
              <p>{repo.forks ? repo.forks : "Unkown"}</p>
            </div>
            <div class="col-sm repo-stat">
              <h5>Open Issues</h5>
              <p>{repo.open_issues ? repo.open_issues : "Unkown"}</p>
            </div>
            <div class="col-sm repo-stat">
              <h5>Watchers</h5>
              <p>{repo.watchers ? repo.watchers : "Unkown"}</p>
            </div>
            <div class="col-sm repo-stat">
              <h5>Subscribers</h5>
              <p>{repo.subscribers_count ? repo.subscribers_count : "Unkown"}</p>
            </div>
          </div>
        </div>
      </div>

      : <h5>Error, no repo found</h5>
    }
    </>
  )
}

export default RepoInfo;