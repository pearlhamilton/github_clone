import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const RepoInfo = () => {

  const [repo, setRepo] = useState();

  const params = useParams();

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        let { data } = await axios.get(`https://api.github.com/repositories/${params.id}`);
        console.log(data);
        setRepo(data[0]);
      } catch (err) {
        console.warn(err);
      }
    }
    fetchRepo();
  }, [params])

  return (
    <>
      <h1>Test</h1>
    </>
  )
}

export default RepoInfo;