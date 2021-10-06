import React, {useState} from 'react';
import styled from 'styled-components';
import StyleSecondMod from './Styled/StyledSecondMod';
import StyledSelect  from './Styled/StyledSelect';
import StyledTd from './Styled/StyledTd';
import DisplayQuiz from './DisplayQuiz';

export default function Quiz({quizverbs, listquestion, questions, listverbprepq, verbprepadvq }){
    const [verbQName, setVerbQName] = useState(null);
    const [ verbqid, setVerbqId ] = useState(null);

    const onChangeComboVerb = (e) =>{
        const verbqid= e.target.value;
        let indexq = e.target.selectedIndex; //get text of selected option
        setVerbQName(e.target.options[indexq].text);//get text of selected option
        listverbprepq(verbqid);
        //listquestion(verbqid);
        
    }

    console.log("Questions en Quiz.js");
    console.log(questions)
    console.log("verqbid")
    console.log(verbqid)

    function DisplayQuestions(){
        return(
           <DisplayQuiz questions={questions} verbQName={verbQName} verbprepadvq={verbprepadvq}/>
        )
    }

    return(
        <StyleSecondMod>
            <tr height={"5px"}>
                <StyledTd fontsize={"25px"}>Verb : 
                </StyledTd>
                <td>
                    <StyledSelect onChange={(e)=>{
                        onChangeComboVerb(e)}} >
                        <option value='0'>--Choose Verb--</option>
                        {quizverbs.map((v) =>
                            <option key={v.id} value={v.id}>{v.name}</option>         
                        )}
                    </StyledSelect>
                </td>
            </tr> 
            { questions && DisplayQuestions() && verbprepadvq}
        </StyleSecondMod>
    )  
}