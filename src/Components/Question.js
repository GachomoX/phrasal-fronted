import React from 'react';
import { useState } from 'react/cjs/react.development';
import EMessage from './EMessage';
import { Button } from '@material-ui/core';
import  StyledButton from './Styled/StyledButton';
import './question.css';

const Question = ({dispQues, questions, score, setScore, answersram, nextQ, setGood, setBad, good, bad, updusersuc, selected, setSelected}) =>{
    
    const [butdeshab, setButDesHab] = useState(true);


    function looknextQ(){ 
        setSelected(null); 
        nextQ();
    }
 
    function answerselected(i){ 
        setSelected(i+1);// 0 looks at null
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
            
            <div className="singleQuestion" >
                <h2>{questions[dispQues].question}</h2>
                <div className="options">
                    {answersram.map((opt,i)=><button onClick={()=>{answerselected(i)}} 
                                                className={'singleOption'}
                                                     key={i} disabled={selected}>{opt}</button>)}
                </div>
                    <div>
                        <StyledButton  style={{ marginLeft: "50px" }} disabled={ (dispQues === 3) ? true : false} onClick={()=>{looknextQ()}}>
                            Next
                        </StyledButton>
                        <StyledButton   style={{ marginLeft: "10px", backgroundColor: 'green'}} onClick={()=>{updusersuc()}}>
                            Save Score
                        </StyledButton>
                    </div>
                </div>
            </div>

    )
}

export default Question;
