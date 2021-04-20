import React, {useState} from 'react' 
import { SearchForm, Profile } from '../../components'
import axios from 'axios'
import RepoItem from '../../components/RepoItem'
import './style.css'

const Home = () => {

    const [repos, setRepos] = useState()

    const searchForUser = async (username) => {
        try {   
            let { data } = await axios.get(`https://api.github.com/users/${username}/repos`);
            setRepos(data)


        } catch (err) {
            console.warn(err);
         
        }
    }
    console.log(repos)


    
    
    return(
        <>
        <h1>Github Clone</h1>
        <SearchForm searchForUser={searchForUser}/>
        {repos? <Profile  props={repos[0]}/>: "" }
        <div id="repoResults">
        {repos ? repos.map(repo => <RepoItem key={repo.id} repoData ={repo}/>): ""}
        </div>
        </>
    )


}

export default Home