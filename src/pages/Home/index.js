import React from 'react' 
import { SearchForm } from '../../components'

const Home = () => {

    const searchForUser = (username) => {
        console.log(username)
    }


    return(
        <>
        <h1>Github Clone</h1>
        <SearchForm searchForUser={searchForUser}/>

        </>

        

    )


}

export default Home