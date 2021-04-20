import React, {useState} from 'react'

const SearchForm = ({searchForUser}) => {

 

    const [username, setUsername ] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        searchForUser(username)
    }


    function updateInput(e){
        const input = e.target.value
        setUsername(input)
    }

    
    return (

        <form role="form" onSubmit={handleSubmit}>
        <input type="text" onChange={updateInput}/>
        <input type="submit" value="Find Repos" />
    </form>

    )
}


export default SearchForm