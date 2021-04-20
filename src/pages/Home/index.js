import React, {useState} from 'react' 
import { SearchForm, Profile } from '../../components'
import axios from 'axios'
import RepoItem from '../../components/RepoItem'
import './style.css'

const Home = () => {

    const [repos, setRepos] = useState()

    const [ faveShow, setFaveShow ] = useState({title: 'The Good Place', seasons: 4})
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


    console.log(faveShow)


    
    
    return(
        <>
        <h1>Github Clone</h1>
        <SearchForm searchForUser={searchForUser}/>
        {repos? <Profile  repoData={repos[0]}/>: "" }
        <div id="repoResults">
        {repos ? repos.map(repo => <RepoItem key={repo.id} repoData ={repo}/>): ""}
        </div>
        </>
    )


}

export default Home