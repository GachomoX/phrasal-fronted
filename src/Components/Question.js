import React from 'react';
import { useState } from 'react/cjs/react.development';
import EMessage from './EMessage';
import { Button } from '@material-ui/core';
import  StyledButton from './Styled/StyledButton';
import './question.css';

const Question = ({dispQues, setDispQuest, questions, score, setScore, answersram}) =>{
    const [selected, setSelected ] = useState(null);
    const [error, setError] = useState(false);
    

    const handleSelect = (i) => {
        if (selected == i && selected === questions[i].answer){
            return "select";
        }
        else if(selected === i && selected != questions[i].answer){
                return "wrong";
            } else if(i=== questions[i].answer){
            return "select";
        }
    }

    const handleComp = (i) => {
        setSelected(i);
        if (i === questions[i].answer){
            setScore(score++);
            setError(false);
        }
    }

    function handleNextQuestion(i){
        if (setDispQuest>3){
            setDispQuest(0);
            setSelected(null);
            <Button disabled={selected}></Button>
        }
        else{
            setDispQuest(dispQues++);
            setSelected(null);
        }
            
    }

    return(
        <div className="question">
            <h1>Question {dispQues+1}</h1>
            <div className="singleQuestion">
                <h2>{questions[dispQues].question}</h2>
                <div className="options">
                    {error && <EMessage>{error}</EMessage>}
                    {answersram.map((opt,i)=><button onClick={(()=>handleComp(i))} 
                                                     className={`singleOption ${selected && handleSelect(i)}`}
                                                     key={i} disabled={selected}>{opt}</button>)}
                    <div>
                        <StyledButton onClick={handleNextQuestion()}>
                            Next
                        </StyledButton>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Question;
