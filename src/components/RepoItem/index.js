import React from 'react'

const RepoItem = ({repoData}) => {


    return(
        <div>
        <div>Name:{repoData.name}</div>
        <p>Description: {repoData.description}</p>
        </div>

    )
}

export default RepoItem