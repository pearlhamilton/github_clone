import React from 'react' 
import { SearchForm } from '../../components'
import axios from 'axios'

const Home = () => {

    const searchForUser = async (username) => {
        try {   
            let { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
            console.log(data)
        } catch (err) {
            console.warn(err);
         
        }
    }

    return(
        <>
        <h1>Github Clone</h1>
        <SearchForm searchForUser={searchForUser}/>

        </>
    )


}

export default Home