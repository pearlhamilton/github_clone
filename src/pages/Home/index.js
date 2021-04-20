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
    
    if (repos){console.log(repos[0])}
    else{
        console.log('nothing')
    }

    return(
        <div className="container">
            <h1 className="text-center">Github Clone</h1>
            <SearchForm searchForUser={searchForUser}/>
            {repos ? <Profile  repoData={repos[0]}/> : "" }
            <div id="repoResults">
                {repos ? repos.map(repo => <RepoItem key={repo.id} repoData ={repo}/>) : ""}
            </div>
        </div>
    )


}

export default Home