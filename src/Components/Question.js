import React from 'react';
import { useState } from 'react/cjs/react.development';
import EMessage from './EMessage';
import { Button } from '@material-ui/core';
import  StyledButton from './Styled/StyledButton';
import './question.css';

const Question = ({dispQues, questions, score, setScore, answersram, nextQ, setGood, setBad, good, bad, updusersuc}) =>{
    const [selected, setSelected ] = useState(null);
    const [butdeshab, setButDesHab] = useState(true);
 

    function countQuest(){
        nextQ();
    }
 
    function answerselected(i){ 
    
        if (answersram[i] === questions[dispQues].answer){

            setGood(good+1);
        }else{
            setBad(bad+1);
        }
    }

  
  
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
                        <StyledButton  disabled={ (dispQues === 3) ? true : false} onClick={()=>{nextQ()}}>
                 
                            Next
                        </StyledButton>
                        <StyledButton   style={{backgroundColor: 'green'}} onClick={()=>{updusersuc()}}>
                            Save Score
                        </StyledButton>
                    </div>
                </div>
            </div>

    )
}

export default Question;
