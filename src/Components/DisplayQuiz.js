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

function loadquestion(i){
    console.log("i")
    console.log(i)
 
 }
 


    return (
        <div className="quiz">
            <div className="subtitle">   {verbQName}</div>
             {questions ? (
             <>
                <div className="quizInfo">
                    <span>Score: {score}</span>
                </div>
                <Question dispQues={dispQuest} setDispQuest={setDispQuest} questions={questions} score={score} setScore={setScore} answersram={answersram}/>
             
             
             
             </>) : ( <CircularProgress style={{ margin: 100 }} 
                                    color="inherit" size={150} thickness={1}/>)}
         
          
        </div>
     
    )
}