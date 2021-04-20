import React from 'react'

import './style.css'

const RepoItem = (props) => {
    return(
        <div className="repoItem">
            <div className="d-flex justify-content-between">
                <p className="repoName">{props.repoData.name}</p>
                <a href={"/repo/"+props.repoData.id}>Go to repo</a>
            </div>
            <p>{props.repoData.description ? props.repoData.description : ""}</p>
            <div className="d-flex">
                <p className="repoLanguage">{props.repoData.language ? props.repoData.language : ""}</p>
            </div>
        </div>
    )
}

export default RepoItem