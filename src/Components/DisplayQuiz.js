import React, {useState, useRef} from 'react';
import styled from 'styled-components';


export default function DisplayQuiz({questions, verbQName, verbqid}){
console.log("estoy en DISPLAYQUIZ")
console.log("questions en DisplayQuiz")
console.log(questions)
 const [nextQuestion, setNextQuestion]= useState(0)
    
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
 
    const questiondisp =(
        <>
        <tr>{questions[i].question}</tr>
        <button onClick={loadquestion(i)}>{answersram[0]}</button>
        <button>{answersram[1]}</button>
        <button>{answersram[2]}</button>
        <button>{answersram[3]}</button>
        </>)
        setNextQuestion(i++);
    return questiondisp;
}


    


    return (
        <div>
            <button onClick={loadquestion(nextQuestion)}>Start</button>
                            <td>
              <tr >
                  
              </tr>
            </td>
        </div>
     
    )
}