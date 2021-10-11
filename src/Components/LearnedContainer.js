import React, {useEffect, useState} from 'react';
import DisplayLearned from './DisplayLearned';
import Pagination from './Pagination';



export default function LearnedContainer(){
    const BASE_URL="http://127.0.0.1:3000/";

    const [learned, setLearned] = useState(null);
    const [learnverbs, setLearnVerbs] = useState(null);
    const [learnprepadvs, setLearnPrepadvs]= useState(null);
//Control per Phrasal Verbs per Page
    const [currentPage, setCurrentPage] = useState(1);
    const [phrasalPerPage, setPhrasalPerPage] = useState(11);

    useEffect(()=>{
        const config = {
            method: "GET",
            headers: {
              "Content-type":  "application/json"
            }
        }
        let urlComplete = BASE_URL + 'users/' + 1 + '/show_users_phrasal'  
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(json =>setLearned(json)
        )

      },[])

      useEffect(()=>{
        fetch(BASE_URL + 'verbs')
            .then (res => res.json())
            .then (json => setLearnVerbs(json))
      },[])

      useEffect(()=>{
        fetch(BASE_URL + 'prepadvs')
            .then (res => res.json())
            .then (json => setLearnPrepadvs(json))
      },[])

//Get current phrasals verbs
const indOfLastPhv = currentPage * phrasalPerPage;
const indFirsPhv = indOfLastPhv - phrasalPerPage;



function alllearned(){
   const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return(
        <div>
            <DisplayLearned learned={learned} learnverbs={learnverbs} learnprepadvs={learnprepadvs} 
            indOfLastPhv={indOfLastPhv} indFirsPhv={indFirsPhv} phrasalPerPage={phrasalPerPage} paginate={paginate}/>
           
        </div>
    )
}
    

    return(
        <div>
        {learnverbs && learned  && learnprepadvs && alllearned()}
        </div>
    )
}