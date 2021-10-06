import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import StyledCircle from './Styled/StyledCircle';
import { Modal } from './Styled/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import StyledIcon from "./Styled/StyledIcon";
import StyledButton from "./Styled/StyledButton";
import StyledCongrats from "./Styled/StyledCongrats";


const Button = styled.button`
  background-color: #FE0404;
  color: #0A0A0A;
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
    const [congrats, setCongrats] = useState(false)
    const openModal = () => {
      setShowModal(prev => !prev)
    }
   

    function lookmeaning(phid, pname){
      console.log("entre a look");
      setShowModal(prev=>!prev);
      setClickPrepadv(pname);
      setPhrasalIdNow(phid);
      setCongrats(false);
      meaning(phid);

    }


    function handleOnClickLearned(){
      updateLearned(phrasalIdNow);
      setCongrats(true);
  
    }

    function filteredVerbMeaning(){

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
          {(congrats) ? (
            <StyledCongrats>
              <td>C</td> <td>O</td> <td>N</td> <td>G</td> <td>R</td> <td>A</td> <td>T</td> <td>S</td> <td>!</td> <td>!</td>
            </StyledCongrats>):null}
        </div>)
      return(
        <Modal showModal={showModal} setShowModal={setShowModal} bodyMeaning={bodyMeaning}/>
        )
    }


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

