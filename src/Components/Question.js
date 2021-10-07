import React from 'react';
import { useState } from 'react/cjs/react.development';
import EMessage from './EMessage';
import { Button } from '@material-ui/core';
import  StyledButton from './Styled/StyledButton';
import './question.css';

const Question = ({dispQues, questions, score, setScore, answersram, nextQ, setGood, setBad, good, bad, updusersuc}) =>{
    const [selected, setSelected ] = useState(null);
    
    
    const [botdeshab, setBotDesHab] = useState(true);
    //console.log("tipo boton")
   // console.log(botdeshab)

function countQuest(){

    if(dispQues >= 2){
     
        setBotDesHab(false);
    }
    else{
        setBotDesHab(true);
    }
    nextQ();
}
 
function answerselected(i){ 
  
    if (answersram[i] === questions[dispQues].answer){

        setGood(good+1);
    }else{
        setBad(bad+1);
    }
   
  
    //console.log("i")
   // console.log(i);
    console.log("dispQues Question actual")
    console.log(dispQues)
    //console.log("respuestas aleatorias")
    //console.log(answersram);
   // console.log("preguntas")
   // console.log(questions);
   // console.log("wrong")
   // console.log(bad);
   // console.log("correct")
   // console.log(good);

   
}

  
 //console.log(answersram)
  
    return(
        <div className="question">
            <h3>Score: Correct: {good}   Wrong: {bad}</h3>
            <h1>Question {dispQues+1}</h1>
            
            <div className="singleQuestion">
                <h2>{questions[dispQues].question}</h2>
                <div className="options">
                    {answersram.map((opt,i)=><button onClick={()=>{answerselected(i)}} 
                                                className={"singleOption"}
                                                     key={i} disabled={selected}>{opt}</button>)}
                </div>
                    <div>
                        <StyledButton  disabled={!botdeshab} onClick={()=>{countQuest()}}>
                            Next
                        </StyledButton>
                        <StyledButton   style={{backgroundColor: 'green'}}onClick={()=>{updusersuc()}}>
                            Save Score
                        </StyledButton>

                    </div>
                </div>
            </div>

    )
}

export default Question;
