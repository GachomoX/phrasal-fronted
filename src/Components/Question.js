import React from 'react';
import { useState } from 'react/cjs/react.development';
import EMessage from './EMessage';
import { Button } from '@material-ui/core';
import  StyledButton from './Styled/StyledButton';
import './question.css';

const Question = ({dispQues, setDispQuest, questions, score, setScore, answersram, nextQ}) =>{
    const [selected, setSelected ] = useState(null);
    const [error, setError] = useState(false);
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    
    
 
function answerselected(i){ 
    console.log("entrando correct");
    console.log(good);
    if (answersram[i] === questions[dispQues].answer){
        setGood(good+1);
    }else{
        setBad(bad+1);
    }
  
    console.log("i")
    console.log(i);
    console.log("dispQues Question actual")
    console.log(dispQues)
    console.log("respuestas aleatorias")
    console.log(answersram);
    console.log("preguntas")
    console.log(questions);
    console.log("wrong")
    console.log(bad);
    console.log("correct")
    console.log(good);

   
}

  
 console.log(answersram)
    return(
        <div className="question">
            <h1>Question {dispQues+1}</h1>
            <div className="singleQuestion">
                <h2>{questions[dispQues].question}</h2>
                <div className="options">
                    {answersram.map((opt,i)=><button onClick={()=>{answerselected(i)}} 
                                                className={"singleOption"}
                                                     key={i} disabled={selected}>{opt}</button>)}
                </div>
                    <div>
                        <StyledButton  onClick={()=>{nextQ()}}>
                            Next
                        </StyledButton>

                    </div>
                </div>
            </div>

    )
}

export default Question;
