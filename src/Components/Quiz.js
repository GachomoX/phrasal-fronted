import React, {useState} from 'react';
import styled from 'styled-components';
import StyleSecondMod from './Styled/StyledSecondMod';
import StyledSelect  from './Styled/StyledSelect';
import StyledTd from './Styled/StyledTd';
import DisplayQuiz from './DisplayQuiz';
import StyledContent from './Styled/StyledContent';
import StyledSettings from './Styled/StyledSettings';
import { TextField, MenuItem } from '@material-ui/core';


export default function Quiz({quizverbs, listquestion, questions, nextQ, dispQuest,setGood, setBad, good, bad, updusersuc, selected, setSelected}){
    const [verbQName, setVerbQName] = useState(null);
    const [ verbqid, setVerbqId ] = useState(null);
   

    const onChangeComboVerb = (e) =>{  
        const verbqid= e.target.value;
        let indexq = e.target.selectedIndex; //get text of selected option
        setVerbQName(e.target.options[indexq].text);//get text of selected option
        listquestion(verbqid);
    }

    function DisplayQuestions(){
        return(
           <DisplayQuiz questions={questions} verbQName={verbQName} verbqid={verbqid} nextQ={nextQ} dispQuest={dispQuest}
            setGood={setGood} setBad={setBad} good={good} bad={bad} updusersuc={updusersuc} selected={selected} setSelected={setSelected}/>
        )
    }

    return(
        <StyledContent >
            <StyledSettings>
                <td> Verb:  </td>
                <StyledSelect onChange={(e)=>{
                        onChangeComboVerb(e)}} >
                        <option value='0'>-- Choose Verb --</option>
                        {quizverbs.map((v) =>
                            <option key={v.id} value={v.id}>{v.name}</option>         
                        )}
                </StyledSelect>
            </StyledSettings>
            { questions && DisplayQuestions() }
        </StyledContent>
    )  
}