import React from 'react'


const Profile = (props) => {


    return(
        <>
        <h2>{props.repoData.owner.login}</h2>
        <img src = {props.repoData.owner.avatar_url}></img>

    </>
    )
}

export default Profile