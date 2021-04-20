import React from 'react'
import './style.css'

const Profile = (props) => {


    return(
    <div className="text-center mt-5">
        <h2>{props.repoData.owner.login}</h2>
        <img className="profile-picture" src = {props.repoData.owner.avatar_url}></img>
    </div>
    )
}

export default Profile