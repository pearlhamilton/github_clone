import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

const BackButton = () => {
  const history = useHistory();

  return (
    <div className="container">
      <button className="back-button" onClick={history.goBack}>Back</button>
    </div>
  )
}

export default BackButton;