import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { RepoInfo } from '../../components'

const Repo = () => {
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
    <main aria-label="main" className="repo-individual container">
      <RepoInfo repo={repo}/>
    </main>
  );
}

export default Repo;