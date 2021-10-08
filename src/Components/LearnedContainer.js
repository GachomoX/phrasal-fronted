import React, {useEffect, useState} from 'react';
import DisplayLearned from './DisplayLearned';



export default function LearnedContainer(){
    const BASE_URL="http://127.0.0.1:3000/";

    const [learned, setLearned] = useState(null);
    const [learnverbs, setLearnVerbs] = useState(null);
    const [learnprepadvs, setLearnPrepadvs]= useState(null);

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

console.log("learned")
console.log(learned)
console.log("verbs")
console.log(learnverbs)

function alllearned(){
    return(
        <DisplayLearned learned={learned} learnverbs={learnverbs} learnprepadvs={learnprepadvs} />
    )
}
    

    return(
        <div>
        {learnverbs && learned  && learnprepadvs && alllearned()}
        </div>
    )
}