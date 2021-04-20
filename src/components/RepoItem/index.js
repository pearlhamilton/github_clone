import React from 'react'

import './style.css'

const RepoItem = (props) => {


    return(
        <div className="repoItem">
        <div className="repoName">{props.repoData.name}</div>
        <button>Go to repo</button>
        </div>

    )
}

export default RepoItem