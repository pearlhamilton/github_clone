import React from 'react'

import './style.css'

const RepoItem = (props) => {


    return(
        <div className="repoItem">
        <div className="repoName">{props.repoData.name}</div>
        <a href={"/repo/"+props.repoData.id}>Go to repo</a>
        </div>

    )
}

export default RepoItem