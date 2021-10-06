import React, {useEffect, useState} from 'react';
import Quiz from './Quiz';


export default function QuizContainer(){
    const BASE_URL="http://127.0.0.1:3000/";
    const [ quizverbs, setQuizVerbs ] = useState(null);
    const [ verqId, setVerQId] = useState(null);
    const [ questions, setQuestions ] = useState(null);
    const [ verbprepadvq, setVerbprepadvq ] = useState(null);

    useEffect(()=>{
        fetch(BASE_URL + 'verbs')
            .then (res => res.json())
            .then (json => setQuizVerbs(json))
      },[])


    function listquestion(verbqid){
        const config = {
            method: "GET",
            headers: {
              "Content-type":  "application/json"
            }
        }
        let urlComplete = BASE_URL + 'phrases/' + verbqid    
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(json =>setQuestions(json)
        )
        setVerQId(verbqid)
    }

    function listverbprepq(verbqid){
        console.log("en listverbprepadv");
        console.log(verbqid);
        const config = {
            method: "GET",
            headers: {
              "Content-type":  "application/json"
            }
        }
        let urlComplete = BASE_URL + 'verbs/' + verbqid + '/prepadvs'  
        fetch(urlComplete,config)
            .then(response => response.json())
            .then(json =>setVerbprepadvq(json)
        )

    }

console.log("Questions en QuizContainer")
console.log(questions)

    function allQuizVerbs(){
        return (
          <Quiz quizverbs={quizverbs} listquestion={listquestion} questions={questions} listverbprepq={listverbprepq} verbprepadvq={verbprepadvq}/>
        )
    }
    return (
        <div>
            {quizverbs && allQuizVerbs()}
        </div>
    )
}

    