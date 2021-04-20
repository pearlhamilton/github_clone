import React from 'react'


const Profile = (props) => {

    console.log(props.props.id)

    return(
        <>
        <h2>{props.props.owner.login}</h2>
        <img src = {props.props.owner.avatar_url}></img>
        {/* // <h1> Profile</h1> */}
    </>
    )
}

export default Profile