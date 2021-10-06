import './quiz.css';
import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import Question  from './Question';


export default function DisplayQuiz({questions, verbQName, verbqid}){
console.log("estoy en DISPLAYQUIZ")
console.log("questions en DisplayQuiz")
console.log(questions)
 const [nextQuestion, setNextQuestion]= useState(0);
 const [score, setScore] = useState(0);
 const [dispQuest, setDispQuest] = useState(0);
 const [options, setOptions] = useState(null);
    
 //Random to show the answers
   const answ = [0,1,2,3];
   const randansw= shuffle(answ);
    console.log("nextQuestion");
   console.log(nextQuestion)
  
   function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
            return a;
    }

//End Random to show the answers

    const answersram = randansw.map((i)=>questions[i].answer);
    console.log("answers")
    console.log(answersram)

    function nextQ(){
        console.log("Entre a next q")
        return (setDispQuest(dispQuest+1));
    }
       


    return (
        <div className="quiz">
            <div className="subtitle">{verbQName}</div>
            <Question dispQues={dispQuest} setDispQuest={setDispQuest} questions={questions} answersram={answersram} nextQ={nextQ}/>
        </div>
    )
}