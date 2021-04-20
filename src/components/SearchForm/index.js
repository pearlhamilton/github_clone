import React, {useState} from 'react'

const SearchForm = ({searchForUser}) => {


    const [username, setUsername ] = useState();

    function handleSubmit(e){
        e.preventDefault()
        const input = e.target[0].value;
        setUsername(input)
        searchForUser(username)
    }


    function updateInput(e){
        const input = e.target.value
        setUsername(input)
    }

    
    return (
    <form role="form" onSubmit={handleSubmit}>
        <div className="form-row">
            <div className="col-sm-8">
                <input type="text" className="form-control" onChange={updateInput}/>
            </div>
            <div className="col-sm-4">
                <input type="submit" className="form-control" value="Find Repos" />
            </div>
        </div>
    </form>
    )
}


export default SearchForm