import React, {useState} from 'react';
import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import StyledCircle from './Styled/StyledCircle';
import { Modal } from './Styled/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import StyledIcon from "./Styled/StyledIcon";
import StyledButton from "./Styled/StyledButton";


const Button = styled.button`
  background-color: blue;
  color: white;
  font-size: 20px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  width: 90px;
  height: 40px;
  text-align:center;
`;

export default function DisplayPhrasal({verbprepadv, verbName,  verbmeaning, meaning, verbMeaning, newMeaning, updateLearned}) {
    console.log("en DISPLAYPHRASAL preposi")
    console.log(verbmeaning)
    console.log(newMeaning)

    const [showModal, setShowModal] = useState(false);
    const [clickPrepadv, setClickPrepadv] = useState(null);
    const [phrasalIdNow, setPhrasalIdNow] = useState(null);
    const openModal = () => {
      setShowModal(prev => !prev)
    }
   

    function lookmeaning(phid, pname){
      console.log("entre a look");
      setShowModal(prev=>!prev);
      setClickPrepadv(pname);
      setPhrasalIdNow(phid);
      meaning(phid);

    }


    function handleOnClickLearned(){
      updateLearned(phrasalIdNow);
    }


    function filteredVerbMeaning(){
      console.log("entre a mostrar modal")
      let  bodyMeaning = (
          <div>
            <p>
              <h3>{verbName} {clickPrepadv}</h3>
              {verbMeaning.map((mean,i) => 
              <tr style={{backgroundColor: i % 2 == 0?  'whitesmoke':'white', minHeight:'40px', minWidth: '100px'}}>
              <td>
                <StyledIcon ><FontAwesomeIcon icon={faBookmark}/></StyledIcon>
              </td>
              <td>
                {mean.definition}
                </td>
              </tr>
              )}
          </p>
          <StyledButton onClick={()=>handleOnClickLearned()}>
            <StyledIcon><FontAwesomeIcon icon={faCheckCircle} /></StyledIcon>
          </StyledButton>
          
        </div>)
      return(
        <Modal showModal={showModal} setShowModal={setShowModal} bodyMeaning={bodyMeaning}/>
        )
    }

console.log("Lo que tiene VerbMeaning")
console.log(verbMeaning)
    return(
         <StyledGrid>
            {verbprepadv.map((vp) =>
               <div><Button onClick = {() => lookmeaning(vp.phrasalid, vp.name) }>{vp.name}</Button></div>
            )}
            <StyledCircle display={"block"} >
                  <h1> {verbName}</h1>
            </StyledCircle>
            {verbMeaning &&  filteredVerbMeaning() }   
        </StyledGrid>

    )
}

