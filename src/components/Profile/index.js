import React from 'react'
import './style.css'

const Profile = (props) => {


    return(
    <>
        <h2>{props.repoData.owner.login}</h2>
        <img className="profile-picture" src = {props.repoData.owner.avatar_url}></img>
    </>
    )
}

export default Profile