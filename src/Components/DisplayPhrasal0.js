import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import StyledGrid from './Styled/StyledGrid';
import StyledCircle from './Styled/StyledCircle';
import { Modal } from './Styled/Modal';
import { Modal1 } from './Styled/Modal1';
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

export default function DisplayPhrasal({verbprepadv, verbName,  verbmeaning, meaning, verbMeaning, newMeaning, updateLearned, example, meanbody}) {
   console.log("verbMeaning")
   console.log(verbMeaning)
   console.log("meanbody")
   console.log(meanbody)
  
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
      setShowModal(prev => !prev)
    }
    

    const [showModalEx, setShowModalEx] = useState(false);
    const openModalEx = () => {
      setShowModalEx(prevex => !prevex)
    }

 console.log("showModal")
   console.log(showModal)
   console.log("showModalEx")
   console.log(showModalEx)


    const [clickPrepadv, setClickPrepadv] = useState(null);
    const [phrasalIdNow, setPhrasalIdNow] = useState(null);
    const [congrats, setCongrats] = useState(false)
    

    function lookmeaning(phid, pname){

      console.log("entre a lookmeaning")
      setShowModal(prev=>!prev);
      setClickPrepadv(pname);
      setPhrasalIdNow(phid);
      setCongrats(false);
      meaning(phid);

    }

    function exsynanth(meanId){
      setShowModalEx(prev=>!prev);
      example(meanId);
    }

    function handleOnClickLearned(){
      updateLearned(phrasalIdNow);
      setCongrats(true);
  
    }

//console.log("meanbody")
//console.log(meanbody)

    function filteredVerbMeaning(){

let bodymeanBody = (
  <div> hi </div>
)
      let  bodyMeaning = (
        <div>
          <p>
            <h3 className="questionphrasal">{verbName} {clickPrepadv}</h3>
             <div className="divider"></div>
            {verbMeaning.map((mean,i) => 
              <tr >
                <td>
                   <StyledIcon ><FontAwesomeIcon icon={faBookmark}/></StyledIcon>
                </td>
                <td >
                  {(mean.definition)[0].toUpperCase() + (mean.definition).slice(1)}
                </td>
                <td className="tdwidthb">
                  <button  className="buttonq cgr" onClick={()=>exsynanth(mean.id)}>Example</button>
                </td>
                <td className="tdwidthb">
                  <button className=" buttonq cgr">SynAnt</button>
                </td>
              </tr>
            )}
          </p>
          <button className="buttonq ml" onClick={()=>handleOnClickLearned()}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
          {(congrats) ? (
            <StyledCongrats>
              <td>C</td> <td>O</td> <td>N</td> <td>G</td> <td>R</td> <td>A</td> <td>T</td> <td>S</td> <td>!</td> <td>!</td>
            </StyledCongrats>):null}
        </div>
      )
      const newModal = <Modal showModal={showModal} setShowModal={setShowModal} bodyMeaning={bodyMeaning}/>
      const newModalEx = <Modal showModalEx={showModalEx} setShowModalEx={setShowModalEx} bodyMeaningEx={bodymeanBody} />;
      console.log(newModal);
      console.log(newModalEx);
      if (meanbody){
        return (
          newModalEx
        )
      }
      else{
      return(
        newModal
        )}
    }


    return(
         <StyledGrid>
           <div className="singleQuestion">
            {verbprepadv.map((vp) =>
               <div className="options"><button className={"singleOptionOrange"} onClick = {() => lookmeaning(vp.phrasalid, vp.name) }>{vp.name}</button></div>
            )}
            </div>
           
            {verbMeaning &&  filteredVerbMeaning() }   
        </StyledGrid>

    )
}

