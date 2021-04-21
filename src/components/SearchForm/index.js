import React, {useState} from 'react'

const SearchForm = ({searchForUser}) => {


    const [username, setUsername ] = useState("");

    function handleSubmit(e){
        e.preventDefault()
        searchForUser(username)
    }


    function updateInput(e){
        const input = e.target.value
        setUsername(input)
    }

    
    return (
    <form aria-label="search" onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="col-sm-8">
                <input type="text" className="form-control" placeholder="Enter username..." value={username} onChange={updateInput}/>
            </div>
            <div className="col-sm-4">
                <input role="button" type="submit" className="form-control" value="Find Repos" />
            </div>
        </div>
    </form>
    )
}


export default SearchForm