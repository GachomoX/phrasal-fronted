import React, {useEffect, useState} from 'react';
import Quiz from './Quiz';


export default function QuizContainer(){
    const BASE_URL="http://127.0.0.1:3000/";
    const [ quizverbs, setQuizVerbs ] = useState(null);
    const [ verqId, setVerQId] = useState(null);
    const [ questions, setQuestions ] = useState(null);
    const [ verbprepadvq, setVerbprepadvq ] = useState(null);
    const [dispQuest, setDispQuest] = useState(0);

    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);

//console.log("Good")
//console.log(good)
////console.log("bad")
//console.log(bad)


    useEffect(()=>{
        fetch(BASE_URL + 'verbs')
            .then (res => res.json())
            .then (json => setQuizVerbs(json))
      },[])
    
   

    function updusersuc(){
        console.log('good')
        console.log(good)
        console.log('bad')
        console.log(bad)
    }

    function nextQ(){
        setDispQuest(dispQuest+1);   
    }

    function listquestion(verbqid){
        setDispQuest(0);
        setGood(0);
        setBad(0);
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


    function allQuizVerbs(){
        return (
          <Quiz quizverbs={quizverbs} listquestion={listquestion} questions={questions} nextQ={nextQ} dispQuest={dispQuest} setGood={setGood} setBad={setBad} good={good} bad={bad} updusersuc={updusersuc}/>
        )
    }
    return (
        <div>
            {quizverbs && allQuizVerbs()}
        </div>
    )
}

    