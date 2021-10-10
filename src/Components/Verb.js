import React, {useState} from 'react';
import DisplayPhrasal from './DisplayPhrasal';
import D from './D';
import styled from 'styled-components';
import StyleSecondMod from './Styled/StyledSecondMod';
import StyledSelect  from './Styled/StyledSelect';
import StyledTd from './Styled/StyledTd';
import StyledContent from './Styled/StyledContent';
import StyledSettings from './Styled/StyledSettings';



export default function Verb({verbs, listverbprep, verbprepadv, meaning, verbMeaning, newMeaning, updateLearned, example, meanbody}){
    
    const [verbName, setVerbName] = useState(null);

    const onChangeComboVerb = (e) =>{
        const verbid= e.target.value;
        let index = e.target.selectedIndex; //get text of selected option
        setVerbName(e.target.options[index].text);//get text of selected option
        listverbprep(verbid);
    }


    function filteredVerbPrep(){
        return(
           <DisplayPhrasal verbprepadv={verbprepadv} verbName={verbName} meaning={meaning} verbMeaning={verbMeaning}
                           newMeaning={newMeaning} updateLearned={updateLearned} example={example} meanbody={meanbody}/>
        )
    }

    return(
        <StyledContent >
            <StyledSettings>
                <td> Verb:  </td>
                <StyledSelect onChange={(e)=>{
                        onChangeComboVerb(e)}} >
                        <option value='0'>-- Choose Verb --</option>
                        {verbs.map((v) =>
                            <option key={v.id} value={v.id}>{v.name}</option>         
                        )}
                </StyledSelect>
            </StyledSettings>
            {verbprepadv &&  filteredVerbPrep()}
        </StyledContent>
    )
    
}




