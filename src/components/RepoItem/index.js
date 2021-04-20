import React from 'react'

import './style.css'

const RepoItem = ({repoData}) => {


    return(
        <div className="repoItem">
        <div className="repoName">{repoData.name}</div>
        </div>

    )
}

export default RepoItem